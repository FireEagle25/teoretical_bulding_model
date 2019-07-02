<template>
  <section class="base-container">
    <div class="container">
      <H1 style="text-align: center; font-size: 2.5vh">МЕТОД ОЦЕНКИ УСТОЙЧИВОСТИ СООРУЖЕНИЙ ИЗ ЗАПОЛНЕННЫХ ОБОЛОЧЕК, УСТАНАВЛИВАЕМЫХ НА СЖИМАЕМОМ ОСНОВАНИИ</H1>
      <info-block/>
      <div class="row" style="text-align: center;background: none">

        <div class="col-md-12">
          <nuxt-link to="/menu"><button class="btn btn-success">Расчет</button></nuxt-link>
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
