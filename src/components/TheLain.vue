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
    delta: 200,
    loaded: false,
    glitch: false,
    glitches: [],
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
        s += `--src: url('${this.src}');`;
      }
      if (this.glitch) {
        s += this.g;
      }
      return s;
    },
    g() {
      return this.glitches.reduce((acc, cur, i) => {
        return (acc += `--clip-${i}:${cur.clip};--offset-${i}:${cur.offset};`);
      }, '');
    },
    avatarStyle() {
      return this.s;
    },
  },
  methods: {
    glitchGen() {
      const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const glitches = [];
      for (let i = 0; i < 11; i++) {
        const h = rand(1, 10);
        const clipInsetTop = rand(0, 100 - h);
        const clipInsetBottom = 100 - clipInsetTop - h;
        const clipInsetLeft = rand(0, 22);
        const clipInsetRight = rand(0, 33);
        const offsets = [2, 4, 8, 10];
        const offset0 = offsets[rand(0, offsets.length - 1)];
        const offset1 = offsets[rand(0, offsets.length - 1)];
        const offsetX = Math.max(1, rand(-1 * offset0, offset0));
        const offsetY = Math.max(1, rand(-1 * offset1, offset1));
        glitches.push({
          clip: `inset(${clipInsetTop}% ${clipInsetRight}% ${clipInsetBottom}% ${clipInsetLeft}%)`,
          offset: `translate(${offsetX}px, ${offsetY}px)`,
        });
      }
      return glitches;
    },
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
      this.glitches = this.glitchGen();
      this.$nextTick(() => {
        this.glitch = true;
        setTimeout(() => {
          this.glitch = false;
        }, 300);
      });
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
    /* clip-path: inset(15% 20% 55% 33%); */
    /* transform: translate(-2px, -3px); */
    clip-path: var(--clip-0);
    transform: var(--offset-0);
  }
  10% {
    /* clip-path: inset(27% 10% 60% 10%); */
    /* transform: translate(6px, 3px); */
    clip-path: var(--clip-1);
    transform: var(--offset-1);
  }
  20% {
    /* clip-path: inset(55% 5% 33% 5%); */
    /* transform: translate(-3px, 9px); */
    clip-path: var(--clip-2);
    transform: var(--offset-2);
  }
  30% {
    /* clip-path: inset(71% 5% 15% 5%); */
    /* transform: translate(1px, 7px); */
    clip-path: var(--clip-3);
    transform: var(--offset-3);
  }
  40% {
    /* clip-path: inset(60% 10% 27% 10%); */
    /* transform: translate(-6px, -3px); */
    clip-path: var(--clip-4);
    transform: var(--offset-4);
  }
  50% {
    /* clip-path: inset(43% 5% 53% 5%); */
    /* transform: translate(-3px, 9px); */
    clip-path: var(--clip-5);
    transform: var(--offset-5);
  }
  60% {
    /* clip-path: inset(15% 20% 55% 33%); */
    /* transform: translate(-2px, -3px); */
    clip-path: var(--clip-6);
    transform: var(--offset-6);
  }
  70% {
    /* clip-path: inset(47% 5% 50% 5%); */
    /* transform: translate(-6px, -9px); */
    clip-path: var(--clip-7);
    transform: var(--offset-7);
  }
  80% {
    /* clip-path: inset(47% 5% 50% 5%); */
    /* transform: translate(-6px, -9px); */
    clip-path: var(--clip-8);
    transform: var(--offset-8);
  }
  90% {
    /* clip-path: inset(55% 5% 42% 5%); */
    /* transform: translate(7px, 1px); */
    clip-path: var(--clip-9);
    transform: var(--offset-9);
  }
  100% {
    /* clip-path: inset(15% 20% 55% 33%); */
    /* transform: translate(-2px, -3px); */
    clip-path: var(--clip-10);
    transform: var(--offset-10);
  }
}
</style>
