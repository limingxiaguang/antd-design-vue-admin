<template>
  <div>
    {{ $t("messages")["app.dashboard.analysis.timeLabel"] }}:
    <a-date-picker></a-date-picker>
    <Chart :option="chartOption" style="height: 400px" />
    <pre v-highlightjs="ChartCode"><code class="html"></code></pre>
  </div>
</template>

<script>
import request from "../../utils/request";
import Chart from "../../components/Chart";
import ChartCode from "!!raw-loader!../../components/Chart";
export default {
  data() {
    return {
      chartOption: {},
      ChartCode
    };
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      // this.getChartData();
      // this.chartOption = Object.assign({}, this.chartOption)
      this.chartOption = { ...this.chartOption };
    }, 3000);
  },
  components: {
    Chart
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        method: "GET",
        params: { ID: 12345 }
      }).then(res => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: res.data
            }
          ]
        };
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
