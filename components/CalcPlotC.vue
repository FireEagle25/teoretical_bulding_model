
<script>
  import {Line} from 'vue-chartjs'

  export default {
    extends: Line,
    props: ["data"],
    watch: {
      data: function (newVal, oldVal) {
        console.log(1);
        this.show();
      }
    },
    mounted: function() {
      this.show();
    },
    methods: {
      show: function () {
        let fi_range = [];
        for (const index in this.data) {
          if (!fi_range.includes(this.data[index].fi))
            fi_range.push(this.data[index].fi);
          else
            break;
        }

        let sets = [];
        let curr_set = [];
        for (const index in this.data) {
          curr_set.push(this.data[index].f);
          if (curr_set.length == fi_range.length) {
            sets.push(curr_set);
            curr_set = [];
          }
        }
        const colors = [
          "rgba(0, 255, 0, 1)",
          "rgba(255, 255, 0, 1)",
          "rgba(0, 255, 255, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(128, 128, 0, 1)",
          "rgba(0, 145, 0, 1)",
          "rgba(0, 0, 134, 1)",
          "rgba(178, 0, 134, 1)",
        ];

        let datasets = [];
        for (const index in sets) {
          datasets.push({
            backgroundColor: colors[index],
            data: sets[index],
            label: "c = " + (10 + index * 10),
            fill: false
          })
        }

        this.renderChart({
          labels: fi_range,
          datasets: datasets
        }, {responsive: true, maintainAspectRatio: false})

      }
    }

  }
</script>
