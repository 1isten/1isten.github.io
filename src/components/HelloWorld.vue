<template>
  <div>
    <h1 class="text-h3 font-weight-bold mt-3">
      {{ msg }}
    </h1>
    <p class="mt-1 mb-2">
      {{ bio }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Hello World',
    bio: "I'm a programmer.",
  }),
};
</script>
