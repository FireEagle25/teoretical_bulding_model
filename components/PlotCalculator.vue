<template>
  <div>
    <div>
      <H3 style="font-weight: bold; margin-bottom: 2vh">Расчет</H3>
      <div>
        <p>В данном разделе определяется предельная нагрузка, приложенная к оголовку сооружения, которую сооружение воспринимает без потери несущей способности основания.</p>
        <p>Для того, чтобы определить предельную нагрузку задайтесь основными размерами оболочки (наружный диаметр –D, толщина стенки – t, высота конструкции – h , плечо равнодействующей нагрузки – d) , а также физико-механическими характеристиками грунта основания (угол внутреннего трения – φ, удельное сцепление – с).</p>
        <p>Промежуточные значения могут быть определены интерполяцией.</p>
      </div>
      <form class="text-center">
        <div class="form-group">
          <label for="D">Введите наружный диаметр оболочки, D, м</label>
          <input v-model.number="D" id="D" type="number" class="form-control">
        </div>
        <div class="form-group">
          <label for="n">Введите число оболочек в ряду, n, шт</label>
          <input v-model.number="n" id="n" type="number" class="form-control">
        </div>
        <div class="form-group">
          <label for="gamma">Введите удельный вес наполнителя, γ, кН/м^3</label>
          <input v-model.number="gamma" id="gamma" type="number" class="form-control">
        </div>
        <div class="form-group">
          <label for="HH">Введите высоту оболочки, H, м</label>
          <input v-model.number="HH" id="HH" type="number" class="form-control">
        </div>
        <div class="form-group">
          <label for="dd">Введите плечо приложения нагрузки, d, м</label>
          <input v-model.number="dd" id="dd" type="number" class="form-control">
        </div>
        <div class="form-group">
          <label for="k">Введите коэффициент запаса, k</label>
          <input v-model.number="k" id="k" type="number" class="form-control">
        </div>
      </form>
    </div>
    <h3>График зависимости предельной горизонтальной силы от угла внутреннего трения при заданном удельном сцеплении</h3>
    <h4>Ось "Y" - Fпр,кН, Ось "X" - φ,°</h4>
    <calc-plot-c :height="400" :data="results"></calc-plot-c>
  </div>
</template>

<script>
  import CalcPlotC from './CalcPlotC'
  import CalcPlotFi from "./CalcPlotFi";
  export default {
    name: "PlotCalculator",
    components: {CalcPlotFi, CalcPlotC},
    data() {
      return {
        D: 10,
        n: 1,
        gamma: 11,
        HH: 10,
        dd: 3.33,
        k: 1.2,
        c_range: [10, 120],
        fi_range: [5,50]
      }
    },

    computed: {
      results: function () {
        let c = this.c_range[0];
        let results = [];

        while (c < this.c_range[1]) {
          let fi = this.fi_range[0];
          while (fi < this.fi_range[1]) {
              results.push({
                "f":this.calc(fi, c),
                "c":c,
                "fi":fi
              });
            fi += 1;
          }
          c += 10;
        }
        return results;
      },
    },

    methods: {
      calc: function (fi_degrees, c) {
        let fi = fi_degrees * (Math.PI/180);
        const sin_cos = (1 + Math.sin(fi)) / (1 - Math.sin(fi));
        let res = (((-1) * this.n * this.gamma * this.HH * Math.PI * Math.pow(this.D, 3)) / (8 * this.dd * this.k)) * ((this.gamma * this.HH)
          / ((c * Math.pow(Math.tan(fi), -1))*(sin_cos * Math.pow(Math.E, Math.PI * Math.tan(fi)) - 1))-1);
        if (Math.round(res) < 0)
        	res = 0;
        return Math.round(res);
      }
    }
  }
</script>

<style scoped>
  button {
    margin: 15px;
  }


  @media (max-width: 760px) {
    label {width: 100%;}
  }
  h3, h4 {
    text-align: center;
  }
  p {
    text-indent: 6vh;
    text-align: justify;
  }
</style>
