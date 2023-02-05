<template>
  <div class="row">
    <form>
      <div class="col-6 mb-3">
        <label for="name" class="form-label">Car Name</label>
        <input class="form-control" name="name" placeholder="car name">
      </div>
      <div class="col-6 mb-3">
        <label for="year" class="form-label">Car Year</label>
        <input class="form-control" name="year" placeholder="car year">
      </div>
      <button type="submit" class="btn btn-success">save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "form-add-car"
}
</script>

<style scoped>

</style>