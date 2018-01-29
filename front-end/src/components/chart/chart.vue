<template>
  <div class="container" ref="chart"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
export default {
  watch: {
    chartData() {
      this.chart.clear()
      this._chartInit()
    }
  },
  methods: {
    _chartInit() {
      this.chart = echarts.init(this.$refs.chart)
      this.chart.setOption(this.chartData)
    }
  },
  created() {
    setTimeout(() => {
      this._chartInit()
    }, 20)
  },
  props: {
    chartData: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
div {
  width: 500px;
  height: 450px;
}
</style>
