<template >
  <div class="card">
    <img :src="[getImage(carData.image)]" class="card-img-top" alt="car image">
    <div class="card-body">
      <p hidden>{{carData.id}}</p>
      <h3 class="card-title">{{ carData.manufacturer }} &sdot; {{ carData.name }}</h3>
      <h5 class="card-text">{{ carData.year }} &sdot; {{ carData.type }}</h5>

    </div>
    <div class="card-footer">
      <div class="row">
        <p class="col card-text">ID: {{ carData.inGameID }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"cardComponent",
  props: {
    carData: Object
  },
  methods: {
      getImage(imagePathName){
          try {
              return require('@/assets/car_images/' + imagePathName)
          } catch (e){
              return require('@/assets/NOT_FOUND.jpg')
          }
      }
  }
}
</script>