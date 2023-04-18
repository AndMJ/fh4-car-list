<template>
  <main>
    <HeaderComponent @car-to-search="getNameToSearch"></HeaderComponent>
    <div class="container">
      <router-view :cars="cars" @add-new-car="addCar" :CarName="carToSearch"></router-view>
    </div>
  </main>
</template>

<script>
import HeaderComponent from "@/components/header-component.vue"
import carModel from "@/models/carModel"

export default {
  name: "App",
  components: {
    HeaderComponent
  },
  data(){
    return {
      cars: [],
      carToSearch: ""
    }
  },
  methods: {
    getNameToSearch(carName){
      this.carToSearch = carName
    },

    //ADD NEW CAR
    addCar(car){
      let new_car = {
        id: (Math.random() * 1000),
        name: car.name,
        year: car.year
      }

      this.cars.push(new_car)
    },


  },
  async beforeMount() {
    this.cars = await carModel.getCarList(this.$API_URI + "/api/car/list")

  }
}
</script>
