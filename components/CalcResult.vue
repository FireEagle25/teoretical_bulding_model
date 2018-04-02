<template>
  <div if="card" class="text-center">
    <div class="">
      <h5>Результат</h5>
        <table>
          <tr>
            <td>Удельное сцепление, c</td>
            <td class="res">{{this.res.c}} кН/м^2</td>
          </tr>
          <tr>
            <td>Угол внутреннего трения, φ</td>
            <td class="res">{{this.res.fi}}°</td>
          </tr>
          <tr>
            <td>Горизонтальная нагрузка, F</td>
            <td class="res">{{Math.round(this.res.f)}}кН</td>
          </tr>
        </table>
      <a href="#" v-on:click="recalc" class="btn btn-primary">Расчитать заново</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CalcResult",
        props: ['res'],
        methods: {
          recalc: function () {
            this.$emit('recalc');
          }
        }
    }
</script>

<style scoped>
  #card {
    text-align: left;
    width: 100%;
    padding: 10px;
    background: #cbced5;
    border-radius: 10px;
  }
  td {
    text-align: left;
  }
  .res {
    text-align: right;
    font-size: 34px;
  }
  h5 {
    font-weight: bold;
    font-size: 40px;
  }
  table {
    width: 100%;
    font-size: 25px;
  }
  a {
    margin: 4vh;
  }
</style>
