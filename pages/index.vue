<template>
  <section class="base-container">
    <div class="container">
      <H1 style="text-align: center; font-size: 2.5vh">Тема исследования</H1>
      <info-block/>
      <div class="row" style="text-align: center;background: none">
        <div class="col-md-6">
          <nuxt-link to="/calc"><button class="btn btn-success">Перейти к расчету</button></nuxt-link>
        </div>
        <div class="col-md-6">
          <nuxt-link to="/plot"><button class="btn btn-success">Перейти к построению графиков</button></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
button {
  margin-top: 5px;
}
.row {
  background: white;
  border-radius: 10px;
  padding: 5px;
}
</style>
<script>
  import InfoBlock from "../components/info/InfoBlock";
  export default {
    components: {InfoBlock}
  }
</script>
