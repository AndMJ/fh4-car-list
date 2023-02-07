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
    this.cars.push({ id:4562, name:"Toyota", year:"1999" },{ id:7892, name:"Nissan", year:"2000" },{ id:8729, name:"Mazda", year:"1998" })
  }
}
</script>
