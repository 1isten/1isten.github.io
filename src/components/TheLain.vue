<template>
  <div v-resize="onResize" class="avatar" :style="avatarContainerStyle">
    <v-img
      :src="require('@/assets/280544@1563729391.jpg')"
      :lazy-src="require('@/assets/280544@1563729391-lazy.jpg')"
      :height="'100%'"
      :style="avatarStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'LainIwakura',
  data: () => ({
    delta: 200,
  }),
  computed: {
    avatarContainerStyle() {
      return `
        width: ${this.delta}px;
        height: ${this.delta}px;
        border-radius: 50%;
        overflow: hidden;
      `;
    },
    avatarStyle() {
      return this.avatarContainerStyle;
    },
  },
  methods: {
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
