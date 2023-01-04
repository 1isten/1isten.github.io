<template>
  <v-layout justify-center align-center column wrap>
    <v-flex shrink>
      <the-lain />
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
import TheLain from '@/components/TheLain';
import HelloWorld from '@/components/HelloWorld';
import ExternalLinks from '@/components/ExternalLinks';

export default {
  name: 'HomePage',
  components: {
    TheLain,
    HelloWorld,
    ExternalLinks,
  },
};
</script>
