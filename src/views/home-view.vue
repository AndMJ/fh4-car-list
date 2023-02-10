<template>
  <div class="row mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Button @btn-click="formToggle = !formToggle" :class="formToggle == true ? 'btn btn-warning' : 'btn btn-success'" :text="formToggle == true ? 'Close' : 'New Car'"></Button>
        </div>
      </div>
      <formAddCar v-show="formToggle" @add-new-car="addNewCar"></formAddCar>

      <hr>

      <div class="row">
        <div class="col-lg-3 col-md-6 p-3" v-for="car in searchByName()" :key="car.id">
          <Card :carData="car" ></Card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Card from '@/components/card-component.vue';
import formAddCar from "@/components/form-add-car.vue";
import Button from "@/components/Button.vue";

export default {
  name: "home-view",
  props:{
    cars: Array,
    CarName: String
  },
  components: {
    Card,
    formAddCar,
    Button
  },
  data(){
    return {
      formToggle: false
    }
  },
  methods:{
    searchByName(){
      let carList = this.cars.filter((car) => car.name.toLowerCase().includes(this.$props.CarName))
      console.log(carList)
      return carList
    },
    addNewCar(newCar){
      this.$emit("add-new-car", newCar)
    }
  },
  emits:['add-new-car']
}
</script>