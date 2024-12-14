<template>
  <v-layout justify-center align-center>
    <v-flex class="not-found">
      <h1 class="text-h4 font-weight-black">
        <router-link
          id="homepage"
          class="secondary--text text--lighten-5"
          :to="{ name: 'home' }"
          replace
        >
          <span>homepage</span>
        </router-link>
      </h1>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.flex.not-found {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}

#homepage {
  font-family: 'Roboto Mono', monospace;
  text-decoration: none;
}

#homepage::before {
  content: '_(!';
}

#homepage::after {
  content: '404)_';
}

#homepage:hover {
  color: rgb(117, 117, 117) !important;
}

@media (prefers-color-scheme: dark) {
  #homepage:hover {
    color: rgb(238, 238, 238) !important;
  }
}

#homepage:hover::before {
  content: 'ヾ(¯';
}

#homepage:hover::after {
  content: ')з¯)ﾉﾟ';
}
</style>
