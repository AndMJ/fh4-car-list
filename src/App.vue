<template>
  <main>
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import HeaderComponent from "@/components/header-component.vue"
export default {
  name: "App",
  components: {
    HeaderComponent
  }
}
</script>
