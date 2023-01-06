<template>
  <v-layout justify-center align-center column wrap>
    <v-flex shrink>
      <the-lain />
    </v-flex>
    <v-flex shrink>
      <hello-world />
    </v-flex>
  </v-layout>
</template>

<script>
import TheLain from '@/components/TheLain';
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'HomePage',
  components: {
    TheLain,
    HelloWorld,
  },
};
</script>
