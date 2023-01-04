<template>
  <v-layout justify-center align-center column wrap>
    <v-flex shrink>
      <hirasawa-yui />
    </v-flex>
    <v-flex shrink>
      <hello-world />
    </v-flex>
    <v-flex shrink>
      <external-links />
    </v-flex>
  </v-layout>
</template>

<script>
import HirasawaYui from '@/components/HirasawaYui';
import HelloWorld from '@/components/HelloWorld';
import ExternalLinks from '@/components/ExternalLinks';

export default {
  name: 'HomePage',
  components: {
    HirasawaYui,
    HelloWorld,
    ExternalLinks,
  },
};
</script>
