<template>
  <div class="container">
    <template v-if="cartItems">
      <ul class="list-group">
        <li
          class="list-group-item   d-flex justify-content-center"
          v-for="(item, key) in cartItems"
          :key="key"
        >
          {{ item.title }} - {{ item.price }}
        </li>
      </ul>
      <div
        class="panel"
        style="width: 100%; text-align: center; margin-top: 20px;"
      >
        Quantity: {{ cartItems.length }} Total: {{ totalPrice }}$
      </div>
    </template>
    <template v-else>
      Your cart is empty, please add items to it
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cart: 'cart',
      totalPrice: 'totalPrice',
    }),
  },
}
</script>

<style scoped>
.cart-container {
  display: flex;
  justify-content: center;
}
</style>
