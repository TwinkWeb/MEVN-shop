<template>
  <div class="card-list">
    <ProductCard
      class="card"
      v-for="(product, key) in products"
      :key="key"
      :title="product.title"
      :price="product.price"
      :imageUrl="product.imageUrl"
      @addToCart="addToCart(product)"
      :inCart="cartItemsIDs.includes(product._id)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    ProductCard: () => import('@/components/CardProduct'),
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems',
    }),
    cartItemsIDs: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  async mounted() {
    await this.fetchProducts()
    console.log(this.products)
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
    }),
    ...mapMutations({
      addToCart: 'addToCart',
    }),
  },
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.card-list {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
