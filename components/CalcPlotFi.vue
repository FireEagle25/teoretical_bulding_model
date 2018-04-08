
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
    updated: function() {
      this.show();
    },
    methods: {
      show: function () {
        let c_range = [];
        console.log(this.data);
        for (const index in this.data) {
          if (!c_range.includes(this.data[index].c))
            c_range.push(this.data[index].c);
        }
      console.log(c_range);
        let sets = [];
        let curr_set = [];

        this.data.sort(function(a, b){
          if(a.fi < b.fi) return -1;
          if(a.fi > b.fi) return 1;
          return 0;
        });

        for (const index in this.data) {
          curr_set.push(this.data[index].f);
          if (curr_set.length == c_range.length) {
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
            label: "φ = " + ((index*5)+5),
            fill: false
          })
        }

        this.renderChart({
          labels: c_range.sort(function sortNumber(a,b) {return a - b;}),
          datasets: datasets
        }, {responsive: true, maintainAspectRatio: false})

      }
    }

  }
</script>
