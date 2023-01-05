<template>
  <div>
    <v-tooltip v-for="(link, i) in links" :key="i" bottom disabled>
      <template v-slot:activator="{ on }">
        <v-btn
          class="link-btn"
          :href="link.href"
          :target="link.target"
          :small="$vuetify.breakpoint.smAndDown"
          :style="`margin: 0 ${$vuetify.breakpoint.smAndDown ? 0.4 : 0.25}ch;`"
          icon
          v-on="on"
        >
          <v-icon :class="`link-icon-${link.text}`" :size="iconSize">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ link.text }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mdiNuxt, mdiGithub, mdiTwitter } from '@mdi/js';

export default {
  name: 'ExternalLinks',
  data: () => ({
    links: [
      {
        href: '/roadmap/stack',
        target: '_self',
        icon: mdiNuxt,
        text: 'Stack',
      },
      {
        href: 'https://github.com/1isten',
        target: '_blank',
        icon: mdiGithub,
        text: 'GitHub',
      },
      {
        href: 'https://twitter.com/iH8safari',
        target: '_blank',
        icon: mdiTwitter,
        text: 'Twitter',
      },
    ],
  }),
  computed: {
    iconSize() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 20;
      }
      if (this.$vuetify.breakpoint.smOnly) {
        return 22;
      }
      return 24;
    },
  },
};
</script>

<style scoped>
.link-icon-Stack,
.link-icon-GitHub,
.link-icon-Twitter {
  transition: 300ms;
}

.link-btn:hover .link-icon-Stack {
  color: #00dc82 !important;
}
.link-btn:hover .link-icon-GitHub {
  color: #24292f !important;
}
.link-btn:hover .link-icon-Twitter {
  color: #1d9bf0 !important;
}
@media (prefers-color-scheme: dark) {
  .link-btn:hover .link-icon-GitHub {
    color: rgba(255, 255, 255, 0.7) !important;
  }
}
</style>
