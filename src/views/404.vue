<template>
  <v-layout justify-center align-center>
    <h1 class="text-h4 font-weight-black">
      <router-link
        id="homepage"
        class="secondary--text text--lighten-5"
        :to="{ name: 'home' }"
        replace
      >
        <span style="display: none">homepage</span>
      </router-link>
    </h1>
  </v-layout>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
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
