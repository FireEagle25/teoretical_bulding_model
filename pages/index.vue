<template>
  <section class="base-container">
    <div class="container">
      <H1 style="text-align: center; font-size: 2.5vh">МЕТОД РАСЧЕТА ПРЕДЕЛЬНЫХ НАГРУЗОК НА СООРУЖЕНИЯ
        ИЗ ЗАПОЛНЕННЫХ ЦИЛИНДРИЧЕСКИХ ОБОЛОЧЕК</H1>
      <info-block/>
      <div class="row" style="text-align: center">
        <div class="col-md-6">
          <nuxt-link to="/calc"><button class="btn btn-success">Перейти к расчету</button></nuxt-link>
        </div>
        <div class="col-md-6">
          <button class="btn" disabled>Перейти к построению графиков</button>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.base-container {
  min-height: 100vh;
  display: flex;
}
button {
  margin-top: 5px;
}
</style>
<script>
  import InfoBlock from "../components/info/InfoBlock";
  export default {
    components: {InfoBlock}
  }
</script>
