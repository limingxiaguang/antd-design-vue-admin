<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import { addListener, removeListener } from "resize-detector";
import debounce from "loadsh/debounce";
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    }
    // //深度监听
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }
  },
  created() {
    // 防抖
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    // 监听容器的大小变化
    addListener(this.$refs.chartDom, this.resize);
  },
  methods: {
    // 重新设置图表的大小
    resize() {
      this.chart.resize();
      console.log("resize");
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      // 绘制图表
      this.chart.setOption(this.option);
    }
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    //   把 chart 实例给销毁掉
    this.chart.dispose();
    this.chart = null;
  }
};
</script>

<style></style>
