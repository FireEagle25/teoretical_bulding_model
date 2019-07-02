<template>
  <section class="base-container">
    <div class="container">
      <H1 style="text-align: center; font-size: 2.5vh">МЕТОД ОЦЕНКИ УСТОЙЧИВОСТИ СООРУЖЕНИЙ ИЗ ЗАПОЛНЕННЫХ ОБОЛОЧЕК, УСТАНАВЛИВАЕМЫХ НА СЖИМАЕМОМ ОСНОВАНИИ</H1>
      <info-block/>
      <div class="row" style="text-align: center;background: none">

        <div class="col-md-12">
          <nuxt-link to="/menu"><button class="btn btn-success">Перейти к расчету</button></nuxt-link>
        </div>
      </div>

      <footer class="footer" style="padding-top: 250px">
        <div class="container">
          <p class="text-muted" style="text-align: right">Tsimbelman N.Ya., Chernova T.I., Bilgin O. Theoretical model for the stability of soil under shell gravity structures. Proceedings of the Twenty-sixth (2016) International Ocean and Polar Engineering Conference – Rhodes, Greece, June 26-July 1, 2016. Coopyright © 2016 by the International Society of Offshore and Polar Engineers (ISOPE). ISBN 978-1-880653-88-3; ISSN 1098-6189.</p>
        </div>
      </footer>
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
