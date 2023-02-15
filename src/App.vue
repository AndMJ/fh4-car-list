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
    }
  },
  beforeMount() {
    this.cars.push(
      {
        name: "124 Spider",
        id: 2740,
        year: 2017,
        manufacturer: "Abarth",
        type: "Autoshow",
        image: "124 SPIDER 2017 ABARTH.jpg"
      },
      {
        name: "695 Biposto",
        id: 2489,
        year: 2016,
        manufacturer: "Abarth",
        type: "Autoshow",
        image: "695 BIPOSTO 2016 ABARTH.jpg"
      }
    )
  }
}
</script>
