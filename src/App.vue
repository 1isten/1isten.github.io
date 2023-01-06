<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-main>
    <v-footer color="transparent" padless>
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          <external-links />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import ExternalLinks from '@/components/ExternalLinks';

export default {
  name: 'App',
  components: {
    ExternalLinks,
  },
  data: () => ({
    prefersDark: undefined,
    isDark: false,
  }),
  mounted() {
    if (window.matchMedia) this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (this.prefersDark) {
      this.prefersDark.addListener(this.setColorScheme);
      this.isDark = this.prefersDark.matches;
    }
  },
  beforeDestroy() {
    if (this.prefersDark) {
      this.prefersDark.removeListener(this.setColorScheme);
    }
  },
  methods: {
    setColorScheme(e) {
      this.isDark = e.matches;
    },
  },
  watch: {
    isDark(isDark) {
      document.documentElement.style.setProperty('color-scheme', isDark ? 'dark' : 'normal');
      const themeColorMeta = document.querySelector('head > meta[name="theme-color"]');
      themeColorMeta.setAttribute('content', isDark ? '#202024' : '#dee1e6');
    },
  },
};
</script>

<style>
:root {
  --font-size: calc(0.8em + 0.1vw + 0.1vh);
  --background: white;
  --color: #000000de;
}

html {
  width: 100vw;
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html,
body {
  background: var(--background);
  font-size: var(--font-size) !important;
  margin: 0;
  border: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

#app {
  background: var(--background);
  color: var(--color);
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-application--wrap {
  min-height: 0;
}

.v-image__image--preload {
  -webkit-filter: blur(4px) !important;
  filter: blur(4px) !important;
}

.avatar {
  transition: filter 1000ms;
  filter: brightness(2);
}

.v-icon {
  color: #5f6368 !important;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: rgb(53, 54, 58);
    --color: rgba(238, 238, 238, 1);
  }

  .avatar {
    filter: none;
  }

  .v-icon {
    color: #f0f6fc !important;
  }
}
</style>
