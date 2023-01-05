<template>
  <div v-resize="onResize" class="avatar" :class="{ glitch }" :style="s">
    <v-img
      :src="src"
      :lazy-src="srcLazy"
      :height="'100%'"
      :style="avatarStyle"
      @click="onClick"
      @load="onLoad"
    />
  </div>
</template>

<script>
export default {
  name: 'LainIwakura',
  data: () => ({
    src: require('@/assets/280544@1563729391.jpg'),
    srcLazy: require('@/assets/280544@1563729391-lazy.jpg'),
    loaded: false,
    glitch: false,
    delta: 200,
  }),
  computed: {
    s() {
      let s = `
        position: relative;
        z-index: 0;
        width: ${this.delta}px;
        height: ${this.delta}px;
        border-radius: 50%;
        overflow: hidden;
      `;
      if (this.loaded) {
        s += `
          --src: url('${this.src}');
        `;
      }
      return s;
    },
    avatarStyle() {
      return this.s;
    },
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loaded = true;
        this.$nextTick(() => {
          this.onClick();
        });
      }, 700);
    },
    onClick() {
      if (this.glitch) {
        return;
      }
      this.glitch = true;
      setTimeout(() => {
        this.glitch = false;
      }, 300);
    },
    onResize() {
      const pa = 12 * 2;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const min = vw < vh ? vw : vh;
      const max = 100;
      let delta = max;
      if (min < max + pa) {
        delta = min - pa;
      }
      const final = delta + 0.06 * vw + 0.04 * vh;
      this.delta = final < 200 ? final : 200;
    },
  },
};
</script>

<style>
.avatar::after {
  content: '';
  display: none;
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: var(--src);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.avatar.glitch::after {
  display: block;
  animation-name: glitch;
  animation-duration: 300ms;
  animation-timing-function: steps(1, end);
}

@keyframes glitch {
  0% {
    opacity: 1;
    visibility: visible;
    clip-path: inset(15% 20% 55% 33%);
    transform: translate(-2px, -3px);
  }
  10% {
    clip-path: inset(27% 10% 60% 10%);
    transform: translate(6px, 3px);
  }
  20% {
    clip-path: inset(55% 5% 33% 5%);
    transform: translate(-3px, 9px);
  }
  30% {
    clip-path: inset(71% 5% 15% 5%);
    transform: translate(1px, 7px);
  }
  40% {
    clip-path: inset(60% 10% 27% 10%);
    transform: translate(-6px, -3px);
  }
  50% {
    clip-path: inset(43% 5% 53% 5%);
    transform: translate(-3px, 9px);
  }
  60% {
    clip-path: inset(15% 20% 55% 33%);
    transform: translate(-2px, -3px);
  }
  70% {
    clip-path: inset(47% 5% 50% 5%);
    transform: translate(-6px, -9px);
  }
  80% {
    clip-path: inset(47% 5% 50% 5%);
    transform: translate(-6px, -9px);
  }
  90% {
    clip-path: inset(55% 5% 42% 5%);
    transform: translate(7px, 1px);
  }
  100% {
    clip-path: inset(15% 20% 55% 33%);
    transform: translate(-2px, -3px);
  }
}
</style>
