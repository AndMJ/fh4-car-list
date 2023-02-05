<template>
  <div class="row mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Button @btn-click="formToggle = !formToggle" :class="formToggle == true ? 'btn btn-warning' : 'btn btn-success'" :text="formToggle == true ? 'Close' : 'New Car'"></Button>
        </div>
      </div>
      <formAddCar v-show="formToggle"></formAddCar>
    </div>

    <div class="col-lg-3 col-md-6 p-3" v-for="car in cars" :key="car.id">
      <Card :carData="car"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card-component.vue';
import formAddCar from "@/components/form-add-car.vue";
import Button from "@/components/Button.vue";

export default {
  name: "home-view",
  components: {
    Card,
    formAddCar,
    Button
  },
  data(){
    return {
      cars: [],
      formToggle: false
    }
  },
  beforeMount() {
    this.cars.push({ id:4562, name:"Toyota", year:"1999" },{ id:7892, name:"Nissan", year:"2000" },{ id:8729, name:"Mazda", year:"1998" })
  }
}
</script>