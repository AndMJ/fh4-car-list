<template>
  <div class="row">
    <form @submit="AddNewCar">
      <div class="col-6 mb-3">
        <label for="name" class="form-label">Car Name</label>
        <input class="form-control" v-model="name" name="name" placeholder="car name">
      </div>
      <div class="col-6 mb-3">
        <label for="year" class="form-label">Car Year</label>
        <input class="form-control" v-model="year" name="year" placeholder="car year">
      </div>
      <button type="submit" class="btn btn-success">save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "form-add-car",
  data(){
    return {
      name: "",
      year: ""
    }
  },
  methods:{
    AddNewCar(e){
      e.preventDefault()

      this.$emit('add-new-car', {name: this.name, year: this.year})
    }
  },
  emits: ['add-new-car']
}
</script>
