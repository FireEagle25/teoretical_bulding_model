<template>
  <div class="row" style="margin-top: 3vw">
    <div class="col-md-12">
      <p :key="paragraph.id" v-for="paragraph of paragraphs_to_show">{{ paragraph }}</p>
    </div>

    <div class="row" style="text-align: center; background: none" v-if="show_arrows">
      <div class="col-md-12" style="display: none">
        <button v-on:click="curr_page--" :disabled="has_previos_page" class="btn">←</button>
        -
        <button v-on:click="curr_page++" :disabled="has_next_page" class="btn">→</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "InfoBlock",
        data() {
          return {
            paragraphs: [
              "Метод разработан для предварительной оценки устойчивости оболочечных сооружений из условия обеспечения несущей способности основания. (Подробно математическая модель данного метода описана в работе Цимбельмана  и др. [1]). \n",
			  "Теоретическая модель оценки устойчивости грунтовых оснований рассматриваемых сооружений основана на решении задачи о предельном напряженном состоянии грунтового основания с учетом развития полей скольжения. Исходя из предельной несущей способности основания, определяется предельная нагрузка, действующая на оболочку, при которой система «оболочка-основание» сохраняет состояние равновесия. \n" ,
			  "Предложенная зависимость представляет собой теоретическую модель, функционально связывающую параметры грунта основания и размеры сооружения с максимальной горизонтальной силой, которую сооружение воспринимает без потери несущей способности основания.   \n",
			  "Модель позволяет осуществить быстрый предварительный подбор характеристик основания при заданных габаритах сооружения из условия сохранения несущей способности грунта, либо при заданных прочностных характеристика грунта определяется предельная горизонтальная сила, прикладываемая к оголовку сооружения заданных габаритов. "],
            curr_page: 0
          }
        },
      computed: {
          paragraphs_to_show: function () {
            return this.paragraphs;
          },
          has_next_page: function () {
            return (this.curr_page + 1 >= this.paragraphs.length / 2);
          },
          has_previos_page: function () {
            return this.curr_page === 0;
          },
          show_arrows: function () {
            return this.paragraphs.length > 2;
          }
      }
    }
</script>

<style scoped>
  .row {
    margin-top: 3vw;
    text-align: justify;
  }
  p {
    text-indent: 6vh;
    font-size: 2vh;
  }
</style>
