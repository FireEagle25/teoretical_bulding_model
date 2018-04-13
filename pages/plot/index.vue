<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <plot-calculator></plot-calculator>
      </div>
    </div>
  </div>

</template>

<script>
    import PlotCalculator from "../../components/PlotCalculator";
    export default {
        name: "index",
        components: {PlotCalculator}
    }
</script>

<style scoped>
  .full-size {
    width: 100%;
    height: 30%;
  }
</style>
