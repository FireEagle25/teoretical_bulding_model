<template>
  <div id="card" class="text-center">
    <div class="">
      <h5>Результат</h5>
        <table>
          <tr v-if="show_c">
            <td>Удельное сцепление, c</td>
            <td class="res">{{this.res.c}} кПа</td>
          </tr>
          <tr v-if="!show_c">
            <td>Угол внутреннего трения, φ</td>
            <td class="res">{{this.res.fi}}°</td>
          </tr>
          <tr>
            <td>Предельная нагрузка, F</td>
            <td class="res">{{Math.round(this.res.f)}}кН</td>
          </tr>
          <tr v-if="material">
            <td>Грунт</td>
            <td class="res">{{this.material}}</td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CalcResult",
        props: ['res', 'show_c'],
        computed: {
          material: function () {
            if (this.res.c >= 1 && this.res.c <= 10 && this.res.fi >= 23 && this.res.fi <= 43)
              return "Пески";
            if (this.res.c >= 9 && this.res.c <= 21 && this.res.fi >= 18 && this.res.fi <= 30)
              return "Супеси";
            if (this.res.c >= 15 && this.res.c <= 47 && this.res.fi >= 17 && this.res.fi <= 26)
              return "Суглинки";
            if (this.res.c >= 29 && this.res.c <= 81 && this.res.fi >= 7 && this.res.fi <= 21)
              return "Глины";
            return null;
          }
        }
    }
</script>

<style scoped>
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
