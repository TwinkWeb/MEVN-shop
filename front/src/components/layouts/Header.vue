<template>
  <header class="header">
    <div class="header__left">LOGO</div>
    <div class="header__right">
      <router-link to="/cart">Cart {{ cartCount }}</router-link>
      <ul class="nav">
        <li class="nav__link" v-for="(category, key) in categories" :key="key">
          <router-link :to="`category/${category.id}`">{{
            category.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    cartCount: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  align-items: center;
}

.nav {
  list-style: none;
  display: flex;
  padding-inline-start: 0;
  width: 100%;
  text-decoration: none;
}

.nav__link {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-right: 10px;
}

a:hover {
  color: olive;
  transition: 0.2s;
}
</style>
