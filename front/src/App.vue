<template>
  <div id="app">
    <MevnHeader :categories="categories" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    MevnHeader: () => import('@/components/layouts/Header'),
  },
  data: () => ({
    categories: [
      { id: 1, title: 'PS4' },
      { id: 2, title: 'XBOX' },
      { id: 3, title: 'Nintendo' },
    ],
  }),
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
