<template>
  <div class="card">
    <div class="card__header">{{ title }} - {{ price }}</div>

    <img :src="imageUrl" />
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: () => '',
    },
    price: {
      type: String,
      default: () => 0,
    },
    imageUrl: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped></style>
