<template>
  <div class="card">
    <div class="card__header">{{ title }} - {{ price }}</div>

    <img class="cardImage" :src="imageUrl" />
    <button class="btn btn-info" v-if="!inCart" @click="$emit('addToCart')">
      Добавить в корзину
    </button>
    <button class="btn btn-danger" v-else @click="$emit('addToCart')">
      Убрать из корзины
    </button>
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
    inCart: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.cardImage {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
}
.card {
  margin-left: 20px;
  border-radius: 10px;
}
</style>
