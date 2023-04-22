<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../assets/flat-retro-car.svg" class="bi me-2" width="40" height="32">
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" :class="this.$route.path=='/' ? 'nav-link text-white' : 'nav-link text-secondary'">Car List</router-link></li>
          <li><router-link to="/users" :class="this.$route.path=='/users' ? 'nav-link text-white' : 'nav-link text-secondary'">Users</router-link></li>
          <li><router-link to="/about" :class="this.$route.path=='/about' ? 'nav-link text-white' : 'nav-link text-secondary'">About</router-link></li>
        </ul>

        <form @submit.prevent class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input @input="$emit('car-to-search', searchCar)" v-model="searchCar" type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data(){
    return {
      searchCar: ""
    }
  },
  emits: ['car-to-search']
}
</script>