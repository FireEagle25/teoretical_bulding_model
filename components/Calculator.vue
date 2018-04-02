<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <calc-result v-if="res" v-bind:res="this.res" v-on:recalc="res = null"/>
      <div v-else>
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
            <label for="gamma">Введите удельный вес, γ, кН/м^3</label>
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
            <label for="k">Введите коэффициент запаса, n, шт</label>
            <input v-model.number="k" id="k" type="number" class="form-control">
          </div>
        </form>

        <button v-on:click="res = closest_result" class="btn btn-success">Рассчитать</button>

      </div>

    </transition>
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
            c_range: [10, 120],
            fi_range: [5,50],
            res: false
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
                fi += 5;
              }
              c += 10;
            }
            return results;
          },
          closest_result: function () {
            const results = this.results;
            let closest = results[0];
            const self = this;

            results.forEach(function(res, i, arr) {
              if (Math.abs(closest.f - self.F) > Math.abs(res.f - self.F))
                closest = res;
            });
            return closest;
          }

        },

        methods: {
          calc: function (fi_degrees, c) {
            let fi = fi_degrees * (Math.PI/180);
            const sin_cos = (1 + Math.sin(fi)) / (1 - Math.sin(fi));
            return (((-1) * this.n * this.gamma * this.HH * Math.PI * Math.pow(this.D, 3)) / (8 * this.dd * this.k)) * ((this.gamma * this.HH)
              / ((c * Math.pow(Math.tan(fi), -1))*(sin_cos * Math.pow(Math.E, Math.PI * Math.tan(fi)) - 1))-1);
          }
        }
    }
</script>

<style scoped>
  button {
    margin: 15px;
  }

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  @media (max-width: 760px) {
    label {width: 100%;}
  }
</style>
