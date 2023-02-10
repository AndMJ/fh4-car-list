<template >
  <div class="card">
    <!--<img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title">{{ carData.name }}</h5>
      <p class="card-text">{{ carData.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"cardComponent",
  props: {
    carData: Object
  }
}
</script>