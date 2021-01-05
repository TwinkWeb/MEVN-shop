<template>
  <div id="app">
    <MevnHeader :categories="categories" :cartCount="cartCount" />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  mounted() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cartCount',
    }),
  },
  components: {
    MevnHeader: () => import('@/components/layouts/Header'),
  },
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
