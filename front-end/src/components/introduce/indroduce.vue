<template>
  <div class="jumbotron">
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item" v-for="(name,index) in names" :key="index">
        <a class="nav-link active" @click="pageChange(index + 1)">{{ name }}</a>
      </li>
    </ul>
    <br>
    <div class="row">
      <div class="col" v-for="(chart,index) in charts" :key="index">
        <chart :chartData="chart"/>
      </div>
    </div>
    <h5>copyright @pedro 2018</h5>
  </div>
</template>

<script>
import Chart from '../chart/chart'
import {
  distributioOne,
  distributionAll,
  wordCloundOne,
  lineOne,
  wordTwo,
  lineTwo
} from '../../common/js/chartData'
export default {
  created() {
    setTimeout(() => {
      this._initChart()
    }, 20)
  },
  methods: {
    _initChart(index = 1) {
      this.charts = this.datas.slice((index - 1) * 2, 2 * index)
    },
    pageChange(index) {
      this._initChart(index)
    }
  },
  data() {
    return {
      datas: [
        distributioOne,
        distributionAll,
        wordCloundOne,
        wordTwo,
        lineOne,
        lineTwo
      ],
      charts: [],
      names: ['分布图', '词云图', '折线图']
    }
  },
  components: {
    Chart
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
