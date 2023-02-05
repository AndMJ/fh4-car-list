<template>
  <button @click="$emit('btn-click')">{{ text }}</button>
</template>

<script>
export default {
  name: "button-component",
  props: {
    text: String
  },
  emits:['btn-click']
}
</script>

<style scoped>

</style>