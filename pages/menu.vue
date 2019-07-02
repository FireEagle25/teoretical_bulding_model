<template>
  <section class="base-container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Выберите вариант расчета</h2>
          <nuxt-link to="/calc"><button type="button" class="btn btn-success btn-lg">Перейти к расчету</button></nuxt-link>
          <nuxt-link to="/plot"><button type="button" class="btn btn-warning btn-lg">Перейти к построению графиков</button></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style scoped>
  button {
    margin: 10px;
  }
  .row {
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 10vh;
    background: white;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid grey;
  }
  @media screen and (max-width: 420px){
    .row, .container, .col-md-12 {
      background: transparent !important;
      border: 0 !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    button {
      margin-right: 0;
      margin-left: 0;
    }
  }
</style>
