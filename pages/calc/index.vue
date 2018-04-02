<template>
  <section class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <calculator/>
        </div>
        <div class="col-md-6">
          <img src="/images/cover.jpg" class="rounded float-left" style="background-repeat: no-repeat; background-size: cover; max-width: 100%">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Calculator from "../../components/Calculator";

  export default {
    components: {
      Calculator
    }
  }
</script>

<style>
  .base-container {
    min-height: 100vh;
    display: flex;
    text-align: center;
  }
</style>
