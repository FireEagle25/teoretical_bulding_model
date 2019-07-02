<template>

  <div class="row" style="padding: 2px">
    <div style="margin: 10px;padding: 4px; font-weight:bold;font-size: 16px; background-color: white; border-radius: 10px;border: 1px solid grey;max-width: 100%; text-align: justify">
      В данном разделе выполняется подбор значений характеристик грунта основания, при которых не происходит нарушения равновесия системы «оболочка-основание».<br>
      Для того чтобы определить основные физико-механические характеристики грунта основания (с – удельное сцепление грунта, φ –  угол внутреннего трения) необходимо задаться основными размерами оболочки (наружный диаметр –D, толщина стенки – t, высота конструкции – h , плечо равнодействующей нагрузки – d), а также величиной предельной нагрузки (Fmax),  воспринимаемой сооружением.<br>

    </div>
    <div class="col-md-6">
      <div>
        <H3 style="font-weight: bold; margin-bottom: 2vh">Расчет</H3>
        <form class="text-center">
          <div class="form-group">
            <label for="F">Введите горизонтальную нагрузку, F, кН</label>
            <input v-model.number="F" id="F" type="number" class="form-control">
          </div>
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
          <div class="form-group">
            <label for="c">Введите удельное сцепление, с, кПа</label>
            <input v-model.number="c" id="c" type="number" class="form-control">
          </div>
        </form>

        <button v-on:click="res = closest_result" class="btn btn-success">Рассчитать</button>

      </div>
    </div>
    <div class="col-md-6">
      <img src="/teoretical_bulding_model/images/cover.jpg" class="rounded float-left" style="background-repeat: no-repeat; background-size: cover; max-width: 100%">
      <img src="/teoretical_bulding_model/images/formulae.jpg" class="rounded float-left" style="background-repeat: no-repeat; background-size: cover; max-width: 100%">
      <calc-result v-if="res" v-bind:res="this.res" v-on:recalc="res = null" :show_c="false"/>
    </div>
  </div>
</template>

<script>
    import CalcResult from "./CalcResult";
    export default {
      name: "calculator",
      components: {CalcResult},
      data() {
          return {
            F: 2794.35,
            D: 10,
            n: 1,
            gamma: 11,
            HH: 10,
            dd: 3.33,
            k: 1.2,
            c: 20,
            fi_range: [5,50],
            res: false
          }
        },

        computed: {
          results: function () {
            let results = [];
            let fi = this.fi_range[0];
            while (fi < this.fi_range[1]) {
              results.push({
                "f":this.calc(fi, this.c),
                "c":this.c,
                "fi":fi
              });
              fi += 1;
            }
            return results;
          },
          closest_result: function () {
            const results = this.results;
            let closest = results[0];
            const self = this;

            results.forEach(function(res, i, arr) {
              if (Math.abs(Math.abs(closest.f) - self.F) > Math.abs(Math.abs(res.f) - self.F) && (res.f > 0)) {
                console.log(closest.f, res.f);
                closest = res;
              }
            });
            return closest;
          }

        },

		watch: {
			c: function (val) {
			  if (val <= 0 && val != "" || val == "0") {
			  	alert("Задайте удельное сцепление отличное от нуля ");
			  	this.c = 20;
              }
			},
		},

        methods: {
          calc: function (fi_degrees, c) {
            let fi = fi_degrees * (Math.PI/180);
            const sin_cos = (1 + Math.sin(fi)) / (1 - Math.sin(fi));
            const res = (((-1) * this.n * this.gamma * this.HH * Math.PI * Math.pow(this.D, 3)) / (8 * this.dd * this.k)) * ((this.gamma * this.HH)
              / ((c * Math.pow(Math.tan(fi), -1))*(sin_cos * Math.pow(Math.E, Math.PI * Math.tan(fi)) - 1))-1);
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
  img {
    margin-bottom: 10px;
  }
</style>
