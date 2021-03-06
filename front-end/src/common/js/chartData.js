export const distributioOne = {
  title: {
    text: '字数在1000 - 5000 的文章字数分布',
    subtext: '单位为：（字）'
  },
  tooltip: {},
  xAxis: {
    data: ['1000-2000', '2000-3000', '3000-4000', '4000-5000']
  },
  yAxis: {},
  series: [
    {
      name: '字数',
      type: 'bar',
      data: [627, 495, 347, 238]
    }
  ]
}

export const distributionAll = {
  title: {
    text: '掘金文章长度分布图',
    subtext: '单位为：（字）'
  },
  tooltip: {},
  radius: '55%',
  series: [
    {
      name: '字数',
      type: 'pie',
      data: [
        { name: 'x-small', value: 674 },
        { name: 'large', value: 175 },
        { name: 'middle', value: 440 },
        { name: 'small', value: 1707 }
      ]
    }
  ]
}

export const wordCloundOne = {
  backgroundColor: '#fff',
  legend: [{ data: [] }],
  series: [
    {
      data: [
        {
          name: 'XSS',
          textStyle: { normal: { color: 'rgb(114,149,106)' } },
          value: 2
        },
        {
          name: 'Debug',
          textStyle: { normal: { color: 'rgb(63,99,57)' } },
          value: 11
        },
        {
          name: 'maven',
          textStyle: { normal: { color: 'rgb(158,104,115)' } },
          value: 10
        },
        {
          name: 'Android Studio',
          textStyle: { normal: { color: 'rgb(64,50,76)' } },
          value: 10
        },
        {
          name: 'VisualVM',
          textStyle: { normal: { color: 'rgb(59,121,34)' } },
          value: 1
        },
        {
          name: 'ECMAScript 6',
          textStyle: { normal: { color: 'rgb(141,140,30)' } },
          value: 23
        },
        {
          name: 'Bootstrap',
          textStyle: { normal: { color: 'rgb(123,128,94)' } },
          value: 4
        },
        {
          name: 'Mac',
          textStyle: { normal: { color: 'rgb(19,132,133)' } },
          value: 11
        },
        {
          name: 'ECharts',
          textStyle: { normal: { color: 'rgb(36,6,28)' } },
          value: 6
        },
        {
          name: 'CentOS',
          textStyle: { normal: { color: 'rgb(72,134,83)' } },
          value: 1
        },
        {
          name: '阿里巴巴',
          textStyle: { normal: { color: 'rgb(41,108,123)' } },
          value: 3
        },
        {
          name: '微信小程序',
          textStyle: { normal: { color: 'rgb(34,61,109)' } },
          value: 373
        },
        {
          name: 'TypeScript',
          textStyle: { normal: { color: 'rgb(157,60,111)' } },
          value: 5
        },
        {
          name: '区块链',
          textStyle: { normal: { color: 'rgb(133,137,3)' } },
          value: 7
        },
        {
          name: 'vue-router',
          textStyle: { normal: { color: 'rgb(74,102,140)' } },
          value: 8
        },
        {
          name: '稀土',
          textStyle: { normal: { color: 'rgb(155,42,112)' } },
          value: 6
        },
        {
          name: '数据分析',
          textStyle: { normal: { color: 'rgb(43,10,160)' } },
          value: 17
        },
        {
          name: 'Perfect',
          textStyle: { normal: { color: 'rgb(122,98,88)' } },
          value: 1
        },
        {
          name: 'Safari',
          textStyle: { normal: { color: 'rgb(65,11,87)' } },
          value: 1
        },
        {
          name: 'Mockito',
          textStyle: { normal: { color: 'rgb(98,126,149)' } },
          value: 1
        },
        {
          name: 'Clojure',
          textStyle: { normal: { color: 'rgb(91,139,95)' } },
          value: 1
        },
        {
          name: 'Twitter',
          textStyle: { normal: { color: 'rgb(141,14,72)' } },
          value: 1
        },
        {
          name: 'CDN',
          textStyle: { normal: { color: 'rgb(157,91,155)' } },
          value: 2
        },
        {
          name: 'Vuex',
          textStyle: { normal: { color: 'rgb(151,93,105)' } },
          value: 16
        },
        {
          name: 'Hexo',
          textStyle: { normal: { color: 'rgb(90,138,88)' } },
          value: 13
        },
        {
          name: 'iView',
          textStyle: { normal: { color: 'rgb(29,134,83)' } },
          value: 2
        },
        {
          name: '算法',
          textStyle: { normal: { color: 'rgb(38,95,152)' } },
          value: 208
        },
        {
          name: 'MySQL',
          textStyle: { normal: { color: 'rgb(36,134,79)' } },
          value: 33
        },
        {
          name: 'Karma',
          textStyle: { normal: { color: 'rgb(126,45,46)' } },
          value: 1
        },
        {
          name: 'UnrealEngine',
          textStyle: { normal: { color: 'rgb(108,73,92)' } },
          value: 1
        },
        {
          name: 'Snapchat',
          textStyle: { normal: { color: 'rgb(61,122,3)' } },
          value: 1
        },
        {
          name: 'MongoDB',
          textStyle: { normal: { color: 'rgb(54,157,30)' } },
          value: 9
        },
        {
          name: 'Swift',
          textStyle: { normal: { color: 'rgb(33,88,9)' } },
          value: 9
        },
        {
          name: '响应式编程',
          textStyle: { normal: { color: 'rgb(79,42,20)' } },
          value: 2
        },
        {
          name: 'Netty',
          textStyle: { normal: { color: 'rgb(41,148,108)' } },
          value: 3
        },
        {
          name: 'PostCSS',
          textStyle: { normal: { color: 'rgb(114,62,66)' } },
          value: 1
        },
        {
          name: '运营',
          textStyle: { normal: { color: 'rgb(8,135,158)' } },
          value: 3
        },
        {
          name: 'Xcode',
          textStyle: { normal: { color: 'rgb(0,92,25)' } },
          value: 4
        },
        {
          name: 'Caffe',
          textStyle: { normal: { color: 'rgb(47,49,4)' } },
          value: 3
        },
        {
          name: 'Apple',
          textStyle: { normal: { color: 'rgb(65,150,84)' } },
          value: 10
        },
        {
          name: 'Ajax',
          textStyle: { normal: { color: 'rgb(56,122,14)' } },
          value: 9
        },
        {
          name: 'Vue.js',
          textStyle: { normal: { color: 'rgb(111,136,125)' } },
          value: 147
        },
        {
          name: 'Hibernate',
          textStyle: { normal: { color: 'rgb(97,99,74)' } },
          value: 1
        },
        {
          name: 'R',
          textStyle: { normal: { color: 'rgb(86,134,57)' } },
          value: 1
        },
        {
          name: '机器学习',
          textStyle: { normal: { color: 'rgb(116,118,33)' } },
          value: 218
        },
        {
          name: 'Firefox',
          textStyle: { normal: { color: 'rgb(149,40,89)' } },
          value: 4
        },
        {
          name: 'Highlight.js',
          textStyle: { normal: { color: 'rgb(74,18,136)' } },
          value: 3
        },
        {
          name: 'ECMAScript 8',
          textStyle: { normal: { color: 'rgb(157,17,24)' } },
          value: 1
        },
        {
          name: 'axios',
          textStyle: { normal: { color: 'rgb(51,144,140)' } },
          value: 2
        },
        {
          name: 'ZooKeeper',
          textStyle: { normal: { color: 'rgb(156,138,3)' } },
          value: 8
        },
        {
          name: 'Linkedin',
          textStyle: { normal: { color: 'rgb(139,32,20)' } },
          value: 1
        },
        {
          name: 'Bluebird.js',
          textStyle: { normal: { color: 'rgb(107,154,112)' } },
          value: 1
        },
        {
          name: 'NLP',
          textStyle: { normal: { color: 'rgb(8,143,61)' } },
          value: 32
        },
        {
          name: 'Sublime Text',
          textStyle: { normal: { color: 'rgb(83,104,57)' } },
          value: 1
        },
        {
          name: 'Ubuntu',
          textStyle: { normal: { color: 'rgb(102,2,129)' } },
          value: 11
        },
        {
          name: 'WebSocket',
          textStyle: { normal: { color: 'rgb(105,143,146)' } },
          value: 10
        },
        {
          name: 'C',
          textStyle: { normal: { color: 'rgb(100,133,110)' } },
          value: 1
        },
        {
          name: 'IntelliJ IDEA',
          textStyle: { normal: { color: 'rgb(10,47,145)' } },
          value: 1
        },
        {
          name: '科幻',
          textStyle: { normal: { color: 'rgb(67,85,48)' } },
          value: 1
        },
        {
          name: 'Photoshop',
          textStyle: { normal: { color: 'rgb(56,92,130)' } },
          value: 4
        },
        {
          name: 'RequireJS',
          textStyle: { normal: { color: 'rgb(156,63,138)' } },
          value: 1
        },
        {
          name: 'Less',
          textStyle: { normal: { color: 'rgb(89,122,101)' } },
          value: 1
        },
        {
          name: 'SQLite',
          textStyle: { normal: { color: 'rgb(3,143,82)' } },
          value: 1
        },
        {
          name: '360',
          textStyle: { normal: { color: 'rgb(143,136,55)' } },
          value: 2
        },
        {
          name: 'HTML',
          textStyle: { normal: { color: 'rgb(74,142,132)' } },
          value: 50
        },
        {
          name: '百度',
          textStyle: { normal: { color: 'rgb(29,68,142)' } },
          value: 15
        },
        {
          name: '前端框架',
          textStyle: { normal: { color: 'rgb(109,24,87)' } },
          value: 50
        },
        {
          name: 'Stylus',
          textStyle: { normal: { color: 'rgb(152,136,112)' } },
          value: 5
        },
        {
          name: 'flexbox',
          textStyle: { normal: { color: 'rgb(27,144,115)' } },
          value: 1
        },
        {
          name: '编程语言',
          textStyle: { normal: { color: 'rgb(55,120,64)' } },
          value: 22
        },
        {
          name: 'GraphQL',
          textStyle: { normal: { color: 'rgb(66,77,36)' } },
          value: 3
        },
        {
          name: 'Kubernetes ',
          textStyle: { normal: { color: 'rgb(95,71,38)' } },
          value: 5
        },
        {
          name: 'Composer',
          textStyle: { normal: { color: 'rgb(73,55,39)' } },
          value: 1
        },
        {
          name: '设计',
          textStyle: { normal: { color: 'rgb(98,50,27)' } },
          value: 103
        },
        {
          name: 'MyBatis',
          textStyle: { normal: { color: 'rgb(16,18,30)' } },
          value: 6
        },
        {
          name: '树莓派',
          textStyle: { normal: { color: 'rgb(54,43,40)' } },
          value: 2
        },
        {
          name: '微信',
          textStyle: { normal: { color: 'rgb(152,59,3)' } },
          value: 211
        },
        {
          name: 'three.js',
          textStyle: { normal: { color: 'rgb(33,131,117)' } },
          value: 4
        },
        {
          name: '掘金技术征文',
          textStyle: { normal: { color: 'rgb(63,137,113)' } },
          value: 1
        },
        {
          name: 'SCSS',
          textStyle: { normal: { color: 'rgb(19,146,119)' } },
          value: 7
        },
        {
          name: 'MVP',
          textStyle: { normal: { color: 'rgb(117,34,101)' } },
          value: 1
        },
        {
          name: '人工智能',
          textStyle: { normal: { color: 'rgb(145,138,95)' } },
          value: 389
        },
        {
          name: '以太坊',
          textStyle: { normal: { color: 'rgb(104,25,35)' } },
          value: 1
        },
        {
          name: '创业',
          textStyle: { normal: { color: 'rgb(134,38,139)' } },
          value: 13
        },
        {
          name: 'SSH',
          textStyle: { normal: { color: 'rgb(47,52,160)' } },
          value: 2
        },
        {
          name: '字体',
          textStyle: { normal: { color: 'rgb(147,127,64)' } },
          value: 1
        },
        {
          name: 'Spark',
          textStyle: { normal: { color: 'rgb(52,38,152)' } },
          value: 6
        },
        {
          name: 'Git',
          textStyle: { normal: { color: 'rgb(32,122,79)' } },
          value: 5
        },
        {
          name: 'Apache',
          textStyle: { normal: { color: 'rgb(154,28,66)' } },
          value: 9
        },
        {
          name: 'Material Design',
          textStyle: { normal: { color: 'rgb(48,125,98)' } },
          value: 3
        },
        {
          name: 'Laravel',
          textStyle: { normal: { color: 'rgb(105,62,82)' } },
          value: 21
        },
        {
          name: '远程工作',
          textStyle: { normal: { color: 'rgb(117,109,99)' } },
          value: 2
        },
        {
          name: '电子书',
          textStyle: { normal: { color: 'rgb(103,60,153)' } },
          value: 2
        },
        {
          name: 'SciPy',
          textStyle: { normal: { color: 'rgb(157,60,12)' } },
          value: 1
        },
        {
          name: 'Express',
          textStyle: { normal: { color: 'rgb(57,28,42)' } },
          value: 9
        },
        {
          name: 'Oracle',
          textStyle: { normal: { color: 'rgb(55,27,70)' } },
          value: 2
        },
        {
          name: 'MVC',
          textStyle: { normal: { color: 'rgb(155,86,20)' } },
          value: 7
        },
        {
          name: 'GitHub',
          textStyle: { normal: { color: 'rgb(84,143,65)' } },
          value: 62
        },
        {
          name: '腾讯',
          textStyle: { normal: { color: 'rgb(106,84,42)' } },
          value: 37
        },
        {
          name: '面试',
          textStyle: { normal: { color: 'rgb(62,153,46)' } },
          value: 29
        },
        {
          name: 'DNS',
          textStyle: { normal: { color: 'rgb(89,153,113)' } },
          value: 5
        },
        {
          name: 'Jenkins',
          textStyle: { normal: { color: 'rgb(0,139,53)' } },
          value: 1
        },
        {
          name: 'APK',
          textStyle: { normal: { color: 'rgb(56,29,150)' } },
          value: 6
        },
        {
          name: 'SVG',
          textStyle: { normal: { color: 'rgb(12,101,126)' } },
          value: 10
        },
        {
          name: '数据挖掘',
          textStyle: { normal: { color: 'rgb(131,103,159)' } },
          value: 18
        },
        {
          name: 'Charles',
          textStyle: { normal: { color: 'rgb(87,75,139)' } },
          value: 1
        },
        {
          name: 'RabbitMQ',
          textStyle: { normal: { color: 'rgb(19,62,131)' } },
          value: 2
        },
        {
          name: '图片资源',
          textStyle: { normal: { color: 'rgb(26,17,157)' } },
          value: 15
        },
        {
          name: 'TCP/IP',
          textStyle: { normal: { color: 'rgb(5,139,80)' } },
          value: 3
        },
        {
          name: 'Lua',
          textStyle: { normal: { color: 'rgb(124,68,46)' } },
          value: 4
        },
        {
          name: '.NET',
          textStyle: { normal: { color: 'rgb(16,96,154)' } },
          value: 5
        },
        {
          name: 'Medium',
          textStyle: { normal: { color: 'rgb(104,36,11)' } },
          value: 3
        },
        {
          name: 'Redux',
          textStyle: { normal: { color: 'rgb(136,53,87)' } },
          value: 17
        },
        {
          name: 'Chrome',
          textStyle: { normal: { color: 'rgb(24,124,98)' } },
          value: 34
        },
        {
          name: 'Kafka',
          textStyle: { normal: { color: 'rgb(61,6,44)' } },
          value: 12
        },
        {
          name: 'Angular.js',
          textStyle: { normal: { color: 'rgb(38,63,136)' } },
          value: 13
        },
        {
          name: 'Underscore.js',
          textStyle: { normal: { color: 'rgb(4,43,4)' } },
          value: 1
        },
        {
          name: 'MobX',
          textStyle: { normal: { color: 'rgb(66,115,50)' } },
          value: 4
        },
        {
          name: '产品经理',
          textStyle: { normal: { color: 'rgb(87,140,39)' } },
          value: 3
        },
        {
          name: 'Canvas',
          textStyle: { normal: { color: 'rgb(125,62,115)' } },
          value: 17
        },
        {
          name: '计算机视觉',
          textStyle: { normal: { color: 'rgb(130,62,143)' } },
          value: 10
        },
        {
          name: '后端',
          textStyle: { normal: { color: 'rgb(3,143,37)' } },
          value: 373
        },
        {
          name: 'Swagger',
          textStyle: { normal: { color: 'rgb(55,25,110)' } },
          value: 1
        },
        {
          name: 'Scala',
          textStyle: { normal: { color: 'rgb(1,31,39)' } },
          value: 2
        },
        {
          name: 'HTTP',
          textStyle: { normal: { color: 'rgb(59,104,51)' } },
          value: 16
        },
        {
          name: 'React Native',
          textStyle: { normal: { color: 'rgb(68,82,149)' } },
          value: 14
        },
        {
          name: '产品',
          textStyle: { normal: { color: 'rgb(72,87,79)' } },
          value: 78
        },
        {
          name: 'Flink',
          textStyle: { normal: { color: 'rgb(10,110,92)' } },
          value: 1
        },
        {
          name: 'scikit-learn',
          textStyle: { normal: { color: 'rgb(82,131,100)' } },
          value: 5
        },
        {
          name: 'Markdown',
          textStyle: { normal: { color: 'rgb(91,67,63)' } },
          value: 3
        },
        {
          name: '服务器',
          textStyle: { normal: { color: 'rgb(160,91,97)' } },
          value: 70
        },
        {
          name: 'Kibana',
          textStyle: { normal: { color: 'rgb(133,0,31)' } },
          value: 2
        },
        {
          name: 'Shiro',
          textStyle: { normal: { color: 'rgb(3,145,75)' } },
          value: 3
        },
        {
          name: 'Tomcat',
          textStyle: { normal: { color: 'rgb(127,114,14)' } },
          value: 24
        },
        {
          name: 'Atom',
          textStyle: { normal: { color: 'rgb(42,20,152)' } },
          value: 1
        },
        {
          name: '汇编语言',
          textStyle: { normal: { color: 'rgb(59,49,88)' } },
          value: 1
        },
        {
          name: 'ThinkPHP',
          textStyle: { normal: { color: 'rgb(6,143,14)' } },
          value: 1
        },
        {
          name: 'Kotlin',
          textStyle: { normal: { color: 'rgb(83,51,38)' } },
          value: 6
        },
        {
          name: 'Babel',
          textStyle: { normal: { color: 'rgb(63,140,139)' } },
          value: 14
        },
        {
          name: 'NPM',
          textStyle: { normal: { color: 'rgb(95,118,107)' } },
          value: 24
        },
        {
          name: 'TensorFlow',
          textStyle: { normal: { color: 'rgb(42,123,99)' } },
          value: 79
        },
        {
          name: 'React.js',
          textStyle: { normal: { color: 'rgb(89,7,65)' } },
          value: 117
        },
        {
          name: '虚拟现实',
          textStyle: { normal: { color: 'rgb(44,52,68)' } },
          value: 2
        },
        {
          name: 'Kaggle',
          textStyle: { normal: { color: 'rgb(64,35,11)' } },
          value: 5
        },
        {
          name: 'Instagram',
          textStyle: { normal: { color: 'rgb(18,136,130)' } },
          value: 1
        },
        {
          name: 'PWA',
          textStyle: { normal: { color: 'rgb(80,42,24)' } },
          value: 7
        },
        {
          name: 'Icon',
          textStyle: { normal: { color: 'rgb(61,41,75)' } },
          value: 6
        },
        {
          name: 'Amazon',
          textStyle: { normal: { color: 'rgb(28,129,112)' } },
          value: 2
        },
        {
          name: 'Elm',
          textStyle: { normal: { color: 'rgb(4,76,41)' } },
          value: 1
        },
        {
          name: 'Workflow',
          textStyle: { normal: { color: 'rgb(160,75,155)' } },
          value: 1
        },
        {
          name: '正则表达式',
          textStyle: { normal: { color: 'rgb(80,86,137)' } },
          value: 34
        },
        {
          name: 'LeetCode',
          textStyle: { normal: { color: 'rgb(140,48,7)' } },
          value: 1
        },
        {
          name: 'Unicode',
          textStyle: { normal: { color: 'rgb(95,32,82)' } },
          value: 3
        },
        {
          name: 'Chart.js',
          textStyle: { normal: { color: 'rgb(118,19,19)' } },
          value: 2
        },
        {
          name: 'Ant Design',
          textStyle: { normal: { color: 'rgb(36,67,133)' } },
          value: 2
        },
        {
          name: 'Redis',
          textStyle: { normal: { color: 'rgb(41,41,56)' } },
          value: 26
        },
        {
          name: 'Elasticsearch',
          textStyle: { normal: { color: 'rgb(98,3,71)' } },
          value: 5
        },
        {
          name: '机器人',
          textStyle: { normal: { color: 'rgb(70,62,145)' } },
          value: 15
        },
        {
          name: 'Apache Log4j',
          textStyle: { normal: { color: 'rgb(87,127,124)' } },
          value: 1
        },
        {
          name: 'Spring',
          textStyle: { normal: { color: 'rgb(82,105,35)' } },
          value: 70
        },
        {
          name: '神经网络',
          textStyle: { normal: { color: 'rgb(66,10,79)' } },
          value: 115
        },
        {
          name: 'koa',
          textStyle: { normal: { color: 'rgb(49,116,45)' } },
          value: 13
        },
        {
          name: '命令行',
          textStyle: { normal: { color: 'rgb(78,152,111)' } },
          value: 30
        },
        {
          name: '开源',
          textStyle: { normal: { color: 'rgb(105,86,126)' } },
          value: 46
        },
        {
          name: 'Android',
          textStyle: { normal: { color: 'rgb(117,8,145)' } },
          value: 90
        },
        {
          name: 'gRPC',
          textStyle: { normal: { color: 'rgb(18,76,104)' } },
          value: 3
        },
        {
          name: '代码规范',
          textStyle: { normal: { color: 'rgb(35,19,75)' } },
          value: 7
        },
        {
          name: '支付宝',
          textStyle: { normal: { color: 'rgb(146,134,105)' } },
          value: 16
        },
        {
          name: 'LevelDB',
          textStyle: { normal: { color: 'rgb(82,36,123)' } },
          value: 1
        },
        {
          name: '游戏',
          textStyle: { normal: { color: 'rgb(34,12,145)' } },
          value: 25
        },
        {
          name: 'CSS',
          textStyle: { normal: { color: 'rgb(134,81,52)' } },
          value: 120
        },
        {
          name: 'Raft',
          textStyle: { normal: { color: 'rgb(134,46,128)' } },
          value: 3
        },
        {
          name: 'Webkit',
          textStyle: { normal: { color: 'rgb(25,73,153)' } },
          value: 2
        },
        {
          name: 'Go',
          textStyle: { normal: { color: 'rgb(48,9,117)' } },
          value: 36
        },
        {
          name: 'Excel',
          textStyle: { normal: { color: 'rgb(20,41,123)' } },
          value: 2
        },
        {
          name: 'API',
          textStyle: { normal: { color: 'rgb(87,12,139)' } },
          value: 139
        },
        {
          name: '动效',
          textStyle: { normal: { color: 'rgb(91,138,133)' } },
          value: 8
        },
        {
          name: '测试',
          textStyle: { normal: { color: 'rgb(19,129,59)' } },
          value: 18
        },
        {
          name: '设计师',
          textStyle: { normal: { color: 'rgb(0,11,53)' } },
          value: 1
        },
        {
          name: 'PHP',
          textStyle: { normal: { color: 'rgb(138,103,23)' } },
          value: 55
        },
        {
          name: 'CMS',
          textStyle: { normal: { color: 'rgb(97,116,34)' } },
          value: 1
        },
        {
          name: '架构',
          textStyle: { normal: { color: 'rgb(64,140,98)' } },
          value: 78
        },
        {
          name: 'Web Components',
          textStyle: { normal: { color: 'rgb(16,51,8)' } },
          value: 5
        },
        {
          name: 'Spring Boot',
          textStyle: { normal: { color: 'rgb(11,114,35)' } },
          value: 47
        },
        {
          name: '程序员',
          textStyle: { normal: { color: 'rgb(158,138,24)' } },
          value: 55
        },
        {
          name: 'Django',
          textStyle: { normal: { color: 'rgb(136,37,16)' } },
          value: 11
        },
        {
          name: 'NoSQL',
          textStyle: { normal: { color: 'rgb(110,62,79)' } },
          value: 1
        },
        {
          name: 'HBase',
          textStyle: { normal: { color: 'rgb(24,34,144)' } },
          value: 2
        },
        {
          name: 'Dubbo',
          textStyle: { normal: { color: 'rgb(79,94,117)' } },
          value: 4
        },
        {
          name: 'WebGL',
          textStyle: { normal: { color: 'rgb(40,63,79)' } },
          value: 4
        },
        {
          name: 'Sketch',
          textStyle: { normal: { color: 'rgb(68,9,128)' } },
          value: 2
        },
        {
          name: 'Windows',
          textStyle: { normal: { color: 'rgb(56,89,75)' } },
          value: 8
        },
        {
          name: 'pyspider',
          textStyle: { normal: { color: 'rgb(95,149,58)' } },
          value: 1
        },
        {
          name: '运维',
          textStyle: { normal: { color: 'rgb(129,83,92)' } },
          value: 14
        },
        {
          name: 'gradle',
          textStyle: { normal: { color: 'rgb(118,143,2)' } },
          value: 18
        },
        {
          name: 'UML',
          textStyle: { normal: { color: 'rgb(49,124,129)' } },
          value: 1
        },
        {
          name: 'Swoole',
          textStyle: { normal: { color: 'rgb(90,108,32)' } },
          value: 5
        },
        {
          name: 'Ruby',
          textStyle: { normal: { color: 'rgb(114,143,87)' } },
          value: 2
        },
        {
          name: 'SaaS',
          textStyle: { normal: { color: 'rgb(53,7,64)' } },
          value: 2
        },
        {
          name: '编译器',
          textStyle: { normal: { color: 'rgb(119,39,43)' } },
          value: 13
        },
        {
          name: 'HotFix',
          textStyle: { normal: { color: 'rgb(37,72,3)' } },
          value: 1
        },
        {
          name: 'Python',
          textStyle: { normal: { color: 'rgb(114,122,35)' } },
          value: 179
        },
        {
          name: '招聘',
          textStyle: { normal: { color: 'rgb(120,8,95)' } },
          value: 6
        },
        {
          name: 'Unity3D',
          textStyle: { normal: { color: 'rgb(32,102,137)' } },
          value: 1
        },
        {
          name: 'C++',
          textStyle: { normal: { color: 'rgb(112,41,33)' } },
          value: 9
        },
        {
          name: '投资',
          textStyle: { normal: { color: 'rgb(130,101,11)' } },
          value: 6
        },
        {
          name: '掘金翻译计划',
          textStyle: { normal: { color: 'rgb(27,129,11)' } },
          value: 48
        },
        {
          name: 'Retrofit',
          textStyle: { normal: { color: 'rgb(123,34,5)' } },
          value: 4
        },
        {
          name: '线下活动',
          textStyle: { normal: { color: 'rgb(60,144,72)' } },
          value: 4
        },
        {
          name: 'Core ML',
          textStyle: { normal: { color: 'rgb(48,38,31)' } },
          value: 1
        },
        {
          name: 'Flux',
          textStyle: { normal: { color: 'rgb(64,40,152)' } },
          value: 6
        },
        {
          name: '全栈',
          textStyle: { normal: { color: 'rgb(94,135,18)' } },
          value: 1
        },
        {
          name: 'Cocoa',
          textStyle: { normal: { color: 'rgb(75,69,83)' } },
          value: 5
        },
        {
          name: 'Electron',
          textStyle: { normal: { color: 'rgb(136,32,55)' } },
          value: 9
        },
        {
          name: '爬虫',
          textStyle: { normal: { color: 'rgb(35,105,37)' } },
          value: 32
        },
        {
          name: '源码',
          textStyle: { normal: { color: 'rgb(154,6,99)' } },
          value: 42
        },
        {
          name: 'JavaScript',
          textStyle: { normal: { color: 'rgb(125,106,99)' } },
          value: 421
        },
        {
          name: '函数式编程',
          textStyle: { normal: { color: 'rgb(142,11,97)' } },
          value: 6
        },
        {
          name: 'VIM',
          textStyle: { normal: { color: 'rgb(111,145,31)' } },
          value: 5
        },
        {
          name: 'Docker',
          textStyle: { normal: { color: 'rgb(101,124,73)' } },
          value: 26
        },
        {
          name: '直播',
          textStyle: { normal: { color: 'rgb(13,52,109)' } },
          value: 18
        },
        {
          name: 'Selenium',
          textStyle: { normal: { color: 'rgb(124,36,1)' } },
          value: 1
        },
        {
          name: '浏览器',
          textStyle: { normal: { color: 'rgb(72,81,46)' } },
          value: 29
        },
        {
          name: 'Gulp',
          textStyle: { normal: { color: 'rgb(6,48,2)' } },
          value: 3
        },
        {
          name: 'iOS',
          textStyle: { normal: { color: 'rgb(8,132,105)' } },
          value: 61
        },
        {
          name: '数据库',
          textStyle: { normal: { color: 'rgb(26,14,1)' } },
          value: 65
        },
        {
          name: 'Scrapy',
          textStyle: { normal: { color: 'rgb(67,123,80)' } },
          value: 2
        },
        {
          name: '物联网',
          textStyle: { normal: { color: 'rgb(4,134,153)' } },
          value: 3
        },
        {
          name: 'Keras',
          textStyle: { normal: { color: 'rgb(145,62,125)' } },
          value: 7
        },
        {
          name: 'Linux',
          textStyle: { normal: { color: 'rgb(146,147,41)' } },
          value: 44
        },
        {
          name: 'PyPy',
          textStyle: { normal: { color: 'rgb(28,48,17)' } },
          value: 1
        },
        {
          name: 'PhantomJS',
          textStyle: { normal: { color: 'rgb(118,18,52)' } },
          value: 1
        },
        {
          name: 'Objective-C',
          textStyle: { normal: { color: 'rgb(114,53,128)' } },
          value: 4
        },
        {
          name: 'OpenAI',
          textStyle: { normal: { color: 'rgb(92,130,151)' } },
          value: 4
        },
        {
          name: 'RxJS',
          textStyle: { normal: { color: 'rgb(50,119,125)' } },
          value: 7
        },
        {
          name: '嵌入式',
          textStyle: { normal: { color: 'rgb(60,109,157)' } },
          value: 1
        },
        {
          name: 'JSON',
          textStyle: { normal: { color: 'rgb(153,154,94)' } },
          value: 5
        },
        {
          name: 'RxJava',
          textStyle: { normal: { color: 'rgb(79,26,159)' } },
          value: 4
        },
        {
          name: 'JUnit',
          textStyle: { normal: { color: 'rgb(57,39,105)' } },
          value: 1
        },
        {
          name: '深度学习',
          textStyle: { normal: { color: 'rgb(28,156,124)' } },
          value: 135
        },
        {
          name: 'MATLAB',
          textStyle: { normal: { color: 'rgb(67,35,28)' } },
          value: 4
        },
        {
          name: 'PostgreSQL',
          textStyle: { normal: { color: 'rgb(13,47,74)' } },
          value: 1
        },
        {
          name: '单元测试',
          textStyle: { normal: { color: 'rgb(109,132,28)' } },
          value: 79
        },
        {
          name: 'Cocos2d-x',
          textStyle: { normal: { color: 'rgb(43,44,64)' } },
          value: 1
        },
        {
          name: 'MVVM',
          textStyle: { normal: { color: 'rgb(83,155,148)' } },
          value: 6
        },
        {
          name: '操作系统',
          textStyle: { normal: { color: 'rgb(147,138,72)' } },
          value: 19
        },
        {
          name: 'Postman',
          textStyle: { normal: { color: 'rgb(114,70,151)' } },
          value: 1
        },
        {
          name: 'OpenCV',
          textStyle: { normal: { color: 'rgb(131,154,37)' } },
          value: 5
        },
        {
          name: 'Lombok',
          textStyle: { normal: { color: 'rgb(51,7,71)' } },
          value: 1
        },
        {
          name: 'Uber',
          textStyle: { normal: { color: 'rgb(21,41,25)' } },
          value: 3
        },
        {
          name: 'Visual Studio Code',
          textStyle: { normal: { color: 'rgb(48,102,147)' } },
          value: 1
        },
        {
          name: '敏捷开发',
          textStyle: { normal: { color: 'rgb(92,50,16)' } },
          value: 1
        },
        {
          name: 'Zepto.js',
          textStyle: { normal: { color: 'rgb(38,75,65)' } },
          value: 2
        },
        {
          name: 'Promise',
          textStyle: { normal: { color: 'rgb(24,101,22)' } },
          value: 22
        },
        {
          name: 'Node.js',
          textStyle: { normal: { color: 'rgb(49,129,116)' } },
          value: 110
        },
        {
          name: 'APP',
          textStyle: { normal: { color: 'rgb(140,86,120)' } },
          value: 6
        },
        {
          name: 'Hadoop',
          textStyle: { normal: { color: 'rgb(91,121,126)' } },
          value: 5
        },
        {
          name: 'IPython',
          textStyle: { normal: { color: 'rgb(26,91,143)' } },
          value: 3
        },
        {
          name: 'Facebook',
          textStyle: { normal: { color: 'rgb(51,14,15)' } },
          value: 9
        },
        {
          name: '负载均衡',
          textStyle: { normal: { color: 'rgb(43,51,40)' } },
          value: 5
        },
        {
          name: 'Gunicorn',
          textStyle: { normal: { color: 'rgb(154,125,33)' } },
          value: 1
        },
        {
          name: 'Webpack',
          textStyle: { normal: { color: 'rgb(3,129,8)' } },
          value: 100
        },
        {
          name: 'AWS',
          textStyle: { normal: { color: 'rgb(65,1,25)' } },
          value: 5
        },
        {
          name: 'PyTorch',
          textStyle: { normal: { color: 'rgb(13,28,82)' } },
          value: 9
        },
        {
          name: '云计算',
          textStyle: { normal: { color: 'rgb(69,93,144)' } },
          value: 6
        },
        {
          name: 'GitLab',
          textStyle: { normal: { color: 'rgb(18,116,37)' } },
          value: 2
        },
        {
          name: 'Logstash',
          textStyle: { normal: { color: 'rgb(98,78,0)' } },
          value: 1
        },
        {
          name: '设计模式',
          textStyle: { normal: { color: 'rgb(127,40,46)' } },
          value: 31
        },
        {
          name: 'd3.js',
          textStyle: { normal: { color: 'rgb(86,34,103)' } },
          value: 2
        },
        {
          name: 'Java EE',
          textStyle: { normal: { color: 'rgb(61,109,74)' } },
          value: 10
        },
        {
          name: 'Google',
          textStyle: { normal: { color: 'rgb(27,61,76)' } },
          value: 60
        },
        {
          name: 'Shell',
          textStyle: { normal: { color: 'rgb(63,131,10)' } },
          value: 9
        },
        {
          name: '安全',
          textStyle: { normal: { color: 'rgb(9,72,160)' } },
          value: 43
        },
        {
          name: 'jQuery',
          textStyle: { normal: { color: 'rgb(129,11,3)' } },
          value: 15
        },
        {
          name: 'Microsoft',
          textStyle: { normal: { color: 'rgb(39,123,127)' } },
          value: 8
        },
        {
          name: 'Nginx',
          textStyle: { normal: { color: 'rgb(157,125,33)' } },
          value: 9
        },
        {
          name: '搜索引擎',
          textStyle: { normal: { color: 'rgb(107,111,92)' } },
          value: 1
        },
        {
          name: '前端',
          textStyle: { normal: { color: 'rgb(120,9,11)' } },
          value: 652
        },
        {
          name: '求职',
          textStyle: { normal: { color: 'rgb(32,131,114)' } },
          value: 2
        },
        {
          name: 'Weex',
          textStyle: { normal: { color: 'rgb(31,30,133)' } },
          value: 12
        },
        {
          name: 'NumPy',
          textStyle: { normal: { color: 'rgb(101,32,62)' } },
          value: 8
        },
        {
          name: '开源库资讯',
          textStyle: { normal: { color: 'rgb(111,48,39)' } },
          value: 11
        },
        {
          name: 'WebP',
          textStyle: { normal: { color: 'rgb(94,14,34)' } },
          value: 1
        },
        {
          name: 'Yarn',
          textStyle: { normal: { color: 'rgb(134,96,63)' } },
          value: 1
        },
        {
          name: '数据可视化',
          textStyle: { normal: { color: 'rgb(45,37,132)' } },
          value: 16
        },
        {
          name: 'JVM',
          textStyle: { normal: { color: 'rgb(50,149,110)' } },
          value: 8
        },
        {
          name: 'Element',
          textStyle: { normal: { color: 'rgb(73,101,83)' } },
          value: 8
        },
        {
          name: 'macOS',
          textStyle: { normal: { color: 'rgb(110,118,67)' } },
          value: 7
        },
        {
          name: 'HDFS',
          textStyle: { normal: { color: 'rgb(117,53,22)' } },
          value: 4
        },
        {
          name: 'Rust',
          textStyle: { normal: { color: 'rgb(54,105,109)' } },
          value: 1
        },
        {
          name: '响应式设计',
          textStyle: { normal: { color: 'rgb(7,122,48)' } },
          value: 1
        },
        {
          name: 'DOM',
          textStyle: { normal: { color: 'rgb(69,55,12)' } },
          value: 3
        },
        {
          name: 'SQL',
          textStyle: { normal: { color: 'rgb(33,154,83)' } },
          value: 9
        },
        {
          name: 'rollup.js',
          textStyle: { normal: { color: 'rgb(140,115,69)' } },
          value: 3
        },
        {
          name: 'Java',
          textStyle: { normal: { color: 'rgb(20,117,65)' } },
          value: 243
        },
        {
          name: '比特币',
          textStyle: { normal: { color: 'rgb(92,157,92)' } },
          value: 2
        },
        {
          name: 'Curl',
          textStyle: { normal: { color: 'rgb(145,125,7)' } },
          value: 2
        },
        {
          name: 'pandas',
          textStyle: { normal: { color: 'rgb(6,147,43)' } },
          value: 3
        },
        {
          name: 'Jieba',
          textStyle: { normal: { color: 'rgb(39,21,113)' } },
          value: 2
        },
        {
          name: 'HTTPS',
          textStyle: { normal: { color: 'rgb(82,18,74)' } },
          value: 21
        },
        {
          name: '微服务',
          textStyle: { normal: { color: 'rgb(147,21,44)' } },
          value: 5
        },
        {
          name: 'protobuf',
          textStyle: { normal: { color: 'rgb(7,157,68)' } },
          value: 1
        }
      ],
      girdSize: 20,
      name: '次数',
      rotationRange: [-90, 90],
      rotationStep: 45,
      shape: 'circle',
      sizeRange: [12, 60],
      type: 'wordCloud'
    }
  ],
  series_id: 508684,
  title: [
    {
      left: 'auto',
      subtext: '',
      subtextStyle: { color: '#aaa', fontSize: 12 },
      text: '掘金文章的标签的分布',
      textStyle: { color: '#000', fontSize: 18 },
      top: 'auto'
    }
  ],
  tooltip: {}
}

export const lineOne = {
  backgroundColor: '#fff',
  color: [
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3',
    '#f05b72',
    '#ef5b9c',
    '#f47920',
    '#905a3d',
    '#fab27b',
    '#2a5caa',
    '#444693',
    '#726930',
    '#b2d235',
    '#6d8346',
    '#ac6767',
    '#1d953f',
    '#6950a1',
    '#918597',
    '#f6f5ec'
  ],
  legend: [
    {
      data: ['文章数'],
      left: 'center',
      orient: 'horizontal',
      selectedMode: 'multiple',
      show: true,
      textStyle: { color: '#333', fontSize: 12 },
      top: 'top'
    }
  ],
  series: [
    {
      areaStyle: {},
      data: [60, 15, 17, 25, 41, 23, 29, 51, 64, 137, 200, 500],
      label: {
        emphasis: {
          position: null,
          show: true,
          textStyle: { color: '#fff', fontSize: 12 }
        },
        normal: {
          formatter: null,
          position: 'top',
          show: false,
          textStyle: { color: '#000', fontSize: 12 }
        }
      },
      lineStyle: {
        normal: {
          color: null,
          curveness: 0,
          opacity: 1,
          type: 'solid',
          width: 1
        }
      },
      markLine: { data: [] },
      markPoint: { data: [] },
      name: '文章数',
      seriesId: 11235,
      showSymbol: true,
      smooth: false,
      stack: '',
      step: false,
      symbol: 'emptyCircle',
      type: 'line'
    }
  ],
  series_id: 11235,
  title: [
    {
      left: 'auto',
      subtext: '',
      subtextStyle: { color: '#aaa', fontSize: 12 },
      text: '掘金文章2017年每月分布图',
      textStyle: { color: '#000', fontSize: 18 },
      top: 'auto'
    }
  ],
  tooltip: {
    axisPointer: { type: 'line' },
    formatter: null,
    textStyle: { color: '#fff', fontSize: 14 },
    trigger: 'item',
    triggerOn: 'mousemove|click'
  },
  xAxis: [
    {
      axisLabel: {
        interval: 'auto',
        margin: 8,
        rotate: 0,
        textStyle: { color: '#000', fontSize: 12 }
      },
      axisTick: { alignWithLabel: false },
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      show: true,
      type: 'category'
    }
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: '{value} ',
        interval: 'auto',
        margin: 8,
        rotate: 0,
        textStyle: { color: '#000', fontSize: 12 }
      },
      axisTick: { alignWithLabel: false },
      boundaryGap: true,
      inverse: false,
      max: null,
      min: null,
      name: '',
      nameGap: 25,
      nameLocation: 'middle',
      nameTextStyle: { fontSize: 14 },
      position: null,
      show: true,
      type: 'value'
    }
  ]
}

export const wordTwo = {
  backgroundColor: '#fff',
  legend: [{ data: [] }],
  series: [
    {
      data: [
        {
          name: 'enum',
          textStyle: { normal: { color: 'rgb(148,65,93)' } },
          value: 1
        },
        {
          name: 'Just',
          textStyle: { normal: { color: 'rgb(128,44,4)' } },
          value: 2
        },
        {
          name: '而',
          textStyle: { normal: { color: 'rgb(17,139,98)' } },
          value: 9
        },
        {
          name: 'builder',
          textStyle: { normal: { color: 'rgb(1,121,117)' } },
          value: 1
        },
        {
          name: '分析',
          textStyle: { normal: { color: 'rgb(21,11,137)' } },
          value: 78
        },
        {
          name: '发现',
          textStyle: { normal: { color: 'rgb(48,80,14)' } },
          value: 4
        },
        {
          name: '满分',
          textStyle: { normal: { color: 'rgb(141,65,150)' } },
          value: 2
        },
        {
          name: 'div',
          textStyle: { normal: { color: 'rgb(78,20,7)' } },
          value: 1
        },
        {
          name: '混合',
          textStyle: { normal: { color: 'rgb(48,35,108)' } },
          value: 2
        },
        {
          name: '天',
          textStyle: { normal: { color: 'rgb(142,94,60)' } },
          value: 2
        },
        {
          name: '系',
          textStyle: { normal: { color: 'rgb(47,82,15)' } },
          value: 1
        },
        {
          name: '首个',
          textStyle: { normal: { color: 'rgb(32,147,86)' } },
          value: 15
        },
        {
          name: '芯片',
          textStyle: { normal: { color: 'rgb(77,34,47)' } },
          value: 3
        },
        {
          name: '风起云涌',
          textStyle: { normal: { color: 'rgb(33,54,25)' } },
          value: 1
        },
        {
          name: '要',
          textStyle: { normal: { color: 'rgb(147,57,27)' } },
          value: 6
        },
        {
          name: 'ali',
          textStyle: { normal: { color: 'rgb(67,144,124)' } },
          value: 1
        },
        {
          name: '饼',
          textStyle: { normal: { color: 'rgb(37,111,31)' } },
          value: 1
        },
        {
          name: '仿饿',
          textStyle: { normal: { color: 'rgb(84,85,12)' } },
          value: 1
        },
        {
          name: 'Dean',
          textStyle: { normal: { color: 'rgb(84,99,16)' } },
          value: 3
        },
        {
          name: 'phpstorm',
          textStyle: { normal: { color: 'rgb(96,150,95)' } },
          value: 1
        },
        {
          name: '比特',
          textStyle: { normal: { color: 'rgb(84,128,142)' } },
          value: 2
        },
        {
          name: '推送',
          textStyle: { normal: { color: 'rgb(141,95,60)' } },
          value: 6
        },
        {
          name: '隼',
          textStyle: { normal: { color: 'rgb(97,35,1)' } },
          value: 1
        },
        {
          name: '十道',
          textStyle: { normal: { color: 'rgb(18,126,77)' } },
          value: 1
        },
        {
          name: '吗',
          textStyle: { normal: { color: 'rgb(103,2,148)' } },
          value: 21
        },
        {
          name: '执行命令',
          textStyle: { normal: { color: 'rgb(15,115,60)' } },
          value: 1
        },
        {
          name: '2.1',
          textStyle: { normal: { color: 'rgb(134,26,105)' } },
          value: 1
        },
        {
          name: 'middleware',
          textStyle: { normal: { color: 'rgb(29,76,119)' } },
          value: 2
        },
        {
          name: 'array',
          textStyle: { normal: { color: 'rgb(77,93,15)' } },
          value: 1
        },
        {
          name: '交通标志',
          textStyle: { normal: { color: 'rgb(94,0,153)' } },
          value: 1
        },
        {
          name: '杂谈',
          textStyle: { normal: { color: 'rgb(61,150,133)' } },
          value: 4
        },
        {
          name: '一',
          textStyle: { normal: { color: 'rgb(117,88,0)' } },
          value: 78
        },
        {
          name: '新年新',
          textStyle: { normal: { color: 'rgb(145,99,60)' } },
          value: 1
        },
        {
          name: 'shiro',
          textStyle: { normal: { color: 'rgb(137,106,81)' } },
          value: 2
        },
        {
          name: '认识',
          textStyle: { normal: { color: 'rgb(60,113,120)' } },
          value: 2
        },
        {
          name: '风口',
          textStyle: { normal: { color: 'rgb(152,134,68)' } },
          value: 1
        },
        {
          name: '高效率',
          textStyle: { normal: { color: 'rgb(154,145,18)' } },
          value: 1
        },
        {
          name: '批处理',
          textStyle: { normal: { color: 'rgb(92,101,3)' } },
          value: 1
        },
        {
          name: '浅述',
          textStyle: { normal: { color: 'rgb(92,91,5)' } },
          value: 1
        },
        {
          name: '滚动条',
          textStyle: { normal: { color: 'rgb(144,119,23)' } },
          value: 2
        },
        {
          name: 'project',
          textStyle: { normal: { color: 'rgb(129,12,69)' } },
          value: 1
        },
        {
          name: 'R',
          textStyle: { normal: { color: 'rgb(10,149,136)' } },
          value: 6
        },
        {
          name: '制作方法',
          textStyle: { normal: { color: 'rgb(26,105,47)' } },
          value: 2
        },
        {
          name: '免费视频',
          textStyle: { normal: { color: 'rgb(70,89,36)' } },
          value: 1
        },
        {
          name: 'Awesome',
          textStyle: { normal: { color: 'rgb(49,107,107)' } },
          value: 1
        },
        {
          name: '轻松',
          textStyle: { normal: { color: 'rgb(61,95,107)' } },
          value: 6
        },
        {
          name: '26',
          textStyle: { normal: { color: 'rgb(148,123,38)' } },
          value: 1
        },
        {
          name: '无师自通',
          textStyle: { normal: { color: 'rgb(39,68,135)' } },
          value: 1
        },
        {
          name: '跳动',
          textStyle: { normal: { color: 'rgb(34,125,81)' } },
          value: 1
        },
        {
          name: '拜拜',
          textStyle: { normal: { color: 'rgb(28,46,155)' } },
          value: 1
        },
        {
          name: '胶囊',
          textStyle: { normal: { color: 'rgb(75,123,42)' } },
          value: 1
        },
        {
          name: '决策树',
          textStyle: { normal: { color: 'rgb(70,136,156)' } },
          value: 5
        },
        {
          name: '贝塞尔',
          textStyle: { normal: { color: 'rgb(13,106,135)' } },
          value: 3
        },
        {
          name: '总目录',
          textStyle: { normal: { color: 'rgb(94,140,44)' } },
          value: 1
        },
        {
          name: '查询',
          textStyle: { normal: { color: 'rgb(38,20,149)' } },
          value: 4
        },
        {
          name: '等',
          textStyle: { normal: { color: 'rgb(144,113,5)' } },
          value: 10
        },
        {
          name: '自行',
          textStyle: { normal: { color: 'rgb(9,33,145)' } },
          value: 2
        },
        {
          name: 'WinAPI',
          textStyle: { normal: { color: 'rgb(145,62,24)' } },
          value: 1
        },
        {
          name: '预取',
          textStyle: { normal: { color: 'rgb(79,93,124)' } },
          value: 1
        },
        {
          name: '亮点',
          textStyle: { normal: { color: 'rgb(56,16,16)' } },
          value: 1
        },
        {
          name: '股票市场',
          textStyle: { normal: { color: 'rgb(107,82,77)' } },
          value: 1
        },
        {
          name: '电影海报',
          textStyle: { normal: { color: 'rgb(30,135,86)' } },
          value: 1
        },
        {
          name: 'window',
          textStyle: { normal: { color: 'rgb(8,113,108)' } },
          value: 1
        },
        {
          name: 'proto',
          textStyle: { normal: { color: 'rgb(148,115,143)' } },
          value: 2
        },
        {
          name: 'RouteLocator',
          textStyle: { normal: { color: 'rgb(148,137,144)' } },
          value: 1
        },
        {
          name: '天池',
          textStyle: { normal: { color: 'rgb(63,53,153)' } },
          value: 1
        },
        {
          name: '修改',
          textStyle: { normal: { color: 'rgb(88,134,155)' } },
          value: 1
        },
        {
          name: '附',
          textStyle: { normal: { color: 'rgb(50,0,122)' } },
          value: 13
        },
        {
          name: '神器',
          textStyle: { normal: { color: 'rgb(25,150,120)' } },
          value: 5
        },
        {
          name: 'PropertiesRouteDefinitionLocator',
          textStyle: { normal: { color: 'rgb(93,109,141)' } },
          value: 1
        },
        {
          name: '反射',
          textStyle: { normal: { color: 'rgb(128,49,80)' } },
          value: 4
        },
        {
          name: '设置',
          textStyle: { normal: { color: 'rgb(156,154,10)' } },
          value: 3
        },
        {
          name: 'profile',
          textStyle: { normal: { color: 'rgb(153,88,12)' } },
          value: 1
        },
        {
          name: 'Date',
          textStyle: { normal: { color: 'rgb(120,63,25)' } },
          value: 1
        },
        {
          name: '躲过',
          textStyle: { normal: { color: 'rgb(157,118,66)' } },
          value: 1
        },
        {
          name: '蜗牛',
          textStyle: { normal: { color: 'rgb(68,68,141)' } },
          value: 4
        },
        {
          name: 'lock',
          textStyle: { normal: { color: 'rgb(155,44,113)' } },
          value: 2
        },
        {
          name: '点',
          textStyle: { normal: { color: 'rgb(42,60,80)' } },
          value: 9
        },
        {
          name: 'GPU',
          textStyle: { normal: { color: 'rgb(17,35,116)' } },
          value: 4
        },
        {
          name: '会议',
          textStyle: { normal: { color: 'rgb(145,69,55)' } },
          value: 1
        },
        {
          name: '这样',
          textStyle: { normal: { color: 'rgb(5,69,55)' } },
          value: 2
        },
        {
          name: '视图',
          textStyle: { normal: { color: 'rgb(84,107,127)' } },
          value: 7
        },
        {
          name: '运行',
          textStyle: { normal: { color: 'rgb(84,109,31)' } },
          value: 12
        },
        {
          name: '延时',
          textStyle: { normal: { color: 'rgb(5,53,58)' } },
          value: 1
        },
        {
          name: '重返',
          textStyle: { normal: { color: 'rgb(67,121,122)' } },
          value: 1
        },
        {
          name: '事务',
          textStyle: { normal: { color: 'rgb(26,73,79)' } },
          value: 7
        },
        {
          name: '进化',
          textStyle: { normal: { color: 'rgb(106,137,142)' } },
          value: 1
        },
        {
          name: 'ENV',
          textStyle: { normal: { color: 'rgb(137,12,17)' } },
          value: 1
        },
        {
          name: '多个',
          textStyle: { normal: { color: 'rgb(14,20,75)' } },
          value: 4
        },
        {
          name: '前线',
          textStyle: { normal: { color: 'rgb(18,87,6)' } },
          value: 1
        },
        {
          name: 'ROC',
          textStyle: { normal: { color: 'rgb(146,144,72)' } },
          value: 1
        },
        {
          name: '还会',
          textStyle: { normal: { color: 'rgb(17,131,24)' } },
          value: 1
        },
        {
          name: 'Sharding',
          textStyle: { normal: { color: 'rgb(5,13,81)' } },
          value: 1
        },
        {
          name: 'ARM',
          textStyle: { normal: { color: 'rgb(93,104,137)' } },
          value: 1
        },
        {
          name: '背包',
          textStyle: { normal: { color: 'rgb(68,87,51)' } },
          value: 2
        },
        {
          name: '魔法',
          textStyle: { normal: { color: 'rgb(153,104,73)' } },
          value: 2
        },
        {
          name: '一套',
          textStyle: { normal: { color: 'rgb(80,156,108)' } },
          value: 3
        },
        {
          name: 'demo',
          textStyle: { normal: { color: 'rgb(55,136,145)' } },
          value: 4
        },
        {
          name: '有',
          textStyle: { normal: { color: 'rgb(99,78,144)' } },
          value: 32
        },
        {
          name: 'Redux',
          textStyle: { normal: { color: 'rgb(149,89,19)' } },
          value: 18
        },
        {
          name: '牵',
          textStyle: { normal: { color: 'rgb(152,23,16)' } },
          value: 1
        },
        {
          name: '包教包会',
          textStyle: { normal: { color: 'rgb(40,74,123)' } },
          value: 1
        },
        {
          name: '万次',
          textStyle: { normal: { color: 'rgb(52,3,141)' } },
          value: 1
        },
        {
          name: '死循环',
          textStyle: { normal: { color: 'rgb(34,76,57)' } },
          value: 1
        },
        {
          name: '全面',
          textStyle: { normal: { color: 'rgb(138,137,44)' } },
          value: 22
        },
        {
          name: '可能',
          textStyle: { normal: { color: 'rgb(133,9,81)' } },
          value: 17
        },
        {
          name: 'Broker',
          textStyle: { normal: { color: 'rgb(158,28,22)' } },
          value: 1
        },
        {
          name: '合并',
          textStyle: { normal: { color: 'rgb(45,85,51)' } },
          value: 1
        },
        {
          name: '相结合',
          textStyle: { normal: { color: 'rgb(159,72,115)' } },
          value: 1
        },
        {
          name: '半年',
          textStyle: { normal: { color: 'rgb(52,101,52)' } },
          value: 5
        },
        {
          name: '选择',
          textStyle: { normal: { color: 'rgb(142,145,106)' } },
          value: 11
        },
        {
          name: 'JPA',
          textStyle: { normal: { color: 'rgb(39,100,2)' } },
          value: 1
        },
        {
          name: '技能',
          textStyle: { normal: { color: 'rgb(83,24,66)' } },
          value: 2
        },
        {
          name: 'Device',
          textStyle: { normal: { color: 'rgb(121,56,64)' } },
          value: 1
        },
        {
          name: 'Elasticsearch',
          textStyle: { normal: { color: 'rgb(157,5,0)' } },
          value: 3
        },
        {
          name: 'Strace',
          textStyle: { normal: { color: 'rgb(16,156,131)' } },
          value: 1
        },
        {
          name: '官方网站',
          textStyle: { normal: { color: 'rgb(116,8,100)' } },
          value: 1
        },
        {
          name: '极大',
          textStyle: { normal: { color: 'rgb(28,48,29)' } },
          value: 1
        },
        {
          name: 'Headless',
          textStyle: { normal: { color: 'rgb(137,135,101)' } },
          value: 1
        },
        {
          name: '海报',
          textStyle: { normal: { color: 'rgb(92,93,25)' } },
          value: 2
        },
        {
          name: '米开朗基罗',
          textStyle: { normal: { color: 'rgb(85,145,62)' } },
          value: 1
        },
        {
          name: '左',
          textStyle: { normal: { color: 'rgb(76,110,0)' } },
          value: 1
        },
        {
          name: 'statement',
          textStyle: { normal: { color: 'rgb(80,1,4)' } },
          value: 1
        },
        {
          name: '似然',
          textStyle: { normal: { color: 'rgb(122,115,90)' } },
          value: 2
        },
        {
          name: 'mysql',
          textStyle: { normal: { color: 'rgb(20,37,16)' } },
          value: 1
        },
        {
          name: '19',
          textStyle: { normal: { color: 'rgb(110,86,134)' } },
          value: 4
        },
        {
          name: '艺术',
          textStyle: { normal: { color: 'rgb(98,22,58)' } },
          value: 1
        },
        {
          name: 'await',
          textStyle: { normal: { color: 'rgb(125,148,44)' } },
          value: 2
        },
        {
          name: '均衡',
          textStyle: { normal: { color: 'rgb(154,91,102)' } },
          value: 2
        },
        {
          name: '网',
          textStyle: { normal: { color: 'rgb(134,113,118)' } },
          value: 2
        },
        {
          name: '丨',
          textStyle: { normal: { color: 'rgb(34,151,42)' } },
          value: 1
        },
        {
          name: '陀螺仪',
          textStyle: { normal: { color: 'rgb(37,84,81)' } },
          value: 3
        },
        {
          name: '构架',
          textStyle: { normal: { color: 'rgb(155,51,53)' } },
          value: 3
        },
        {
          name: '散度',
          textStyle: { normal: { color: 'rgb(32,23,47)' } },
          value: 1
        },
        {
          name: 'Sentinel',
          textStyle: { normal: { color: 'rgb(19,14,141)' } },
          value: 1
        },
        {
          name: 'Al',
          textStyle: { normal: { color: 'rgb(15,97,46)' } },
          value: 1
        },
        {
          name: '压力',
          textStyle: { normal: { color: 'rgb(137,99,81)' } },
          value: 1
        },
        {
          name: '刷屏',
          textStyle: { normal: { color: 'rgb(68,90,125)' } },
          value: 1
        },
        {
          name: '原生',
          textStyle: { normal: { color: 'rgb(41,31,58)' } },
          value: 8
        },
        {
          name: 'LeetCode',
          textStyle: { normal: { color: 'rgb(9,130,111)' } },
          value: 1
        },
        {
          name: 'ML',
          textStyle: { normal: { color: 'rgb(42,25,35)' } },
          value: 4
        },
        {
          name: '七大',
          textStyle: { normal: { color: 'rgb(71,70,16)' } },
          value: 1
        },
        {
          name: '行业',
          textStyle: { normal: { color: 'rgb(139,156,86)' } },
          value: 1
        },
        {
          name: '遥远',
          textStyle: { normal: { color: 'rgb(21,97,130)' } },
          value: 1
        },
        {
          name: '等式',
          textStyle: { normal: { color: 'rgb(0,105,89)' } },
          value: 1
        },
        {
          name: '1080',
          textStyle: { normal: { color: 'rgb(68,40,148)' } },
          value: 1
        },
        {
          name: 'recognition',
          textStyle: { normal: { color: 'rgb(1,114,64)' } },
          value: 1
        },
        {
          name: '制作',
          textStyle: { normal: { color: 'rgb(54,99,64)' } },
          value: 9
        },
        {
          name: '应从',
          textStyle: { normal: { color: 'rgb(124,29,66)' } },
          value: 1
        },
        {
          name: '作者',
          textStyle: { normal: { color: 'rgb(107,126,30)' } },
          value: 2
        },
        {
          name: '网站',
          textStyle: { normal: { color: 'rgb(16,12,102)' } },
          value: 11
        },
        {
          name: '实习生',
          textStyle: { normal: { color: 'rgb(129,115,16)' } },
          value: 1
        },
        {
          name: '生态',
          textStyle: { normal: { color: 'rgb(34,31,123)' } },
          value: 13
        },
        {
          name: '机制',
          textStyle: { normal: { color: 'rgb(159,30,74)' } },
          value: 22
        },
        {
          name: '六',
          textStyle: { normal: { color: 'rgb(70,137,5)' } },
          value: 11
        },
        {
          name: '层面',
          textStyle: { normal: { color: 'rgb(29,106,28)' } },
          value: 1
        },
        {
          name: '探索',
          textStyle: { normal: { color: 'rgb(18,109,31)' } },
          value: 11
        },
        {
          name: '报告',
          textStyle: { normal: { color: 'rgb(130,44,102)' } },
          value: 5
        },
        {
          name: '博弈',
          textStyle: { normal: { color: 'rgb(36,5,128)' } },
          value: 1
        },
        {
          name: '样',
          textStyle: { normal: { color: 'rgb(5,62,128)' } },
          value: 1
        },
        {
          name: 'Java8',
          textStyle: { normal: { color: 'rgb(15,71,14)' } },
          value: 1
        },
        {
          name: '点餐',
          textStyle: { normal: { color: 'rgb(13,127,45)' } },
          value: 4
        },
        {
          name: '疯狂',
          textStyle: { normal: { color: 'rgb(99,28,102)' } },
          value: 1
        },
        {
          name: '你好',
          textStyle: { normal: { color: 'rgb(27,66,29)' } },
          value: 1
        },
        {
          name: '视频压缩',
          textStyle: { normal: { color: 'rgb(70,88,80)' } },
          value: 1
        },
        {
          name: 'share',
          textStyle: { normal: { color: 'rgb(107,59,81)' } },
          value: 1
        },
        {
          name: '永久',
          textStyle: { normal: { color: 'rgb(78,136,152)' } },
          value: 1
        },
        {
          name: '获得',
          textStyle: { normal: { color: 'rgb(109,125,83)' } },
          value: 2
        },
        {
          name: '扩展',
          textStyle: { normal: { color: 'rgb(89,153,122)' } },
          value: 11
        },
        {
          name: '体系',
          textStyle: { normal: { color: 'rgb(0,46,24)' } },
          value: 2
        },
        {
          name: '个类',
          textStyle: { normal: { color: 'rgb(25,81,10)' } },
          value: 1
        },
        {
          name: 'Hive',
          textStyle: { normal: { color: 'rgb(54,146,155)' } },
          value: 1
        },
        {
          name: '地',
          textStyle: { normal: { color: 'rgb(43,25,143)' } },
          value: 5
        },
        {
          name: '啥',
          textStyle: { normal: { color: 'rgb(109,28,103)' } },
          value: 3
        },
        {
          name: '四',
          textStyle: { normal: { color: 'rgb(81,63,136)' } },
          value: 14
        },
        {
          name: 'icon',
          textStyle: { normal: { color: 'rgb(66,128,45)' } },
          value: 1
        },
        {
          name: '抢票',
          textStyle: { normal: { color: 'rgb(116,134,139)' } },
          value: 1
        },
        {
          name: '自定义',
          textStyle: { normal: { color: 'rgb(159,81,138)' } },
          value: 7
        },
        {
          name: '点评',
          textStyle: { normal: { color: 'rgb(124,111,93)' } },
          value: 4
        },
        {
          name: '调度',
          textStyle: { normal: { color: 'rgb(143,111,63)' } },
          value: 4
        },
        {
          name: '监听器',
          textStyle: { normal: { color: 'rgb(56,155,91)' } },
          value: 1
        },
        {
          name: '好图',
          textStyle: { normal: { color: 'rgb(116,10,141)' } },
          value: 1
        },
        {
          name: '建议',
          textStyle: { normal: { color: 'rgb(48,23,43)' } },
          value: 4
        },
        {
          name: 'CTR',
          textStyle: { normal: { color: 'rgb(120,145,128)' } },
          value: 1
        },
        {
          name: '识别',
          textStyle: { normal: { color: 'rgb(27,91,139)' } },
          value: 15
        },
        {
          name: '小试牛刀',
          textStyle: { normal: { color: 'rgb(135,158,95)' } },
          value: 1
        },
        {
          name: '基本概念',
          textStyle: { normal: { color: 'rgb(123,21,92)' } },
          value: 3
        },
        {
          name: '统一',
          textStyle: { normal: { color: 'rgb(103,86,67)' } },
          value: 3
        },
        {
          name: '数据类型',
          textStyle: { normal: { color: 'rgb(135,150,20)' } },
          value: 3
        },
        {
          name: 'L1',
          textStyle: { normal: { color: 'rgb(110,159,94)' } },
          value: 3
        },
        {
          name: '数据中心',
          textStyle: { normal: { color: 'rgb(17,154,68)' } },
          value: 1
        },
        {
          name: '防',
          textStyle: { normal: { color: 'rgb(134,87,130)' } },
          value: 1
        },
        {
          name: '颜色',
          textStyle: { normal: { color: 'rgb(131,58,116)' } },
          value: 1
        },
        {
          name: '维护',
          textStyle: { normal: { color: 'rgb(15,78,59)' } },
          value: 1
        },
        {
          name: 'VS',
          textStyle: { normal: { color: 'rgb(5,135,71)' } },
          value: 2
        },
        {
          name: 'WebGL',
          textStyle: { normal: { color: 'rgb(96,137,25)' } },
          value: 1
        },
        {
          name: '理解',
          textStyle: { normal: { color: 'rgb(11,126,154)' } },
          value: 44
        },
        {
          name: '243',
          textStyle: { normal: { color: 'rgb(97,44,11)' } },
          value: 1
        },
        {
          name: 'PornHub',
          textStyle: { normal: { color: 'rgb(16,15,82)' } },
          value: 1
        },
        {
          name: '派',
          textStyle: { normal: { color: 'rgb(106,86,132)' } },
          value: 3
        },
        {
          name: 'Tensorflow',
          textStyle: { normal: { color: 'rgb(43,128,42)' } },
          value: 14
        },
        {
          name: '约定',
          textStyle: { normal: { color: 'rgb(106,149,45)' } },
          value: 1
        },
        {
          name: '拒绝',
          textStyle: { normal: { color: 'rgb(84,60,87)' } },
          value: 1
        },
        {
          name: 'admin',
          textStyle: { normal: { color: 'rgb(55,82,111)' } },
          value: 1
        },
        {
          name: '自我',
          textStyle: { normal: { color: 'rgb(160,93,7)' } },
          value: 3
        },
        {
          name: '制造业',
          textStyle: { normal: { color: 'rgb(90,41,115)' } },
          value: 1
        },
        {
          name: '实施',
          textStyle: { normal: { color: 'rgb(149,14,132)' } },
          value: 2
        },
        {
          name: '手摸',
          textStyle: { normal: { color: 'rgb(32,117,143)' } },
          value: 2
        },
        {
          name: 'tf',
          textStyle: { normal: { color: 'rgb(22,74,151)' } },
          value: 1
        },
        {
          name: '秋招',
          textStyle: { normal: { color: 'rgb(8,42,4)' } },
          value: 1
        },
        {
          name: '五件',
          textStyle: { normal: { color: 'rgb(147,95,65)' } },
          value: 1
        },
        {
          name: '出现',
          textStyle: { normal: { color: 'rgb(150,133,66)' } },
          value: 2
        },
        {
          name: '失效',
          textStyle: { normal: { color: 'rgb(41,150,19)' } },
          value: 1
        },
        {
          name: '线性代数',
          textStyle: { normal: { color: 'rgb(2,17,24)' } },
          value: 1
        },
        {
          name: '京麦',
          textStyle: { normal: { color: 'rgb(102,112,118)' } },
          value: 1
        },
        {
          name: '2020',
          textStyle: { normal: { color: 'rgb(98,62,92)' } },
          value: 1
        },
        {
          name: '对应',
          textStyle: { normal: { color: 'rgb(77,145,155)' } },
          value: 1
        },
        {
          name: 'New',
          textStyle: { normal: { color: 'rgb(149,125,148)' } },
          value: 1
        },
        {
          name: '弹性',
          textStyle: { normal: { color: 'rgb(138,8,110)' } },
          value: 1
        },
        {
          name: '观点',
          textStyle: { normal: { color: 'rgb(121,73,99)' } },
          value: 1
        },
        {
          name: '总有',
          textStyle: { normal: { color: 'rgb(50,126,20)' } },
          value: 1
        },
        {
          name: 'MVVM',
          textStyle: { normal: { color: 'rgb(31,46,71)' } },
          value: 1
        },
        {
          name: '很全',
          textStyle: { normal: { color: 'rgb(26,15,121)' } },
          value: 1
        },
        {
          name: '大比拼',
          textStyle: { normal: { color: 'rgb(25,2,75)' } },
          value: 2
        },
        {
          name: '单页',
          textStyle: { normal: { color: 'rgb(112,139,131)' } },
          value: 1
        },
        {
          name: '深刻',
          textStyle: { normal: { color: 'rgb(112,120,28)' } },
          value: 1
        },
        {
          name: '壁纸',
          textStyle: { normal: { color: 'rgb(56,113,58)' } },
          value: 3
        },
        {
          name: 'wait',
          textStyle: { normal: { color: 'rgb(44,98,41)' } },
          value: 1
        },
        {
          name: '家',
          textStyle: { normal: { color: 'rgb(66,42,84)' } },
          value: 3
        },
        {
          name: '寻找',
          textStyle: { normal: { color: 'rgb(100,14,52)' } },
          value: 1
        },
        {
          name: 'Properties',
          textStyle: { normal: { color: 'rgb(75,107,121)' } },
          value: 1
        },
        {
          name: 'Universe',
          textStyle: { normal: { color: 'rgb(116,106,79)' } },
          value: 1
        },
        {
          name: '语法',
          textStyle: { normal: { color: 'rgb(83,34,48)' } },
          value: 7
        },
        {
          name: '算不算',
          textStyle: { normal: { color: 'rgb(107,64,54)' } },
          value: 1
        },
        {
          name: '新手',
          textStyle: { normal: { color: 'rgb(25,88,12)' } },
          value: 6
        },
        {
          name: '配合',
          textStyle: { normal: { color: 'rgb(128,79,30)' } },
          value: 1
        },
        {
          name: '算子',
          textStyle: { normal: { color: 'rgb(150,148,16)' } },
          value: 1
        },
        {
          name: '滴滴',
          textStyle: { normal: { color: 'rgb(42,16,97)' } },
          value: 4
        },
        {
          name: '典籍',
          textStyle: { normal: { color: 'rgb(141,18,77)' } },
          value: 1
        },
        {
          name: 'apply',
          textStyle: { normal: { color: 'rgb(63,128,122)' } },
          value: 1
        },
        {
          name: '何时',
          textStyle: { normal: { color: 'rgb(10,34,121)' } },
          value: 2
        },
        {
          name: '另造',
          textStyle: { normal: { color: 'rgb(124,140,81)' } },
          value: 1
        },
        {
          name: '拦截器',
          textStyle: { normal: { color: 'rgb(129,10,85)' } },
          value: 1
        },
        {
          name: '路',
          textStyle: { normal: { color: 'rgb(157,71,10)' } },
          value: 26
        },
        {
          name: '像',
          textStyle: { normal: { color: 'rgb(15,30,16)' } },
          value: 18
        },
        {
          name: '懵',
          textStyle: { normal: { color: 'rgb(66,86,118)' } },
          value: 1
        },
        {
          name: '编译',
          textStyle: { normal: { color: 'rgb(111,125,103)' } },
          value: 7
        },
        {
          name: '刚',
          textStyle: { normal: { color: 'rgb(17,70,25)' } },
          value: 1
        },
        {
          name: '回顾',
          textStyle: { normal: { color: 'rgb(124,113,25)' } },
          value: 8
        },
        {
          name: '追书',
          textStyle: { normal: { color: 'rgb(50,72,145)' } },
          value: 1
        },
        {
          name: 'Generator',
          textStyle: { normal: { color: 'rgb(155,115,147)' } },
          value: 1
        },
        {
          name: '入行',
          textStyle: { normal: { color: 'rgb(131,145,91)' } },
          value: 1
        },
        {
          name: '链',
          textStyle: { normal: { color: 'rgb(33,111,158)' } },
          value: 9
        },
        {
          name: 'MyCat',
          textStyle: { normal: { color: 'rgb(30,137,63)' } },
          value: 1
        },
        {
          name: '常见问题',
          textStyle: { normal: { color: 'rgb(76,79,94)' } },
          value: 5
        },
        {
          name: 'math',
          textStyle: { normal: { color: 'rgb(108,147,19)' } },
          value: 2
        },
        {
          name: '传播',
          textStyle: { normal: { color: 'rgb(121,2,0)' } },
          value: 1
        },
        {
          name: 'server',
          textStyle: { normal: { color: 'rgb(36,140,110)' } },
          value: 3
        },
        {
          name: '陆奇',
          textStyle: { normal: { color: 'rgb(130,6,83)' } },
          value: 1
        },
        {
          name: '5.12',
          textStyle: { normal: { color: 'rgb(114,82,105)' } },
          value: 1
        },
        {
          name: '锁',
          textStyle: { normal: { color: 'rgb(94,2,87)' } },
          value: 12
        },
        {
          name: '阻塞',
          textStyle: { normal: { color: 'rgb(87,123,136)' } },
          value: 3
        },
        {
          name: 'CRF',
          textStyle: { normal: { color: 'rgb(44,99,35)' } },
          value: 1
        },
        {
          name: '十五',
          textStyle: { normal: { color: 'rgb(31,151,79)' } },
          value: 1
        },
        {
          name: '现在',
          textStyle: { normal: { color: 'rgb(27,7,140)' } },
          value: 1
        },
        {
          name: '视角',
          textStyle: { normal: { color: 'rgb(86,46,98)' } },
          value: 2
        },
        {
          name: '什么',
          textStyle: { normal: { color: 'rgb(128,31,33)' } },
          value: 35
        },
        {
          name: 'Preload',
          textStyle: { normal: { color: 'rgb(17,156,6)' } },
          value: 1
        },
        {
          name: '色情',
          textStyle: { normal: { color: 'rgb(106,39,132)' } },
          value: 1
        },
        {
          name: '变化',
          textStyle: { normal: { color: 'rgb(76,137,128)' } },
          value: 2
        },
        {
          name: '探测器',
          textStyle: { normal: { color: 'rgb(12,29,95)' } },
          value: 1
        },
        {
          name: 'Top30',
          textStyle: { normal: { color: 'rgb(51,85,138)' } },
          value: 1
        },
        {
          name: '通过',
          textStyle: { normal: { color: 'rgb(22,153,27)' } },
          value: 19
        },
        {
          name: '进攻',
          textStyle: { normal: { color: 'rgb(69,143,154)' } },
          value: 1
        },
        {
          name: '鸟瞰图',
          textStyle: { normal: { color: 'rgb(68,16,115)' } },
          value: 1
        },
        {
          name: '易用性',
          textStyle: { normal: { color: 'rgb(133,158,27)' } },
          value: 1
        },
        {
          name: 'Embeddings',
          textStyle: { normal: { color: 'rgb(47,82,21)' } },
          value: 1
        },
        {
          name: '必问',
          textStyle: { normal: { color: 'rgb(123,81,146)' } },
          value: 2
        },
        {
          name: 'SVG',
          textStyle: { normal: { color: 'rgb(11,137,124)' } },
          value: 2
        },
        {
          name: 'cquery',
          textStyle: { normal: { color: 'rgb(103,68,119)' } },
          value: 1
        },
        {
          name: 'webkit',
          textStyle: { normal: { color: 'rgb(110,157,105)' } },
          value: 1
        },
        {
          name: '跨库',
          textStyle: { normal: { color: 'rgb(130,125,90)' } },
          value: 1
        },
        {
          name: '晚',
          textStyle: { normal: { color: 'rgb(58,137,42)' } },
          value: 2
        },
        {
          name: '代理',
          textStyle: { normal: { color: 'rgb(4,92,0)' } },
          value: 12
        },
        {
          name: '形式语言',
          textStyle: { normal: { color: 'rgb(144,24,99)' } },
          value: 3
        },
        {
          name: '阐述',
          textStyle: { normal: { color: 'rgb(116,55,69)' } },
          value: 4
        },
        {
          name: '实战',
          textStyle: { normal: { color: 'rgb(126,137,128)' } },
          value: 60
        },
        {
          name: 'Security',
          textStyle: { normal: { color: 'rgb(69,148,6)' } },
          value: 34
        },
        {
          name: '要点',
          textStyle: { normal: { color: 'rgb(111,113,6)' } },
          value: 2
        },
        {
          name: '王垠',
          textStyle: { normal: { color: 'rgb(32,116,1)' } },
          value: 1
        },
        {
          name: '咖',
          textStyle: { normal: { color: 'rgb(47,97,14)' } },
          value: 1
        },
        {
          name: 'kubernetes',
          textStyle: { normal: { color: 'rgb(93,87,134)' } },
          value: 1
        },
        {
          name: '经典',
          textStyle: { normal: { color: 'rgb(65,31,118)' } },
          value: 5
        },
        {
          name: 'hanbingtao',
          textStyle: { normal: { color: 'rgb(14,70,46)' } },
          value: 1
        },
        {
          name: '回收',
          textStyle: { normal: { color: 'rgb(38,150,22)' } },
          value: 6
        },
        {
          name: 'NMP',
          textStyle: { normal: { color: 'rgb(115,125,35)' } },
          value: 1
        },
        {
          name: 'hashCode',
          textStyle: { normal: { color: 'rgb(87,79,11)' } },
          value: 1
        },
        {
          name: '基准',
          textStyle: { normal: { color: 'rgb(78,67,124)' } },
          value: 2
        },
        {
          name: '进行',
          textStyle: { normal: { color: 'rgb(11,128,110)' } },
          value: 19
        },
        {
          name: 'Vuex',
          textStyle: { normal: { color: 'rgb(18,158,154)' } },
          value: 4
        },
        {
          name: '过',
          textStyle: { normal: { color: 'rgb(102,84,139)' } },
          value: 2
        },
        {
          name: '算法',
          textStyle: { normal: { color: 'rgb(0,128,56)' } },
          value: 66
        },
        {
          name: '软',
          textStyle: { normal: { color: 'rgb(66,57,47)' } },
          value: 1
        },
        {
          name: '奇虎',
          textStyle: { normal: { color: 'rgb(38,142,85)' } },
          value: 2
        },
        {
          name: '星际',
          textStyle: { normal: { color: 'rgb(34,130,149)' } },
          value: 1
        },
        {
          name: '代替',
          textStyle: { normal: { color: 'rgb(36,138,117)' } },
          value: 1
        },
        {
          name: '全景图',
          textStyle: { normal: { color: 'rgb(91,77,43)' } },
          value: 1
        },
        {
          name: 'HOC',
          textStyle: { normal: { color: 'rgb(69,33,41)' } },
          value: 1
        },
        {
          name: '微软',
          textStyle: { normal: { color: 'rgb(16,3,109)' } },
          value: 2
        },
        {
          name: '大白话',
          textStyle: { normal: { color: 'rgb(105,20,37)' } },
          value: 1
        },
        {
          name: '管理系统',
          textStyle: { normal: { color: 'rgb(3,74,98)' } },
          value: 3
        },
        {
          name: '最近',
          textStyle: { normal: { color: 'rgb(65,99,21)' } },
          value: 1
        },
        {
          name: 'framework',
          textStyle: { normal: { color: 'rgb(142,151,2)' } },
          value: 3
        },
        {
          name: '滚动',
          textStyle: { normal: { color: 'rgb(23,118,127)' } },
          value: 3
        },
        {
          name: 'JDK',
          textStyle: { normal: { color: 'rgb(48,99,96)' } },
          value: 4
        },
        {
          name: 'Hershell',
          textStyle: { normal: { color: 'rgb(115,149,57)' } },
          value: 1
        },
        {
          name: '注意',
          textStyle: { normal: { color: 'rgb(112,107,52)' } },
          value: 5
        },
        {
          name: '报名',
          textStyle: { normal: { color: 'rgb(43,93,140)' } },
          value: 1
        },
        {
          name: 'Helm',
          textStyle: { normal: { color: 'rgb(117,151,119)' } },
          value: 1
        },
        {
          name: '百元',
          textStyle: { normal: { color: 'rgb(36,85,128)' } },
          value: 1
        },
        {
          name: 'P2P',
          textStyle: { normal: { color: 'rgb(28,20,136)' } },
          value: 1
        },
        {
          name: '三维',
          textStyle: { normal: { color: 'rgb(0,4,86)' } },
          value: 1
        },
        {
          name: '吧',
          textStyle: { normal: { color: 'rgb(57,21,42)' } },
          value: 7
        },
        {
          name: '感受',
          textStyle: { normal: { color: 'rgb(30,124,91)' } },
          value: 4
        },
        {
          name: '传输',
          textStyle: { normal: { color: 'rgb(111,83,120)' } },
          value: 1
        },
        {
          name: '聊一聊',
          textStyle: { normal: { color: 'rgb(76,151,129)' } },
          value: 6
        },
        {
          name: '你',
          textStyle: { normal: { color: 'rgb(150,93,22)' } },
          value: 150
        },
        {
          name: '画画',
          textStyle: { normal: { color: 'rgb(81,114,154)' } },
          value: 1
        },
        {
          name: '历史',
          textStyle: { normal: { color: 'rgb(104,150,87)' } },
          value: 1
        },
        {
          name: '动',
          textStyle: { normal: { color: 'rgb(76,111,81)' } },
          value: 1
        },
        {
          name: '监控',
          textStyle: { normal: { color: 'rgb(133,99,44)' } },
          value: 14
        },
        {
          name: '大势',
          textStyle: { normal: { color: 'rgb(153,21,52)' } },
          value: 5
        },
        {
          name: '洗衣',
          textStyle: { normal: { color: 'rgb(136,12,127)' } },
          value: 5
        },
        {
          name: '总结',
          textStyle: { normal: { color: 'rgb(147,6,117)' } },
          value: 57
        },
        {
          name: '脱颖而出',
          textStyle: { normal: { color: 'rgb(92,61,77)' } },
          value: 1
        },
        {
          name: '权重',
          textStyle: { normal: { color: 'rgb(21,129,63)' } },
          value: 2
        },
        {
          name: '火热',
          textStyle: { normal: { color: 'rgb(25,48,27)' } },
          value: 1
        },
        {
          name: '歌手',
          textStyle: { normal: { color: 'rgb(57,107,120)' } },
          value: 1
        },
        {
          name: '比',
          textStyle: { normal: { color: 'rgb(51,47,29)' } },
          value: 8
        },
        {
          name: '市场',
          textStyle: { normal: { color: 'rgb(87,121,139)' } },
          value: 2
        },
        {
          name: '再',
          textStyle: { normal: { color: 'rgb(0,102,55)' } },
          value: 8
        },
        {
          name: '实录',
          textStyle: { normal: { color: 'rgb(28,59,158)' } },
          value: 2
        },
        {
          name: '奉上',
          textStyle: { normal: { color: 'rgb(125,43,41)' } },
          value: 1
        },
        {
          name: 'Registry',
          textStyle: { normal: { color: 'rgb(36,12,72)' } },
          value: 3
        },
        {
          name: '软件',
          textStyle: { normal: { color: 'rgb(53,63,17)' } },
          value: 4
        },
        {
          name: '遭受',
          textStyle: { normal: { color: 'rgb(122,65,116)' } },
          value: 2
        },
        {
          name: 'Step',
          textStyle: { normal: { color: 'rgb(37,151,66)' } },
          value: 2
        },
        {
          name: '监听',
          textStyle: { normal: { color: 'rgb(99,38,18)' } },
          value: 1
        },
        {
          name: '之自减',
          textStyle: { normal: { color: 'rgb(7,9,107)' } },
          value: 1
        },
        {
          name: '超全',
          textStyle: { normal: { color: 'rgb(18,158,89)' } },
          value: 9
        },
        {
          name: 'keyspace',
          textStyle: { normal: { color: 'rgb(126,30,105)' } },
          value: 2
        },
        {
          name: '一百二十',
          textStyle: { normal: { color: 'rgb(148,47,157)' } },
          value: 1
        },
        {
          name: 'instagram',
          textStyle: { normal: { color: 'rgb(69,98,138)' } },
          value: 1
        },
        {
          name: '民谣',
          textStyle: { normal: { color: 'rgb(133,72,147)' } },
          value: 1
        },
        {
          name: 'Protobuf3',
          textStyle: { normal: { color: 'rgb(99,154,22)' } },
          value: 1
        },
        {
          name: '横跨',
          textStyle: { normal: { color: 'rgb(26,17,2)' } },
          value: 1
        },
        {
          name: '视觉',
          textStyle: { normal: { color: 'rgb(6,142,131)' } },
          value: 9
        },
        {
          name: 'Skeleton',
          textStyle: { normal: { color: 'rgb(101,130,140)' } },
          value: 2
        },
        {
          name: '自动识别',
          textStyle: { normal: { color: 'rgb(7,145,117)' } },
          value: 1
        },
        {
          name: 'NODE',
          textStyle: { normal: { color: 'rgb(71,42,22)' } },
          value: 1
        },
        {
          name: '幺',
          textStyle: { normal: { color: 'rgb(138,55,56)' } },
          value: 1
        },
        {
          name: '本地',
          textStyle: { normal: { color: 'rgb(30,8,121)' } },
          value: 11
        },
        {
          name: '端线',
          textStyle: { normal: { color: 'rgb(90,74,80)' } },
          value: 1
        },
        {
          name: 'App',
          textStyle: { normal: { color: 'rgb(20,55,130)' } },
          value: 21
        },
        {
          name: 'K',
          textStyle: { normal: { color: 'rgb(70,42,52)' } },
          value: 2
        },
        {
          name: '分布式',
          textStyle: { normal: { color: 'rgb(146,27,14)' } },
          value: 46
        },
        {
          name: '远程',
          textStyle: { normal: { color: 'rgb(136,8,117)' } },
          value: 8
        },
        {
          name: '查找',
          textStyle: { normal: { color: 'rgb(65,70,31)' } },
          value: 1
        },
        {
          name: 'IP',
          textStyle: { normal: { color: 'rgb(2,122,81)' } },
          value: 3
        },
        {
          name: 'xlsx',
          textStyle: { normal: { color: 'rgb(103,92,64)' } },
          value: 2
        },
        {
          name: '哆',
          textStyle: { normal: { color: 'rgb(49,105,106)' } },
          value: 1
        },
        {
          name: '番外篇',
          textStyle: { normal: { color: 'rgb(27,88,10)' } },
          value: 3
        },
        {
          name: '跳',
          textStyle: { normal: { color: 'rgb(112,146,55)' } },
          value: 24
        },
        {
          name: '模仿',
          textStyle: { normal: { color: 'rgb(129,130,108)' } },
          value: 1
        },
        {
          name: 'resize',
          textStyle: { normal: { color: 'rgb(26,72,95)' } },
          value: 1
        },
        {
          name: 'RabbitMQ',
          textStyle: { normal: { color: 'rgb(15,120,150)' } },
          value: 4
        },
        {
          name: 'php',
          textStyle: { normal: { color: 'rgb(140,48,121)' } },
          value: 6
        },
        {
          name: '父',
          textStyle: { normal: { color: 'rgb(138,11,145)' } },
          value: 1
        },
        {
          name: '1.11',
          textStyle: { normal: { color: 'rgb(19,22,11)' } },
          value: 1
        },
        {
          name: '强过',
          textStyle: { normal: { color: 'rgb(144,121,92)' } },
          value: 1
        },
        {
          name: '属性',
          textStyle: { normal: { color: 'rgb(87,75,72)' } },
          value: 8
        },
        {
          name: '失败',
          textStyle: { normal: { color: 'rgb(106,113,153)' } },
          value: 1
        },
        {
          name: '演员',
          textStyle: { normal: { color: 'rgb(144,153,91)' } },
          value: 1
        },
        {
          name: 'form',
          textStyle: { normal: { color: 'rgb(155,51,2)' } },
          value: 2
        },
        {
          name: '事件',
          textStyle: { normal: { color: 'rgb(105,43,121)' } },
          value: 6
        },
        {
          name: 'gitlab',
          textStyle: { normal: { color: 'rgb(130,24,29)' } },
          value: 1
        },
        {
          name: '认真',
          textStyle: { normal: { color: 'rgb(9,82,81)' } },
          value: 2
        },
        {
          name: 'Hinton',
          textStyle: { normal: { color: 'rgb(114,145,46)' } },
          value: 3
        },
        {
          name: '语料',
          textStyle: { normal: { color: 'rgb(67,132,61)' } },
          value: 1
        },
        {
          name: 'GatewayFilterFactory',
          textStyle: { normal: { color: 'rgb(28,86,66)' } },
          value: 1
        },
        {
          name: '改造',
          textStyle: { normal: { color: 'rgb(120,94,157)' } },
          value: 2
        },
        {
          name: 'Action',
          textStyle: { normal: { color: 'rgb(12,103,28)' } },
          value: 2
        },
        {
          name: '界面设计',
          textStyle: { normal: { color: 'rgb(154,67,89)' } },
          value: 4
        },
        {
          name: '需求',
          textStyle: { normal: { color: 'rgb(6,85,100)' } },
          value: 2
        },
        {
          name: '投入',
          textStyle: { normal: { color: 'rgb(143,52,7)' } },
          value: 1
        },
        {
          name: '第一篇',
          textStyle: { normal: { color: 'rgb(66,101,49)' } },
          value: 2
        },
        {
          name: '如下',
          textStyle: { normal: { color: 'rgb(22,88,64)' } },
          value: 1
        },
        {
          name: '多久',
          textStyle: { normal: { color: 'rgb(12,110,78)' } },
          value: 1
        },
        {
          name: '年',
          textStyle: { normal: { color: 'rgb(59,4,49)' } },
          value: 41
        },
        {
          name: '一个',
          textStyle: { normal: { color: 'rgb(112,149,11)' } },
          value: 127
        },
        {
          name: 'WebRTC',
          textStyle: { normal: { color: 'rgb(57,159,71)' } },
          value: 1
        },
        {
          name: 'response',
          textStyle: { normal: { color: 'rgb(29,88,136)' } },
          value: 2
        },
        {
          name: '相互',
          textStyle: { normal: { color: 'rgb(148,153,21)' } },
          value: 1
        },
        {
          name: '摇头晃脑',
          textStyle: { normal: { color: 'rgb(103,142,89)' } },
          value: 1
        },
        {
          name: 'laravel5',
          textStyle: { normal: { color: 'rgb(138,9,91)' } },
          value: 2
        },
        {
          name: '图看',
          textStyle: { normal: { color: 'rgb(60,3,81)' } },
          value: 4
        },
        {
          name: 'ON',
          textStyle: { normal: { color: 'rgb(24,160,108)' } },
          value: 1
        },
        {
          name: '妈',
          textStyle: { normal: { color: 'rgb(35,159,44)' } },
          value: 1
        },
        {
          name: '天眼',
          textStyle: { normal: { color: 'rgb(154,14,53)' } },
          value: 1
        },
        {
          name: '飞机',
          textStyle: { normal: { color: 'rgb(105,155,129)' } },
          value: 1
        },
        {
          name: '近',
          textStyle: { normal: { color: 'rgb(159,83,5)' } },
          value: 1
        },
        {
          name: '人脸',
          textStyle: { normal: { color: 'rgb(77,79,158)' } },
          value: 1
        },
        {
          name: '竟比',
          textStyle: { normal: { color: 'rgb(64,84,137)' } },
          value: 1
        },
        {
          name: 'tree',
          textStyle: { normal: { color: 'rgb(49,52,17)' } },
          value: 1
        },
        {
          name: '情感',
          textStyle: { normal: { color: 'rgb(42,24,57)' } },
          value: 3
        },
        {
          name: '代表性',
          textStyle: { normal: { color: 'rgb(89,73,79)' } },
          value: 1
        },
        {
          name: '传递信息',
          textStyle: { normal: { color: 'rgb(23,95,67)' } },
          value: 1
        },
        {
          name: 'Extended',
          textStyle: { normal: { color: 'rgb(134,53,156)' } },
          value: 1
        },
        {
          name: 'dialog',
          textStyle: { normal: { color: 'rgb(22,147,56)' } },
          value: 1
        },
        {
          name: '优惠',
          textStyle: { normal: { color: 'rgb(22,15,83)' } },
          value: 1
        },
        {
          name: 'CDH',
          textStyle: { normal: { color: 'rgb(127,33,27)' } },
          value: 2
        },
        {
          name: '复原',
          textStyle: { normal: { color: 'rgb(54,92,60)' } },
          value: 1
        },
        {
          name: '上线',
          textStyle: { normal: { color: 'rgb(128,19,65)' } },
          value: 16
        },
        {
          name: '建造',
          textStyle: { normal: { color: 'rgb(24,3,124)' } },
          value: 1
        },
        {
          name: '波斯顿',
          textStyle: { normal: { color: 'rgb(149,52,141)' } },
          value: 1
        },
        {
          name: '单点',
          textStyle: { normal: { color: 'rgb(80,124,105)' } },
          value: 2
        },
        {
          name: 'DroneSalon',
          textStyle: { normal: { color: 'rgb(17,93,53)' } },
          value: 2
        },
        {
          name: '字符',
          textStyle: { normal: { color: 'rgb(64,49,60)' } },
          value: 2
        },
        {
          name: '永不',
          textStyle: { normal: { color: 'rgb(90,142,51)' } },
          value: 1
        },
        {
          name: 'lsof',
          textStyle: { normal: { color: 'rgb(158,128,123)' } },
          value: 1
        },
        {
          name: '敏感',
          textStyle: { normal: { color: 'rgb(80,16,133)' } },
          value: 2
        },
        {
          name: '导向',
          textStyle: { normal: { color: 'rgb(81,19,49)' } },
          value: 1
        },
        {
          name: '特等奖',
          textStyle: { normal: { color: 'rgb(13,69,100)' } },
          value: 1
        },
        {
          name: '怎么样',
          textStyle: { normal: { color: 'rgb(57,30,56)' } },
          value: 6
        },
        {
          name: '观看',
          textStyle: { normal: { color: 'rgb(130,118,60)' } },
          value: 2
        },
        {
          name: '112',
          textStyle: { normal: { color: 'rgb(42,29,17)' } },
          value: 1
        },
        {
          name: '队列',
          textStyle: { normal: { color: 'rgb(56,160,23)' } },
          value: 7
        },
        {
          name: '详细',
          textStyle: { normal: { color: 'rgb(120,90,120)' } },
          value: 25
        },
        {
          name: '起源',
          textStyle: { normal: { color: 'rgb(46,105,83)' } },
          value: 1
        },
        {
          name: '坑',
          textStyle: { normal: { color: 'rgb(70,117,47)' } },
          value: 7
        },
        {
          name: '四种',
          textStyle: { normal: { color: 'rgb(122,12,105)' } },
          value: 2
        },
        {
          name: '令牌',
          textStyle: { normal: { color: 'rgb(5,86,33)' } },
          value: 2
        },
        {
          name: '版',
          textStyle: { normal: { color: 'rgb(44,123,78)' } },
          value: 24
        },
        {
          name: 'Windows',
          textStyle: { normal: { color: 'rgb(3,79,0)' } },
          value: 4
        },
        {
          name: '基于',
          textStyle: { normal: { color: 'rgb(80,66,10)' } },
          value: 90
        },
        {
          name: '迷人',
          textStyle: { normal: { color: 'rgb(9,24,150)' } },
          value: 1
        },
        {
          name: 'Jwt',
          textStyle: { normal: { color: 'rgb(86,140,95)' } },
          value: 1
        },
        {
          name: 'Deeplearn',
          textStyle: { normal: { color: 'rgb(149,32,106)' } },
          value: 1
        },
        {
          name: '读懂',
          textStyle: { normal: { color: 'rgb(136,144,90)' } },
          value: 10
        },
        {
          name: 'AutoML',
          textStyle: { normal: { color: 'rgb(97,62,90)' } },
          value: 3
        },
        {
          name: '临',
          textStyle: { normal: { color: 'rgb(27,103,9)' } },
          value: 1
        },
        {
          name: '几是',
          textStyle: { normal: { color: 'rgb(56,49,97)' } },
          value: 1
        },
        {
          name: '起飞',
          textStyle: { normal: { color: 'rgb(44,82,60)' } },
          value: 1
        },
        {
          name: '已死',
          textStyle: { normal: { color: 'rgb(68,43,50)' } },
          value: 1
        },
        {
          name: 'Next',
          textStyle: { normal: { color: 'rgb(75,152,153)' } },
          value: 4
        },
        {
          name: '大量',
          textStyle: { normal: { color: 'rgb(9,103,155)' } },
          value: 3
        },
        {
          name: '内存大小',
          textStyle: { normal: { color: 'rgb(99,3,58)' } },
          value: 1
        },
        {
          name: '质量',
          textStyle: { normal: { color: 'rgb(140,43,82)' } },
          value: 7
        },
        {
          name: '对',
          textStyle: { normal: { color: 'rgb(18,38,78)' } },
          value: 4
        },
        {
          name: '硬伤',
          textStyle: { normal: { color: 'rgb(52,82,126)' } },
          value: 1
        },
        {
          name: '中科院',
          textStyle: { normal: { color: 'rgb(149,67,105)' } },
          value: 1
        },
        {
          name: '无损压缩',
          textStyle: { normal: { color: 'rgb(142,42,59)' } },
          value: 1
        },
        {
          name: '视频',
          textStyle: { normal: { color: 'rgb(109,65,132)' } },
          value: 20
        },
        {
          name: '也',
          textStyle: { normal: { color: 'rgb(73,145,99)' } },
          value: 14
        },
        {
          name: '3.4',
          textStyle: { normal: { color: 'rgb(39,113,4)' } },
          value: 1
        },
        {
          name: 'ops',
          textStyle: { normal: { color: 'rgb(113,84,68)' } },
          value: 5
        },
        {
          name: '李飞',
          textStyle: { normal: { color: 'rgb(152,101,65)' } },
          value: 1
        },
        {
          name: '来自',
          textStyle: { normal: { color: 'rgb(34,127,59)' } },
          value: 7
        },
        {
          name: '155',
          textStyle: { normal: { color: 'rgb(65,77,139)' } },
          value: 1
        },
        {
          name: 'Cluster',
          textStyle: { normal: { color: 'rgb(24,43,85)' } },
          value: 2
        },
        {
          name: '这么',
          textStyle: { normal: { color: 'rgb(122,156,31)' } },
          value: 3
        },
        {
          name: '羊毛',
          textStyle: { normal: { color: 'rgb(139,36,149)' } },
          value: 1
        },
        {
          name: '盘点',
          textStyle: { normal: { color: 'rgb(42,145,104)' } },
          value: 9
        },
        {
          name: '组队',
          textStyle: { normal: { color: 'rgb(96,60,158)' } },
          value: 1
        },
        {
          name: 'Darkon',
          textStyle: { normal: { color: 'rgb(153,25,109)' } },
          value: 1
        },
        {
          name: 'surprise',
          textStyle: { normal: { color: 'rgb(149,70,137)' } },
          value: 1
        },
        {
          name: 'a',
          textStyle: { normal: { color: 'rgb(48,49,95)' } },
          value: 9
        },
        {
          name: 'Nvidia',
          textStyle: { normal: { color: 'rgb(105,22,123)' } },
          value: 1
        },
        {
          name: '开发方法',
          textStyle: { normal: { color: 'rgb(49,5,26)' } },
          value: 1
        },
        {
          name: '4000W',
          textStyle: { normal: { color: 'rgb(86,136,128)' } },
          value: 1
        },
        {
          name: '实践',
          textStyle: { normal: { color: 'rgb(89,43,99)' } },
          value: 110
        },
        {
          name: '编辑',
          textStyle: { normal: { color: 'rgb(20,9,101)' } },
          value: 5
        },
        {
          name: '进度条',
          textStyle: { normal: { color: 'rgb(105,37,149)' } },
          value: 1
        },
        {
          name: '重写',
          textStyle: { normal: { color: 'rgb(51,14,33)' } },
          value: 4
        },
        {
          name: '进阶',
          textStyle: { normal: { color: 'rgb(127,135,98)' } },
          value: 6
        },
        {
          name: '以上',
          textStyle: { normal: { color: 'rgb(40,60,81)' } },
          value: 12
        },
        {
          name: '博客',
          textStyle: { normal: { color: 'rgb(128,23,148)' } },
          value: 12
        },
        {
          name: '非线性',
          textStyle: { normal: { color: 'rgb(130,44,142)' } },
          value: 1
        },
        {
          name: '脱单',
          textStyle: { normal: { color: 'rgb(109,7,78)' } },
          value: 1
        },
        {
          name: '管理工具',
          textStyle: { normal: { color: 'rgb(93,84,17)' } },
          value: 1
        },
        {
          name: 'IP地址',
          textStyle: { normal: { color: 'rgb(127,41,34)' } },
          value: 1
        },
        {
          name: '变换',
          textStyle: { normal: { color: 'rgb(129,145,87)' } },
          value: 1
        },
        {
          name: '通用',
          textStyle: { normal: { color: 'rgb(43,133,89)' } },
          value: 6
        },
        {
          name: '流程图',
          textStyle: { normal: { color: 'rgb(51,40,105)' } },
          value: 1
        },
        {
          name: '及其',
          textStyle: { normal: { color: 'rgb(119,114,148)' } },
          value: 7
        },
        {
          name: 'Mask',
          textStyle: { normal: { color: 'rgb(30,155,71)' } },
          value: 2
        },
        {
          name: '绑定',
          textStyle: { normal: { color: 'rgb(133,149,135)' } },
          value: 3
        },
        {
          name: '她',
          textStyle: { normal: { color: 'rgb(64,107,43)' } },
          value: 3
        },
        {
          name: 'Logistic',
          textStyle: { normal: { color: 'rgb(149,65,53)' } },
          value: 3
        },
        {
          name: 'IO',
          textStyle: { normal: { color: 'rgb(152,22,114)' } },
          value: 2
        },
        {
          name: '第一名',
          textStyle: { normal: { color: 'rgb(123,75,10)' } },
          value: 1
        },
        {
          name: '具有',
          textStyle: { normal: { color: 'rgb(66,31,12)' } },
          value: 1
        },
        {
          name: '化',
          textStyle: { normal: { color: 'rgb(32,91,74)' } },
          value: 28
        },
        {
          name: 'Bumpover',
          textStyle: { normal: { color: 'rgb(108,106,52)' } },
          value: 1
        },
        {
          name: 'Webpack',
          textStyle: { normal: { color: 'rgb(81,17,91)' } },
          value: 27
        },
        {
          name: '记',
          textStyle: { normal: { color: 'rgb(133,88,36)' } },
          value: 10
        },
        {
          name: '通道',
          textStyle: { normal: { color: 'rgb(130,29,127)' } },
          value: 1
        },
        {
          name: 'Rebalance',
          textStyle: { normal: { color: 'rgb(86,143,68)' } },
          value: 1
        },
        {
          name: '基石',
          textStyle: { normal: { color: 'rgb(144,126,75)' } },
          value: 2
        },
        {
          name: '部分',
          textStyle: { normal: { color: 'rgb(45,144,74)' } },
          value: 21
        },
        {
          name: '定档',
          textStyle: { normal: { color: 'rgb(145,10,74)' } },
          value: 4
        },
        {
          name: '开发工具',
          textStyle: { normal: { color: 'rgb(157,55,122)' } },
          value: 11
        },
        {
          name: 'youtube',
          textStyle: { normal: { color: 'rgb(32,59,78)' } },
          value: 1
        },
        {
          name: 'Cocos2d',
          textStyle: { normal: { color: 'rgb(114,89,137)' } },
          value: 3
        },
        {
          name: '博士',
          textStyle: { normal: { color: 'rgb(29,118,52)' } },
          value: 2
        },
        {
          name: '知道',
          textStyle: { normal: { color: 'rgb(105,34,74)' } },
          value: 26
        },
        {
          name: '环境变量',
          textStyle: { normal: { color: 'rgb(127,108,62)' } },
          value: 4
        },
        {
          name: '不止',
          textStyle: { normal: { color: 'rgb(93,85,148)' } },
          value: 1
        },
        {
          name: 'Dropdown',
          textStyle: { normal: { color: 'rgb(55,139,31)' } },
          value: 1
        },
        {
          name: 'MCMC',
          textStyle: { normal: { color: 'rgb(80,139,136)' } },
          value: 1
        },
        {
          name: '状态',
          textStyle: { normal: { color: 'rgb(117,80,109)' } },
          value: 3
        },
        {
          name: '功守道',
          textStyle: { normal: { color: 'rgb(92,21,160)' } },
          value: 1
        },
        {
          name: '跳坑',
          textStyle: { normal: { color: 'rgb(40,49,26)' } },
          value: 4
        },
        {
          name: '现代',
          textStyle: { normal: { color: 'rgb(62,133,28)' } },
          value: 3
        },
        {
          name: '教科书',
          textStyle: { normal: { color: 'rgb(67,103,114)' } },
          value: 2
        },
        {
          name: '手机',
          textStyle: { normal: { color: 'rgb(102,137,51)' } },
          value: 28
        },
        {
          name: '根据',
          textStyle: { normal: { color: 'rgb(96,140,62)' } },
          value: 1
        },
        {
          name: 'ID',
          textStyle: { normal: { color: 'rgb(151,153,12)' } },
          value: 5
        },
        {
          name: '看法',
          textStyle: { normal: { color: 'rgb(116,73,136)' } },
          value: 1
        },
        {
          name: '全功能',
          textStyle: { normal: { color: 'rgb(136,103,45)' } },
          value: 1
        },
        {
          name: '自动机',
          textStyle: { normal: { color: 'rgb(157,118,150)' } },
          value: 3
        },
        {
          name: 'Token',
          textStyle: { normal: { color: 'rgb(39,122,61)' } },
          value: 4
        },
        {
          name: '拉勾',
          textStyle: { normal: { color: 'rgb(93,127,33)' } },
          value: 1
        },
        {
          name: '份',
          textStyle: { normal: { color: 'rgb(142,54,131)' } },
          value: 2
        },
        {
          name: '重留',
          textStyle: { normal: { color: 'rgb(97,126,19)' } },
          value: 1
        },
        {
          name: '镜像',
          textStyle: { normal: { color: 'rgb(80,146,35)' } },
          value: 4
        },
        {
          name: '掘金',
          textStyle: { normal: { color: 'rgb(114,22,110)' } },
          value: 18
        },
        {
          name: 'Demo',
          textStyle: { normal: { color: 'rgb(152,128,146)' } },
          value: 24
        },
        {
          name: '底部',
          textStyle: { normal: { color: 'rgb(131,14,39)' } },
          value: 2
        },
        {
          name: '题',
          textStyle: { normal: { color: 'rgb(56,133,139)' } },
          value: 2
        },
        {
          name: '开发者',
          textStyle: { normal: { color: 'rgb(129,45,18)' } },
          value: 47
        },
        {
          name: '符合',
          textStyle: { normal: { color: 'rgb(98,136,40)' } },
          value: 1
        },
        {
          name: '完爆',
          textStyle: { normal: { color: 'rgb(151,30,33)' } },
          value: 3
        },
        {
          name: '波动',
          textStyle: { normal: { color: 'rgb(76,36,46)' } },
          value: 1
        },
        {
          name: 'vs',
          textStyle: { normal: { color: 'rgb(17,148,11)' } },
          value: 2
        },
        {
          name: '旧',
          textStyle: { normal: { color: 'rgb(104,29,150)' } },
          value: 1
        },
        {
          name: 'Raspberry3B',
          textStyle: { normal: { color: 'rgb(140,132,135)' } },
          value: 1
        },
        {
          name: '安卓',
          textStyle: { normal: { color: 'rgb(1,12,42)' } },
          value: 5
        },
        {
          name: 'deeplearn',
          textStyle: { normal: { color: 'rgb(8,156,118)' } },
          value: 2
        },
        {
          name: 'Request',
          textStyle: { normal: { color: 'rgb(98,115,51)' } },
          value: 1
        },
        {
          name: 'true',
          textStyle: { normal: { color: 'rgb(109,11,30)' } },
          value: 3
        },
        {
          name: '响应',
          textStyle: { normal: { color: 'rgb(111,100,19)' } },
          value: 6
        },
        {
          name: '展示',
          textStyle: { normal: { color: 'rgb(5,82,143)' } },
          value: 4
        },
        {
          name: '微博热评',
          textStyle: { normal: { color: 'rgb(84,155,134)' } },
          value: 1
        },
        {
          name: 'GIS',
          textStyle: { normal: { color: 'rgb(87,122,135)' } },
          value: 1
        },
        {
          name: 'TSLint',
          textStyle: { normal: { color: 'rgb(19,154,21)' } },
          value: 1
        },
        {
          name: '一二三',
          textStyle: { normal: { color: 'rgb(31,135,52)' } },
          value: 1
        },
        {
          name: '出错',
          textStyle: { normal: { color: 'rgb(14,128,54)' } },
          value: 3
        },
        {
          name: '远',
          textStyle: { normal: { color: 'rgb(109,73,134)' } },
          value: 1
        },
        {
          name: '证书',
          textStyle: { normal: { color: 'rgb(109,62,22)' } },
          value: 2
        },
        {
          name: '黄金',
          textStyle: { normal: { color: 'rgb(63,0,75)' } },
          value: 4
        },
        {
          name: 'SpringMVC',
          textStyle: { normal: { color: 'rgb(111,31,104)' } },
          value: 11
        },
        {
          name: '骗',
          textStyle: { normal: { color: 'rgb(137,34,144)' } },
          value: 1
        },
        {
          name: '翻倍',
          textStyle: { normal: { color: 'rgb(103,32,140)' } },
          value: 2
        },
        {
          name: 'Job',
          textStyle: { normal: { color: 'rgb(2,151,83)' } },
          value: 5
        },
        {
          name: '谈',
          textStyle: { normal: { color: 'rgb(83,142,9)' } },
          value: 1
        },
        {
          name: '数独',
          textStyle: { normal: { color: 'rgb(16,10,89)' } },
          value: 1
        },
        {
          name: 'RNN',
          textStyle: { normal: { color: 'rgb(110,142,0)' } },
          value: 5
        },
        {
          name: '推断',
          textStyle: { normal: { color: 'rgb(104,3,136)' } },
          value: 6
        },
        {
          name: '同构',
          textStyle: { normal: { color: 'rgb(105,65,45)' } },
          value: 1
        },
        {
          name: 'CuDNN',
          textStyle: { normal: { color: 'rgb(11,22,68)' } },
          value: 1
        },
        {
          name: '隐蔽',
          textStyle: { normal: { color: 'rgb(33,26,138)' } },
          value: 1
        },
        {
          name: '火爆',
          textStyle: { normal: { color: 'rgb(47,140,159)' } },
          value: 2
        },
        {
          name: '抓取',
          textStyle: { normal: { color: 'rgb(18,154,26)' } },
          value: 7
        },
        {
          name: '演算',
          textStyle: { normal: { color: 'rgb(14,109,87)' } },
          value: 1
        },
        {
          name: '不利',
          textStyle: { normal: { color: 'rgb(2,148,124)' } },
          value: 1
        },
        {
          name: '优先级',
          textStyle: { normal: { color: 'rgb(114,160,96)' } },
          value: 1
        },
        {
          name: '暴露',
          textStyle: { normal: { color: 'rgb(89,33,52)' } },
          value: 1
        },
        {
          name: 'android',
          textStyle: { normal: { color: 'rgb(78,13,127)' } },
          value: 1
        },
        {
          name: 'ES5',
          textStyle: { normal: { color: 'rgb(41,87,72)' } },
          value: 2
        },
        {
          name: '排查',
          textStyle: { normal: { color: 'rgb(147,20,124)' } },
          value: 2
        },
        {
          name: 'Train',
          textStyle: { normal: { color: 'rgb(102,115,147)' } },
          value: 2
        },
        {
          name: '查看',
          textStyle: { normal: { color: 'rgb(51,43,128)' } },
          value: 1
        },
        {
          name: '大规模',
          textStyle: { normal: { color: 'rgb(57,40,111)' } },
          value: 3
        },
        {
          name: 'property',
          textStyle: { normal: { color: 'rgb(46,17,62)' } },
          value: 1
        },
        {
          name: '异常情况',
          textStyle: { normal: { color: 'rgb(54,157,52)' } },
          value: 1
        },
        {
          name: 'Value',
          textStyle: { normal: { color: 'rgb(119,159,58)' } },
          value: 3
        },
        {
          name: '演讲',
          textStyle: { normal: { color: 'rgb(10,52,38)' } },
          value: 8
        },
        {
          name: '所有',
          textStyle: { normal: { color: 'rgb(65,4,96)' } },
          value: 5
        },
        {
          name: '002',
          textStyle: { normal: { color: 'rgb(87,144,31)' } },
          value: 1
        },
        {
          name: '这',
          textStyle: { normal: { color: 'rgb(104,155,81)' } },
          value: 23
        },
        {
          name: '赶上',
          textStyle: { normal: { color: 'rgb(89,92,75)' } },
          value: 1
        },
        {
          name: '跟着',
          textStyle: { normal: { color: 'rgb(25,53,60)' } },
          value: 1
        },
        {
          name: '已',
          textStyle: { normal: { color: 'rgb(18,141,136)' } },
          value: 7
        },
        {
          name: '动态效果',
          textStyle: { normal: { color: 'rgb(43,19,158)' } },
          value: 1
        },
        {
          name: '扫码',
          textStyle: { normal: { color: 'rgb(84,111,101)' } },
          value: 2
        },
        {
          name: 'NLP',
          textStyle: { normal: { color: 'rgb(107,75,46)' } },
          value: 14
        },
        {
          name: 'GSIL',
          textStyle: { normal: { color: 'rgb(40,132,117)' } },
          value: 1
        },
        {
          name: '力作',
          textStyle: { normal: { color: 'rgb(157,87,66)' } },
          value: 1
        },
        {
          name: '美国',
          textStyle: { normal: { color: 'rgb(64,94,11)' } },
          value: 3
        },
        {
          name: 'LuLu',
          textStyle: { normal: { color: 'rgb(23,150,10)' } },
          value: 2
        },
        {
          name: 'SDK',
          textStyle: { normal: { color: 'rgb(102,147,101)' } },
          value: 3
        },
        {
          name: 'Callable',
          textStyle: { normal: { color: 'rgb(86,13,157)' } },
          value: 1
        },
        {
          name: '书',
          textStyle: { normal: { color: 'rgb(69,50,144)' } },
          value: 3
        },
        {
          name: 'Ant',
          textStyle: { normal: { color: 'rgb(81,22,116)' } },
          value: 2
        },
        {
          name: '小记',
          textStyle: { normal: { color: 'rgb(97,88,42)' } },
          value: 1
        },
        {
          name: '码',
          textStyle: { normal: { color: 'rgb(88,31,60)' } },
          value: 4
        },
        {
          name: 'Kubernetes',
          textStyle: { normal: { color: 'rgb(125,106,81)' } },
          value: 4
        },
        {
          name: '张鑫旭',
          textStyle: { normal: { color: 'rgb(5,128,126)' } },
          value: 1
        },
        {
          name: '打开方式',
          textStyle: { normal: { color: 'rgb(64,159,75)' } },
          value: 1
        },
        {
          name: '一键',
          textStyle: { normal: { color: 'rgb(116,132,43)' } },
          value: 3
        },
        {
          name: '身份验证',
          textStyle: { normal: { color: 'rgb(57,88,102)' } },
          value: 2
        },
        {
          name: 'dump',
          textStyle: { normal: { color: 'rgb(105,67,59)' } },
          value: 1
        },
        {
          name: '共生体',
          textStyle: { normal: { color: 'rgb(77,94,14)' } },
          value: 1
        },
        {
          name: '看中',
          textStyle: { normal: { color: 'rgb(81,77,98)' } },
          value: 1
        },
        {
          name: '过来',
          textStyle: { normal: { color: 'rgb(85,2,88)' } },
          value: 1
        },
        {
          name: '网络层',
          textStyle: { normal: { color: 'rgb(29,63,81)' } },
          value: 1
        },
        {
          name: '操作符',
          textStyle: { normal: { color: 'rgb(117,19,105)' } },
          value: 2
        },
        {
          name: '区块',
          textStyle: { normal: { color: 'rgb(35,65,52)' } },
          value: 6
        },
        {
          name: '盒马',
          textStyle: { normal: { color: 'rgb(35,132,28)' } },
          value: 1
        },
        {
          name: '自主',
          textStyle: { normal: { color: 'rgb(58,130,4)' } },
          value: 1
        },
        {
          name: '红',
          textStyle: { normal: { color: 'rgb(76,129,118)' } },
          value: 1
        },
        {
          name: 'ELSE',
          textStyle: { normal: { color: 'rgb(126,142,7)' } },
          value: 1
        },
        {
          name: 'AI',
          textStyle: { normal: { color: 'rgb(111,96,126)' } },
          value: 70
        },
        {
          name: '插件',
          textStyle: { normal: { color: 'rgb(29,9,39)' } },
          value: 36
        },
        {
          name: 'FM',
          textStyle: { normal: { color: 'rgb(37,160,114)' } },
          value: 1
        },
        {
          name: '增量',
          textStyle: { normal: { color: 'rgb(124,115,107)' } },
          value: 2
        },
        {
          name: '来看',
          textStyle: { normal: { color: 'rgb(7,46,82)' } },
          value: 2
        },
        {
          name: '保存',
          textStyle: { normal: { color: 'rgb(135,23,79)' } },
          value: 2
        },
        {
          name: '高度',
          textStyle: { normal: { color: 'rgb(91,45,99)' } },
          value: 1
        },
        {
          name: '合成',
          textStyle: { normal: { color: 'rgb(3,156,8)' } },
          value: 1
        },
        {
          name: '美化',
          textStyle: { normal: { color: 'rgb(39,8,131)' } },
          value: 1
        },
        {
          name: 'Initial',
          textStyle: { normal: { color: 'rgb(26,112,19)' } },
          value: 1
        },
        {
          name: '2.3',
          textStyle: { normal: { color: 'rgb(64,18,0)' } },
          value: 1
        },
        {
          name: '受到',
          textStyle: { normal: { color: 'rgb(113,91,1)' } },
          value: 1
        },
        {
          name: '2016',
          textStyle: { normal: { color: 'rgb(125,56,157)' } },
          value: 4
        },
        {
          name: 'Mesos',
          textStyle: { normal: { color: 'rgb(66,48,150)' } },
          value: 1
        },
        {
          name: '感悟',
          textStyle: { normal: { color: 'rgb(22,160,128)' } },
          value: 1
        },
        {
          name: '戳破',
          textStyle: { normal: { color: 'rgb(83,4,98)' } },
          value: 1
        },
        {
          name: 'me',
          textStyle: { normal: { color: 'rgb(62,93,27)' } },
          value: 1
        },
        {
          name: '小点心',
          textStyle: { normal: { color: 'rgb(80,4,140)' } },
          value: 2
        },
        {
          name: 'LSTM',
          textStyle: { normal: { color: 'rgb(25,44,69)' } },
          value: 1
        },
        {
          name: '岭',
          textStyle: { normal: { color: 'rgb(40,115,154)' } },
          value: 2
        },
        {
          name: 'Lamda',
          textStyle: { normal: { color: 'rgb(131,159,89)' } },
          value: 1
        },
        {
          name: '追查',
          textStyle: { normal: { color: 'rgb(104,149,33)' } },
          value: 1
        },
        {
          name: '深',
          textStyle: { normal: { color: 'rgb(24,13,77)' } },
          value: 4
        },
        {
          name: 'A',
          textStyle: { normal: { color: 'rgb(19,149,120)' } },
          value: 3
        },
        {
          name: 'OCR',
          textStyle: { normal: { color: 'rgb(130,132,150)' } },
          value: 1
        },
        {
          name: '自动',
          textStyle: { normal: { color: 'rgb(113,60,34)' } },
          value: 25
        },
        {
          name: '切换',
          textStyle: { normal: { color: 'rgb(34,29,61)' } },
          value: 3
        },
        {
          name: '版本',
          textStyle: { normal: { color: 'rgb(141,44,104)' } },
          value: 9
        },
        {
          name: '30s',
          textStyle: { normal: { color: 'rgb(101,130,66)' } },
          value: 1
        },
        {
          name: 'kotlin',
          textStyle: { normal: { color: 'rgb(65,85,16)' } },
          value: 1
        },
        {
          name: '网贷',
          textStyle: { normal: { color: 'rgb(138,101,12)' } },
          value: 1
        },
        {
          name: '起手式',
          textStyle: { normal: { color: 'rgb(69,41,16)' } },
          value: 1
        },
        {
          name: '人机',
          textStyle: { normal: { color: 'rgb(111,85,71)' } },
          value: 1
        },
        {
          name: '链表',
          textStyle: { normal: { color: 'rgb(153,140,72)' } },
          value: 1
        },
        {
          name: '星际争霸',
          textStyle: { normal: { color: 'rgb(95,125,112)' } },
          value: 1
        },
        {
          name: '文本编辑',
          textStyle: { normal: { color: 'rgb(143,48,10)' } },
          value: 6
        },
        {
          name: 's',
          textStyle: { normal: { color: 'rgb(74,83,23)' } },
          value: 1
        },
        {
          name: '马尔可夫',
          textStyle: { normal: { color: 'rgb(135,130,18)' } },
          value: 2
        },
        {
          name: '一统',
          textStyle: { normal: { color: 'rgb(107,53,33)' } },
          value: 1
        },
        {
          name: 'DispatcherServlet',
          textStyle: { normal: { color: 'rgb(150,31,53)' } },
          value: 2
        },
        {
          name: '用谷歌',
          textStyle: { normal: { color: 'rgb(117,63,113)' } },
          value: 1
        },
        {
          name: 'with',
          textStyle: { normal: { color: 'rgb(69,63,100)' } },
          value: 1
        },
        {
          name: '下降',
          textStyle: { normal: { color: 'rgb(155,98,37)' } },
          value: 3
        },
        {
          name: '抽奖',
          textStyle: { normal: { color: 'rgb(24,80,71)' } },
          value: 2
        },
        {
          name: '简历',
          textStyle: { normal: { color: 'rgb(120,127,16)' } },
          value: 2
        },
        {
          name: '整',
          textStyle: { normal: { color: 'rgb(14,131,102)' } },
          value: 1
        },
        {
          name: 'OAuth2',
          textStyle: { normal: { color: 'rgb(101,43,51)' } },
          value: 6
        },
        {
          name: '第一次',
          textStyle: { normal: { color: 'rgb(61,64,135)' } },
          value: 2
        },
        {
          name: '特效',
          textStyle: { normal: { color: 'rgb(46,133,99)' } },
          value: 1
        },
        {
          name: '搅动',
          textStyle: { normal: { color: 'rgb(136,160,84)' } },
          value: 4
        },
        {
          name: 'Proxy',
          textStyle: { normal: { color: 'rgb(4,73,87)' } },
          value: 3
        },
        {
          name: '无痛',
          textStyle: { normal: { color: 'rgb(95,87,80)' } },
          value: 3
        },
        {
          name: '测试环境',
          textStyle: { normal: { color: 'rgb(24,33,51)' } },
          value: 1
        },
        {
          name: 'DockerHub',
          textStyle: { normal: { color: 'rgb(153,104,67)' } },
          value: 1
        },
        {
          name: 'Sampling',
          textStyle: { normal: { color: 'rgb(92,96,28)' } },
          value: 1
        },
        {
          name: '外挂',
          textStyle: { normal: { color: 'rgb(20,38,117)' } },
          value: 4
        },
        {
          name: '脑洞',
          textStyle: { normal: { color: 'rgb(128,134,50)' } },
          value: 1
        },
        {
          name: '余凯',
          textStyle: { normal: { color: 'rgb(131,124,35)' } },
          value: 1
        },
        {
          name: '分层',
          textStyle: { normal: { color: 'rgb(80,37,67)' } },
          value: 2
        },
        {
          name: 'linked',
          textStyle: { normal: { color: 'rgb(133,37,152)' } },
          value: 1
        },
        {
          name: '抽象',
          textStyle: { normal: { color: 'rgb(128,65,9)' } },
          value: 1
        },
        {
          name: '网址',
          textStyle: { normal: { color: 'rgb(55,116,24)' } },
          value: 2
        },
        {
          name: 'root',
          textStyle: { normal: { color: 'rgb(1,125,54)' } },
          value: 1
        },
        {
          name: '是否',
          textStyle: { normal: { color: 'rgb(48,119,7)' } },
          value: 8
        },
        {
          name: 'koa',
          textStyle: { normal: { color: 'rgb(136,160,145)' } },
          value: 4
        },
        {
          name: 'Elastic',
          textStyle: { normal: { color: 'rgb(97,80,25)' } },
          value: 9
        },
        {
          name: '三',
          textStyle: { normal: { color: 'rgb(25,96,156)' } },
          value: 32
        },
        {
          name: '大全',
          textStyle: { normal: { color: 'rgb(96,141,39)' } },
          value: 11
        },
        {
          name: '想',
          textStyle: { normal: { color: 'rgb(9,33,104)' } },
          value: 5
        },
        {
          name: '搜索引擎',
          textStyle: { normal: { color: 'rgb(83,2,99)' } },
          value: 3
        },
        {
          name: '了',
          textStyle: { normal: { color: 'rgb(54,89,23)' } },
          value: 139
        },
        {
          name: 'Md2All',
          textStyle: { normal: { color: 'rgb(74,13,63)' } },
          value: 1
        },
        {
          name: 'Compose',
          textStyle: { normal: { color: 'rgb(128,121,160)' } },
          value: 1
        },
        {
          name: '关于',
          textStyle: { normal: { color: 'rgb(35,102,19)' } },
          value: 29
        },
        {
          name: '史上',
          textStyle: { normal: { color: 'rgb(147,68,63)' } },
          value: 4
        },
        {
          name: 'Blockchain',
          textStyle: { normal: { color: 'rgb(52,45,123)' } },
          value: 2
        },
        {
          name: '鹿死谁手',
          textStyle: { normal: { color: 'rgb(82,154,114)' } },
          value: 4
        },
        {
          name: '知乎',
          textStyle: { normal: { color: 'rgb(135,155,51)' } },
          value: 9
        },
        {
          name: '速度',
          textStyle: { normal: { color: 'rgb(30,72,137)' } },
          value: 6
        },
        {
          name: '轮子',
          textStyle: { normal: { color: 'rgb(87,139,146)' } },
          value: 4
        },
        {
          name: '遵循',
          textStyle: { normal: { color: 'rgb(14,61,10)' } },
          value: 1
        },
        {
          name: '避让',
          textStyle: { normal: { color: 'rgb(30,89,145)' } },
          value: 1
        },
        {
          name: '进入',
          textStyle: { normal: { color: 'rgb(13,32,42)' } },
          value: 2
        },
        {
          name: 'Springboot',
          textStyle: { normal: { color: 'rgb(123,95,135)' } },
          value: 1
        },
        {
          name: '解决',
          textStyle: { normal: { color: 'rgb(5,49,134)' } },
          value: 18
        },
        {
          name: 'ReactNative',
          textStyle: { normal: { color: 'rgb(52,127,30)' } },
          value: 1
        },
        {
          name: 'CIFAR',
          textStyle: { normal: { color: 'rgb(121,80,29)' } },
          value: 1
        },
        {
          name: '统计',
          textStyle: { normal: { color: 'rgb(152,113,138)' } },
          value: 6
        },
        {
          name: '异步',
          textStyle: { normal: { color: 'rgb(134,93,79)' } },
          value: 20
        },
        {
          name: '参与',
          textStyle: { normal: { color: 'rgb(160,109,114)' } },
          value: 1
        },
        {
          name: '宣布',
          textStyle: { normal: { color: 'rgb(121,153,29)' } },
          value: 4
        },
        {
          name: '难',
          textStyle: { normal: { color: 'rgb(31,12,24)' } },
          value: 3
        },
        {
          name: '花来',
          textStyle: { normal: { color: 'rgb(3,9,57)' } },
          value: 4
        },
        {
          name: '认证',
          textStyle: { normal: { color: 'rgb(143,44,108)' } },
          value: 5
        },
        {
          name: '抓',
          textStyle: { normal: { color: 'rgb(125,55,123)' } },
          value: 2
        },
        {
          name: '信息论',
          textStyle: { normal: { color: 'rgb(144,102,100)' } },
          value: 1
        },
        {
          name: 'CSV',
          textStyle: { normal: { color: 'rgb(5,48,0)' } },
          value: 1
        },
        {
          name: '分钟',
          textStyle: { normal: { color: 'rgb(123,59,108)' } },
          value: 12
        },
        {
          name: '单层',
          textStyle: { normal: { color: 'rgb(160,57,68)' } },
          value: 1
        },
        {
          name: '非',
          textStyle: { normal: { color: 'rgb(68,20,55)' } },
          value: 2
        },
        {
          name: '性能',
          textStyle: { normal: { color: 'rgb(94,41,98)' } },
          value: 40
        },
        {
          name: '权威',
          textStyle: { normal: { color: 'rgb(151,124,82)' } },
          value: 1
        },
        {
          name: '整洁',
          textStyle: { normal: { color: 'rgb(17,16,136)' } },
          value: 1
        },
        {
          name: 'Hints',
          textStyle: { normal: { color: 'rgb(141,30,6)' } },
          value: 1
        },
        {
          name: '套件',
          textStyle: { normal: { color: 'rgb(110,108,134)' } },
          value: 1
        },
        {
          name: '绝地',
          textStyle: { normal: { color: 'rgb(36,32,104)' } },
          value: 1
        },
        {
          name: 'zookeeper',
          textStyle: { normal: { color: 'rgb(24,99,123)' } },
          value: 2
        },
        {
          name: 'Servlet',
          textStyle: { normal: { color: 'rgb(156,144,68)' } },
          value: 10
        },
        {
          name: '50',
          textStyle: { normal: { color: 'rgb(138,12,70)' } },
          value: 1
        },
        {
          name: 'xlite',
          textStyle: { normal: { color: 'rgb(60,69,91)' } },
          value: 1
        },
        {
          name: 'XSwitch',
          textStyle: { normal: { color: 'rgb(30,13,46)' } },
          value: 1
        },
        {
          name: '浮现',
          textStyle: { normal: { color: 'rgb(64,115,136)' } },
          value: 1
        },
        {
          name: '高考',
          textStyle: { normal: { color: 'rgb(110,115,129)' } },
          value: 1
        },
        {
          name: 'avatar',
          textStyle: { normal: { color: 'rgb(55,147,57)' } },
          value: 1
        },
        {
          name: '集合',
          textStyle: { normal: { color: 'rgb(28,98,34)' } },
          value: 15
        },
        {
          name: 'InnoDB',
          textStyle: { normal: { color: 'rgb(154,109,95)' } },
          value: 1
        },
        {
          name: '巨大',
          textStyle: { normal: { color: 'rgb(14,31,105)' } },
          value: 1
        },
        {
          name: '之间',
          textStyle: { normal: { color: 'rgb(139,121,10)' } },
          value: 1
        },
        {
          name: 'FireFox',
          textStyle: { normal: { color: 'rgb(106,84,47)' } },
          value: 1
        },
        {
          name: '双环',
          textStyle: { normal: { color: 'rgb(103,56,137)' } },
          value: 1
        },
        {
          name: '程序',
          textStyle: { normal: { color: 'rgb(157,114,33)' } },
          value: 439
        },
        {
          name: '类型',
          textStyle: { normal: { color: 'rgb(90,1,154)' } },
          value: 5
        },
        {
          name: '炼成',
          textStyle: { normal: { color: 'rgb(134,5,36)' } },
          value: 3
        },
        {
          name: '清洗',
          textStyle: { normal: { color: 'rgb(64,16,125)' } },
          value: 1
        },
        {
          name: '清华',
          textStyle: { normal: { color: 'rgb(86,31,137)' } },
          value: 2
        },
        {
          name: '流量',
          textStyle: { normal: { color: 'rgb(157,3,47)' } },
          value: 3
        },
        {
          name: '两年',
          textStyle: { normal: { color: 'rgb(143,57,96)' } },
          value: 2
        },
        {
          name: '红利',
          textStyle: { normal: { color: 'rgb(65,100,48)' } },
          value: 5
        },
        {
          name: 'dubbo',
          textStyle: { normal: { color: 'rgb(99,52,80)' } },
          value: 2
        },
        {
          name: '下',
          textStyle: { normal: { color: 'rgb(38,46,78)' } },
          value: 27
        },
        {
          name: '解析',
          textStyle: { normal: { color: 'rgb(135,51,139)' } },
          value: 63
        },
        {
          name: 'B',
          textStyle: { normal: { color: 'rgb(115,62,20)' } },
          value: 4
        },
        {
          name: '子',
          textStyle: { normal: { color: 'rgb(127,130,74)' } },
          value: 3
        },
        {
          name: '玩家',
          textStyle: { normal: { color: 'rgb(70,28,6)' } },
          value: 1
        },
        {
          name: '滑动',
          textStyle: { normal: { color: 'rgb(160,139,3)' } },
          value: 2
        },
        {
          name: '有用',
          textStyle: { normal: { color: 'rgb(49,142,53)' } },
          value: 1
        },
        {
          name: '体验版',
          textStyle: { normal: { color: 'rgb(88,128,78)' } },
          value: 3
        },
        {
          name: 'prototype',
          textStyle: { normal: { color: 'rgb(7,24,127)' } },
          value: 2
        },
        {
          name: 'Pytorch',
          textStyle: { normal: { color: 'rgb(66,54,69)' } },
          value: 2
        },
        {
          name: '大众',
          textStyle: { normal: { color: 'rgb(17,135,151)' } },
          value: 5
        },
        {
          name: 'Sticky',
          textStyle: { normal: { color: 'rgb(75,30,18)' } },
          value: 1
        },
        {
          name: '策略',
          textStyle: { normal: { color: 'rgb(100,100,80)' } },
          value: 14
        },
        {
          name: '参数',
          textStyle: { normal: { color: 'rgb(125,56,86)' } },
          value: 8
        },
        {
          name: 'OpenCV',
          textStyle: { normal: { color: 'rgb(54,58,40)' } },
          value: 4
        },
        {
          name: 'Lombok',
          textStyle: { normal: { color: 'rgb(83,61,52)' } },
          value: 1
        },
        {
          name: '特殊效果',
          textStyle: { normal: { color: 'rgb(2,50,5)' } },
          value: 4
        },
        {
          name: '转折',
          textStyle: { normal: { color: 'rgb(140,63,148)' } },
          value: 1
        },
        {
          name: '栈',
          textStyle: { normal: { color: 'rgb(65,29,157)' } },
          value: 7
        },
        {
          name: '歌曲',
          textStyle: { normal: { color: 'rgb(53,88,119)' } },
          value: 3
        },
        {
          name: 'Cloud',
          textStyle: { normal: { color: 'rgb(14,10,126)' } },
          value: 18
        },
        {
          name: 'U',
          textStyle: { normal: { color: 'rgb(38,110,36)' } },
          value: 1
        },
        {
          name: '价格',
          textStyle: { normal: { color: 'rgb(34,147,123)' } },
          value: 1
        },
        {
          name: '持久',
          textStyle: { normal: { color: 'rgb(77,13,30)' } },
          value: 3
        },
        {
          name: '神奇',
          textStyle: { normal: { color: 'rgb(131,44,6)' } },
          value: 4
        },
        {
          name: 'pprof',
          textStyle: { normal: { color: 'rgb(160,28,82)' } },
          value: 1
        },
        {
          name: '表格',
          textStyle: { normal: { color: 'rgb(128,137,50)' } },
          value: 7
        },
        {
          name: 'Let',
          textStyle: { normal: { color: 'rgb(116,58,128)' } },
          value: 1
        },
        {
          name: '这是',
          textStyle: { normal: { color: 'rgb(120,152,140)' } },
          value: 1
        },
        {
          name: '预知',
          textStyle: { normal: { color: 'rgb(154,150,117)' } },
          value: 1
        },
        {
          name: '来势凶猛',
          textStyle: { normal: { color: 'rgb(117,83,152)' } },
          value: 1
        },
        {
          name: '创意',
          textStyle: { normal: { color: 'rgb(125,4,111)' } },
          value: 6
        },
        {
          name: 'mobX',
          textStyle: { normal: { color: 'rgb(77,70,104)' } },
          value: 1
        },
        {
          name: '伪',
          textStyle: { normal: { color: 'rgb(156,140,55)' } },
          value: 1
        },
        {
          name: 'filter',
          textStyle: { normal: { color: 'rgb(3,144,28)' } },
          value: 4
        },
        {
          name: '99',
          textStyle: { normal: { color: 'rgb(148,17,147)' } },
          value: 1
        },
        {
          name: '内幕',
          textStyle: { normal: { color: 'rgb(157,87,59)' } },
          value: 2
        },
        {
          name: 'exclude',
          textStyle: { normal: { color: 'rgb(109,62,16)' } },
          value: 1
        },
        {
          name: '塑造',
          textStyle: { normal: { color: 'rgb(55,110,95)' } },
          value: 1
        },
        {
          name: '水平',
          textStyle: { normal: { color: 'rgb(47,134,13)' } },
          value: 6
        },
        {
          name: '弄懂',
          textStyle: { normal: { color: 'rgb(35,29,18)' } },
          value: 10
        },
        {
          name: 'WCDB',
          textStyle: { normal: { color: 'rgb(113,13,20)' } },
          value: 1
        },
        {
          name: '开端',
          textStyle: { normal: { color: 'rgb(140,71,11)' } },
          value: 1
        },
        {
          name: '两种',
          textStyle: { normal: { color: 'rgb(121,91,48)' } },
          value: 6
        },
        {
          name: '就是',
          textStyle: { normal: { color: 'rgb(70,107,79)' } },
          value: 3
        },
        {
          name: '之热',
          textStyle: { normal: { color: 'rgb(113,12,88)' } },
          value: 1
        },
        {
          name: '改版',
          textStyle: { normal: { color: 'rgb(41,112,80)' } },
          value: 4
        },
        {
          name: '很',
          textStyle: { normal: { color: 'rgb(137,26,138)' } },
          value: 5
        },
        {
          name: '款',
          textStyle: { normal: { color: 'rgb(47,138,25)' } },
          value: 4
        },
        {
          name: '惹',
          textStyle: { normal: { color: 'rgb(105,153,51)' } },
          value: 1
        },
        {
          name: 'align',
          textStyle: { normal: { color: 'rgb(80,93,58)' } },
          value: 1
        },
        {
          name: '起来',
          textStyle: { normal: { color: 'rgb(9,89,79)' } },
          value: 3
        },
        {
          name: 'Rust',
          textStyle: { normal: { color: 'rgb(99,158,70)' } },
          value: 1
        },
        {
          name: 'DOM',
          textStyle: { normal: { color: 'rgb(7,1,69)' } },
          value: 6
        },
        {
          name: '运维派',
          textStyle: { normal: { color: 'rgb(150,70,136)' } },
          value: 2
        },
        {
          name: '瞄准',
          textStyle: { normal: { color: 'rgb(124,59,73)' } },
          value: 1
        },
        {
          name: '播放',
          textStyle: { normal: { color: 'rgb(57,106,119)' } },
          value: 3
        },
        {
          name: '切割',
          textStyle: { normal: { color: 'rgb(74,105,160)' } },
          value: 2
        },
        {
          name: '展望',
          textStyle: { normal: { color: 'rgb(57,62,41)' } },
          value: 1
        },
        {
          name: '比赛',
          textStyle: { normal: { color: 'rgb(7,56,153)' } },
          value: 1
        },
        {
          name: '万美金',
          textStyle: { normal: { color: 'rgb(67,150,144)' } },
          value: 1
        },
        {
          name: '招满',
          textStyle: { normal: { color: 'rgb(8,146,103)' } },
          value: 1
        },
        {
          name: '薅',
          textStyle: { normal: { color: 'rgb(100,126,139)' } },
          value: 1
        },
        {
          name: '力挺',
          textStyle: { normal: { color: 'rgb(129,117,122)' } },
          value: 1
        },
        {
          name: '着',
          textStyle: { normal: { color: 'rgb(9,44,74)' } },
          value: 4
        },
        {
          name: 'scikit',
          textStyle: { normal: { color: 'rgb(147,0,114)' } },
          value: 2
        },
        {
          name: '录',
          textStyle: { normal: { color: 'rgb(148,110,52)' } },
          value: 1
        },
        {
          name: 't',
          textStyle: { normal: { color: 'rgb(67,83,131)' } },
          value: 1
        },
        {
          name: '抢到',
          textStyle: { normal: { color: 'rgb(78,65,7)' } },
          value: 2
        },
        {
          name: '斗智斗勇',
          textStyle: { normal: { color: 'rgb(115,28,84)' } },
          value: 1
        },
        {
          name: '竟',
          textStyle: { normal: { color: 'rgb(142,18,108)' } },
          value: 1
        },
        {
          name: '内地',
          textStyle: { normal: { color: 'rgb(6,126,88)' } },
          value: 1
        },
        {
          name: 'TypeScript',
          textStyle: { normal: { color: 'rgb(57,117,141)' } },
          value: 3
        },
        {
          name: 'Mysql',
          textStyle: { normal: { color: 'rgb(136,42,38)' } },
          value: 2
        },
        {
          name: '综述',
          textStyle: { normal: { color: 'rgb(78,86,91)' } },
          value: 3
        },
        {
          name: '一文',
          textStyle: { normal: { color: 'rgb(11,117,12)' } },
          value: 9
        },
        {
          name: '资深',
          textStyle: { normal: { color: 'rgb(97,26,36)' } },
          value: 1
        },
        {
          name: '氪',
          textStyle: { normal: { color: 'rgb(78,149,134)' } },
          value: 4
        },
        {
          name: 'Safari',
          textStyle: { normal: { color: 'rgb(60,66,77)' } },
          value: 2
        },
        {
          name: '面试',
          textStyle: { normal: { color: 'rgb(13,134,26)' } },
          value: 18
        },
        {
          name: '案例',
          textStyle: { normal: { color: 'rgb(18,91,156)' } },
          value: 5
        },
        {
          name: '摩拜',
          textStyle: { normal: { color: 'rgb(71,86,46)' } },
          value: 2
        },
        {
          name: '入门篇',
          textStyle: { normal: { color: 'rgb(102,108,70)' } },
          value: 1
        },
        {
          name: '治理',
          textStyle: { normal: { color: 'rgb(95,11,160)' } },
          value: 1
        },
        {
          name: '拥抱',
          textStyle: { normal: { color: 'rgb(54,12,18)' } },
          value: 2
        },
        {
          name: '架构图',
          textStyle: { normal: { color: 'rgb(33,86,104)' } },
          value: 1
        },
        {
          name: '或',
          textStyle: { normal: { color: 'rgb(89,143,107)' } },
          value: 1
        },
        {
          name: '打',
          textStyle: { normal: { color: 'rgb(116,122,101)' } },
          value: 2
        },
        {
          name: '极致',
          textStyle: { normal: { color: 'rgb(139,138,151)' } },
          value: 1
        },
        {
          name: '完整',
          textStyle: { normal: { color: 'rgb(110,105,99)' } },
          value: 17
        },
        {
          name: '阻止',
          textStyle: { normal: { color: 'rgb(57,68,16)' } },
          value: 2
        },
        {
          name: '绝好',
          textStyle: { normal: { color: 'rgb(133,22,31)' } },
          value: 1
        },
        {
          name: '技巧',
          textStyle: { normal: { color: 'rgb(36,117,1)' } },
          value: 21
        },
        {
          name: 'css3',
          textStyle: { normal: { color: 'rgb(101,127,95)' } },
          value: 4
        },
        {
          name: 'TCC',
          textStyle: { normal: { color: 'rgb(84,75,91)' } },
          value: 3
        },
        {
          name: '旧书',
          textStyle: { normal: { color: 'rgb(50,108,103)' } },
          value: 1
        },
        {
          name: '生态圈',
          textStyle: { normal: { color: 'rgb(88,22,63)' } },
          value: 5
        },
        {
          name: '一名',
          textStyle: { normal: { color: 'rgb(156,113,118)' } },
          value: 3
        },
        {
          name: '初体验',
          textStyle: { normal: { color: 'rgb(153,52,120)' } },
          value: 5
        },
        {
          name: 'GIT',
          textStyle: { normal: { color: 'rgb(120,30,98)' } },
          value: 1
        },
        {
          name: '演化',
          textStyle: { normal: { color: 'rgb(108,83,85)' } },
          value: 4
        },
        {
          name: '十年',
          textStyle: { normal: { color: 'rgb(17,20,56)' } },
          value: 4
        },
        {
          name: '乱序',
          textStyle: { normal: { color: 'rgb(148,160,33)' } },
          value: 1
        },
        {
          name: '逼格',
          textStyle: { normal: { color: 'rgb(28,4,0)' } },
          value: 1
        },
        {
          name: '领导',
          textStyle: { normal: { color: 'rgb(20,38,66)' } },
          value: 1
        },
        {
          name: 'CodePen',
          textStyle: { normal: { color: 'rgb(119,119,15)' } },
          value: 2
        },
        {
          name: '被',
          textStyle: { normal: { color: 'rgb(132,16,87)' } },
          value: 7
        },
        {
          name: '不可',
          textStyle: { normal: { color: 'rgb(81,31,87)' } },
          value: 7
        },
        {
          name: '现状',
          textStyle: { normal: { color: 'rgb(10,155,62)' } },
          value: 5
        },
        {
          name: '工程',
          textStyle: { normal: { color: 'rgb(82,150,96)' } },
          value: 13
        },
        {
          name: '配置管理',
          textStyle: { normal: { color: 'rgb(117,119,104)' } },
          value: 4
        },
        {
          name: '以微信',
          textStyle: { normal: { color: 'rgb(19,71,65)' } },
          value: 4
        },
        {
          name: '大家',
          textStyle: { normal: { color: 'rgb(72,11,152)' } },
          value: 1
        },
        {
          name: '拓展',
          textStyle: { normal: { color: 'rgb(57,130,53)' } },
          value: 1
        },
        {
          name: '图灵奖',
          textStyle: { normal: { color: 'rgb(132,134,153)' } },
          value: 1
        },
        {
          name: '入',
          textStyle: { normal: { color: 'rgb(159,58,10)' } },
          value: 1
        },
        {
          name: 'Storm',
          textStyle: { normal: { color: 'rgb(11,98,115)' } },
          value: 1
        },
        {
          name: '脸书',
          textStyle: { normal: { color: 'rgb(109,114,46)' } },
          value: 1
        },
        {
          name: '精选',
          textStyle: { normal: { color: 'rgb(9,84,105)' } },
          value: 12
        },
        {
          name: '避开',
          textStyle: { normal: { color: 'rgb(154,20,140)' } },
          value: 4
        },
        {
          name: '装',
          textStyle: { normal: { color: 'rgb(113,130,157)' } },
          value: 1
        },
        {
          name: '实用工具',
          textStyle: { normal: { color: 'rgb(22,151,99)' } },
          value: 4
        },
        {
          name: 'Chrome',
          textStyle: { normal: { color: 'rgb(149,20,138)' } },
          value: 23
        },
        {
          name: 'html',
          textStyle: { normal: { color: 'rgb(122,88,70)' } },
          value: 1
        },
        {
          name: '挺',
          textStyle: { normal: { color: 'rgb(17,90,61)' } },
          value: 3
        },
        {
          name: 'MSA',
          textStyle: { normal: { color: 'rgb(52,140,115)' } },
          value: 1
        },
        {
          name: '价值',
          textStyle: { normal: { color: 'rgb(28,14,91)' } },
          value: 1
        },
        {
          name: '它们',
          textStyle: { normal: { color: 'rgb(87,82,111)' } },
          value: 5
        },
        {
          name: 'GBDT',
          textStyle: { normal: { color: 'rgb(27,96,88)' } },
          value: 1
        },
        {
          name: 'nonce',
          textStyle: { normal: { color: 'rgb(57,102,42)' } },
          value: 1
        },
        {
          name: '阿里巴巴',
          textStyle: { normal: { color: 'rgb(135,56,147)' } },
          value: 2
        },
        {
          name: '衰退',
          textStyle: { normal: { color: 'rgb(81,85,6)' } },
          value: 1
        },
        {
          name: 'gradients',
          textStyle: { normal: { color: 'rgb(132,154,125)' } },
          value: 1
        },
        {
          name: 'Ancestor',
          textStyle: { normal: { color: 'rgb(29,108,24)' } },
          value: 1
        },
        {
          name: '寸',
          textStyle: { normal: { color: 'rgb(158,38,34)' } },
          value: 1
        },
        {
          name: 'ApplicationContext',
          textStyle: { normal: { color: 'rgb(19,52,56)' } },
          value: 1
        },
        {
          name: '碰撞',
          textStyle: { normal: { color: 'rgb(39,0,46)' } },
          value: 2
        },
        {
          name: '路在何方',
          textStyle: { normal: { color: 'rgb(19,94,65)' } },
          value: 1
        },
        {
          name: '可用',
          textStyle: { normal: { color: 'rgb(104,156,42)' } },
          value: 3
        },
        {
          name: '列表',
          textStyle: { normal: { color: 'rgb(156,30,106)' } },
          value: 8
        },
        {
          name: 'ORM',
          textStyle: { normal: { color: 'rgb(87,37,85)' } },
          value: 1
        },
        {
          name: 'Git',
          textStyle: { normal: { color: 'rgb(6,92,75)' } },
          value: 2
        },
        {
          name: '这次',
          textStyle: { normal: { color: 'rgb(51,11,130)' } },
          value: 1
        },
        {
          name: 'Laravel',
          textStyle: { normal: { color: 'rgb(101,24,7)' } },
          value: 10
        },
        {
          name: 'angular',
          textStyle: { normal: { color: 'rgb(138,4,7)' } },
          value: 1
        },
        {
          name: 'x',
          textStyle: { normal: { color: 'rgb(127,57,125)' } },
          value: 13
        },
        {
          name: '第三期',
          textStyle: { normal: { color: 'rgb(115,40,149)' } },
          value: 4
        },
        {
          name: '兴趣',
          textStyle: { normal: { color: 'rgb(67,5,29)' } },
          value: 1
        },
        {
          name: '韩天峰',
          textStyle: { normal: { color: 'rgb(72,121,32)' } },
          value: 1
        },
        {
          name: '模拟',
          textStyle: { normal: { color: 'rgb(128,89,79)' } },
          value: 3
        },
        {
          name: '年度',
          textStyle: { normal: { color: 'rgb(43,151,10)' } },
          value: 5
        },
        {
          name: 'Node',
          textStyle: { normal: { color: 'rgb(80,22,129)' } },
          value: 33
        },
        {
          name: 'scala',
          textStyle: { normal: { color: 'rgb(69,30,33)' } },
          value: 1
        },
        {
          name: 'UI',
          textStyle: { normal: { color: 'rgb(106,60,60)' } },
          value: 6
        },
        {
          name: '车队',
          textStyle: { normal: { color: 'rgb(41,70,9)' } },
          value: 1
        },
        {
          name: '续租',
          textStyle: { normal: { color: 'rgb(113,132,148)' } },
          value: 1
        },
        {
          name: '空洞',
          textStyle: { normal: { color: 'rgb(91,122,107)' } },
          value: 1
        },
        {
          name: '无人机',
          textStyle: { normal: { color: 'rgb(7,150,111)' } },
          value: 2
        },
        {
          name: '房价',
          textStyle: { normal: { color: 'rgb(96,99,138)' } },
          value: 1
        },
        {
          name: '篇文章',
          textStyle: { normal: { color: 'rgb(2,40,105)' } },
          value: 4
        },
        {
          name: '森森',
          textStyle: { normal: { color: 'rgb(116,59,4)' } },
          value: 1
        },
        {
          name: '不曾',
          textStyle: { normal: { color: 'rgb(81,85,57)' } },
          value: 1
        },
        {
          name: '智能化',
          textStyle: { normal: { color: 'rgb(116,145,42)' } },
          value: 3
        },
        {
          name: '加载',
          textStyle: { normal: { color: 'rgb(69,27,13)' } },
          value: 12
        },
        {
          name: 'Control',
          textStyle: { normal: { color: 'rgb(11,24,55)' } },
          value: 1
        },
        {
          name: '美',
          textStyle: { normal: { color: 'rgb(86,141,144)' } },
          value: 3
        },
        {
          name: '概述',
          textStyle: { normal: { color: 'rgb(32,125,119)' } },
          value: 13
        },
        {
          name: 'java',
          textStyle: { normal: { color: 'rgb(72,100,102)' } },
          value: 5
        },
        {
          name: '推翻',
          textStyle: { normal: { color: 'rgb(77,134,89)' } },
          value: 1
        },
        {
          name: '句子',
          textStyle: { normal: { color: 'rgb(50,146,96)' } },
          value: 2
        },
        {
          name: '给出',
          textStyle: { normal: { color: 'rgb(18,120,115)' } },
          value: 1
        },
        {
          name: '访问',
          textStyle: { normal: { color: 'rgb(34,106,151)' } },
          value: 5
        },
        {
          name: '校验',
          textStyle: { normal: { color: 'rgb(1,95,157)' } },
          value: 3
        },
        {
          name: '豹子',
          textStyle: { normal: { color: 'rgb(83,120,132)' } },
          value: 2
        },
        {
          name: '依赖',
          textStyle: { normal: { color: 'rgb(133,31,114)' } },
          value: 4
        },
        {
          name: 'LEARNING',
          textStyle: { normal: { color: 'rgb(60,150,152)' } },
          value: 1
        },
        {
          name: '十个',
          textStyle: { normal: { color: 'rgb(93,85,110)' } },
          value: 1
        },
        {
          name: '重新',
          textStyle: { normal: { color: 'rgb(61,70,79)' } },
          value: 1
        },
        {
          name: '批量',
          textStyle: { normal: { color: 'rgb(146,84,111)' } },
          value: 4
        },
        {
          name: 'Understanding',
          textStyle: { normal: { color: 'rgb(144,22,17)' } },
          value: 1
        },
        {
          name: 'Code',
          textStyle: { normal: { color: 'rgb(107,16,137)' } },
          value: 1
        },
        {
          name: '位居',
          textStyle: { normal: { color: 'rgb(38,1,69)' } },
          value: 1
        },
        {
          name: 'defer',
          textStyle: { normal: { color: 'rgb(155,88,122)' } },
          value: 1
        },
        {
          name: 'Monad',
          textStyle: { normal: { color: 'rgb(20,59,129)' } },
          value: 1
        },
        {
          name: '周刊',
          textStyle: { normal: { color: 'rgb(138,32,84)' } },
          value: 6
        },
        {
          name: '从业者',
          textStyle: { normal: { color: 'rgb(65,92,152)' } },
          value: 1
        },
        {
          name: 'Suite',
          textStyle: { normal: { color: 'rgb(64,62,153)' } },
          value: 1
        },
        {
          name: '小册',
          textStyle: { normal: { color: 'rgb(8,45,112)' } },
          value: 1
        },
        {
          name: 'Serving',
          textStyle: { normal: { color: 'rgb(113,155,57)' } },
          value: 1
        },
        {
          name: 'Siamese',
          textStyle: { normal: { color: 'rgb(65,121,155)' } },
          value: 1
        },
        {
          name: '优雅',
          textStyle: { normal: { color: 'rgb(33,126,113)' } },
          value: 15
        },
        {
          name: '对象',
          textStyle: { normal: { color: 'rgb(5,30,153)' } },
          value: 12
        },
        {
          name: '拖拽',
          textStyle: { normal: { color: 'rgb(156,47,149)' } },
          value: 3
        },
        {
          name: '路线图',
          textStyle: { normal: { color: 'rgb(34,67,94)' } },
          value: 1
        },
        {
          name: '也许',
          textStyle: { normal: { color: 'rgb(99,3,28)' } },
          value: 1
        },
        {
          name: '音频',
          textStyle: { normal: { color: 'rgb(14,129,34)' } },
          value: 2
        },
        {
          name: 'flexible',
          textStyle: { normal: { color: 'rgb(48,56,4)' } },
          value: 1
        },
        {
          name: '常用',
          textStyle: { normal: { color: 'rgb(131,46,50)' } },
          value: 17
        },
        {
          name: '准则',
          textStyle: { normal: { color: 'rgb(149,99,115)' } },
          value: 1
        },
        {
          name: '海量',
          textStyle: { normal: { color: 'rgb(79,5,91)' } },
          value: 2
        },
        {
          name: '面试题',
          textStyle: { normal: { color: 'rgb(49,94,57)' } },
          value: 8
        },
        {
          name: '革命',
          textStyle: { normal: { color: 'rgb(79,55,15)' } },
          value: 2
        },
        {
          name: 'DeepZip',
          textStyle: { normal: { color: 'rgb(141,123,83)' } },
          value: 1
        },
        {
          name: '详解',
          textStyle: { normal: { color: 'rgb(153,38,128)' } },
          value: 34
        },
        {
          name: '说明',
          textStyle: { normal: { color: 'rgb(19,80,125)' } },
          value: 4
        },
        {
          name: '滤镜',
          textStyle: { normal: { color: 'rgb(137,133,11)' } },
          value: 1
        },
        {
          name: '验证码',
          textStyle: { normal: { color: 'rgb(92,49,122)' } },
          value: 8
        },
        {
          name: '逐鹿',
          textStyle: { normal: { color: 'rgb(1,2,45)' } },
          value: 4
        },
        {
          name: '大会',
          textStyle: { normal: { color: 'rgb(56,33,97)' } },
          value: 6
        },
        {
          name: '追踪',
          textStyle: { normal: { color: 'rgb(128,116,138)' } },
          value: 19
        },
        {
          name: 'debian',
          textStyle: { normal: { color: 'rgb(72,25,152)' } },
          value: 1
        },
        {
          name: '中小型',
          textStyle: { normal: { color: 'rgb(152,93,104)' } },
          value: 4
        },
        {
          name: '指数',
          textStyle: { normal: { color: 'rgb(78,38,141)' } },
          value: 1
        },
        {
          name: 'bolt',
          textStyle: { normal: { color: 'rgb(102,129,9)' } },
          value: 1
        },
        {
          name: '追',
          textStyle: { normal: { color: 'rgb(6,108,45)' } },
          value: 1
        },
        {
          name: '自',
          textStyle: { normal: { color: 'rgb(44,20,12)' } },
          value: 5
        },
        {
          name: '推出',
          textStyle: { normal: { color: 'rgb(31,117,64)' } },
          value: 3
        },
        {
          name: 'SRNN',
          textStyle: { normal: { color: 'rgb(24,95,26)' } },
          value: 1
        },
        {
          name: 'Naive',
          textStyle: { normal: { color: 'rgb(69,121,88)' } },
          value: 2
        },
        {
          name: '带',
          textStyle: { normal: { color: 'rgb(34,88,16)' } },
          value: 24
        },
        {
          name: '过滤',
          textStyle: { normal: { color: 'rgb(78,34,67)' } },
          value: 1
        },
        {
          name: '彼此',
          textStyle: { normal: { color: 'rgb(7,136,47)' } },
          value: 1
        },
        {
          name: 'wac',
          textStyle: { normal: { color: 'rgb(20,59,17)' } },
          value: 1
        },
        {
          name: '除了',
          textStyle: { normal: { color: 'rgb(104,33,30)' } },
          value: 1
        },
        {
          name: 'Dubbo',
          textStyle: { normal: { color: 'rgb(96,24,140)' } },
          value: 6
        },
        {
          name: 'koa2',
          textStyle: { normal: { color: 'rgb(101,21,124)' } },
          value: 1
        },
        {
          name: '形态',
          textStyle: { normal: { color: 'rgb(72,82,81)' } },
          value: 3
        },
        {
          name: '坦克',
          textStyle: { normal: { color: 'rgb(64,131,96)' } },
          value: 1
        },
        {
          name: '触摸',
          textStyle: { normal: { color: 'rgb(110,72,14)' } },
          value: 1
        },
        {
          name: '命名',
          textStyle: { normal: { color: 'rgb(14,11,91)' } },
          value: 2
        },
        {
          name: '超级',
          textStyle: { normal: { color: 'rgb(30,33,30)' } },
          value: 1
        },
        {
          name: '方法论',
          textStyle: { normal: { color: 'rgb(105,24,158)' } },
          value: 3
        },
        {
          name: 'WPF',
          textStyle: { normal: { color: 'rgb(44,136,2)' } },
          value: 1
        },
        {
          name: '个性化',
          textStyle: { normal: { color: 'rgb(72,3,138)' } },
          value: 2
        },
        {
          name: '哪儿',
          textStyle: { normal: { color: 'rgb(131,11,17)' } },
          value: 1
        },
        {
          name: '拥有',
          textStyle: { normal: { color: 'rgb(22,51,65)' } },
          value: 1
        },
        {
          name: '研究',
          textStyle: { normal: { color: 'rgb(132,83,102)' } },
          value: 13
        },
        {
          name: '自动播放',
          textStyle: { normal: { color: 'rgb(91,39,16)' } },
          value: 1
        },
        {
          name: 'Face',
          textStyle: { normal: { color: 'rgb(31,8,156)' } },
          value: 1
        },
        {
          name: 'NX',
          textStyle: { normal: { color: 'rgb(13,12,130)' } },
          value: 1
        },
        {
          name: 'Django',
          textStyle: { normal: { color: 'rgb(43,72,39)' } },
          value: 7
        },
        {
          name: '可微',
          textStyle: { normal: { color: 'rgb(146,93,138)' } },
          value: 1
        },
        {
          name: '印象',
          textStyle: { normal: { color: 'rgb(91,59,79)' } },
          value: 1
        },
        {
          name: '两万',
          textStyle: { normal: { color: 'rgb(11,99,111)' } },
          value: 2
        },
        {
          name: '识花',
          textStyle: { normal: { color: 'rgb(100,92,17)' } },
          value: 1
        },
        {
          name: '来信',
          textStyle: { normal: { color: 'rgb(135,47,79)' } },
          value: 1
        },
        {
          name: '图文',
          textStyle: { normal: { color: 'rgb(121,112,84)' } },
          value: 2
        },
        {
          name: '红楼梦',
          textStyle: { normal: { color: 'rgb(150,160,124)' } },
          value: 1
        }
      ],
      girdSize: 20,
      name: '次数',
      rotationRange: [-90, 90],
      rotationStep: 45,
      shape: 'circle',
      sizeRange: [12, 60],
      type: 'wordCloud'
    }
  ],
  series_id: 5097242,
  title: [
    {
      left: 'auto',
      subtext: '',
      subtextStyle: { color: '#aaa', fontSize: 12 },
      text: '掘金文章标题分布',
      textStyle: { color: '#000', fontSize: 18 },
      top: 'auto'
    }
  ],
  toolbox: {
    feature: {
      dataView: { show: true },
      restore: { show: true },
      saveAsImage: { show: true, title: '下载图片' }
    },
    left: '95%',
    orient: 'vertical',
    show: true,
    top: 'center'
  },
  tooltip: {}
}

export const lineTwo = {
  backgroundColor: '#fff',
  color: [
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3',
    '#f05b72',
    '#ef5b9c',
    '#f47920',
    '#905a3d',
    '#fab27b',
    '#2a5caa',
    '#444693',
    '#726930',
    '#b2d235',
    '#6d8346',
    '#ac6767',
    '#1d953f',
    '#6950a1',
    '#918597',
    '#f6f5ec'
  ],
  legend: [
    {
      data: ['评论数'],
      left: 'center',
      orient: 'horizontal',
      selectedMode: 'multiple',
      show: true,
      textStyle: { color: '#333', fontSize: 12 },
      top: 'top'
    }
  ],
  series: [
    {
      barCategoryGap: '20%',
      data: [
        52,
        50,
        71,
        52,
        71,
        57,
        53,
        75,
        69,
        115,
        79,
        328,
        97,
        98,
        69,
        90,
        92,
        51,
        117,
        59,
        142,
        67,
        51,
        77,
        89,
        52,
        51,
        52,
        59,
        85,
        57,
        60,
        82,
        157,
        57,
        57,
        88,
        110,
        165,
        105,
        63,
        62,
        56,
        53,
        204,
        58,
        69
      ],
      label: {
        emphasis: {
          position: null,
          show: true,
          textStyle: { color: '#fff', fontSize: 12 }
        },
        normal: {
          formatter: null,
          position: 'top',
          show: false,
          textStyle: { color: '#000', fontSize: 12 }
        }
      },
      markLine: { data: [] },
      markPoint: { data: [] },
      name: '评论数',
      seriesId: 7383430,
      stack: '',
      type: 'bar'
    }
  ],
  series_id: 7383430,
  title: [
    {
      left: 'auto',
      subtext: '',
      subtextStyle: { color: '#aaa', fontSize: 12 },
      text: '掘金文章评论量前50分布图',
      textStyle: { color: '#000', fontSize: 18 },
      top: 'auto'
    }
  ],
  toolbox: {
    feature: {
      dataView: { show: true },
      dataZoom: { show: true, title: { back: '缩放还原', zoom: '区域缩放' } },
      magicType: {
        show: true,
        title: { bar: '柱状图', line: '折线图', stack: '堆叠', tiled: '平铺' },
        type: ['line', 'bar', 'stack', 'tiled']
      },
      restore: { show: true },
      saveAsImage: { show: true, title: '下载图片' }
    },
    left: '95%',
    orient: 'vertical',
    show: true,
    top: 'center'
  },
  tooltip: {
    axisPointer: { type: 'line' },
    formatter: null,
    textStyle: { color: '#fff', fontSize: 14 },
    trigger: 'item',
    triggerOn: 'mousemove|click'
  },
  xAxis: [
    {
      axisLabel: {
        interval: 'auto',
        margin: 8,
        rotate: 0,
        textStyle: { color: '#000', fontSize: 12 }
      },
      axisTick: { alignWithLabel: false },
      boundaryGap: true,
      data: [
        '这个CSS问题屏幕前的你是否熟悉，然后懵逼，最后放弃',
        '2018 Web 开发者最佳学习路线',
        '[译] 2017 年比较 Angular、React、Vue 三剑客 ',
        '一次 H5 「保存页面为图片」 的踩坑之旅',
        '某小公司RESTful、共用接口、前后端分离、接口约定的实践',
        '2018前端值得关注的技术',
        'iOS开发者的一些前端感悟',
        'JavaScript 实用技巧和写法建议',
        'ECharts 全新大版本 4.0 正式发布！百度数据可视化实验室成立',
        'B站的前端之路',
        '第一本 PWA 中文书',
        '关于IT培训机构的个人看法',
        '你敢在post和get上刁难我，就别怪我装逼了',
        '技术胖155集前端视频教程-全部免费观看',
        'JS维护nginx反向代理，妈妈再也不用担心我跨域了！',
        '个人分享--web前端学习资源分享',
        '面试过阿里等互联网大公司，我知道了这些套路 | 掘金技术征文',
        '使用VUE分分钟写一个验证码输入组件',
        '回望2017：一个前端从业者砥砺前行的一年',
        '你以为 CSS 只是个简单的布局？',
        '前端入行两年--教会了我这些道理',
        'JavaScript:(a==1 && a==2 && a==3)能输出true么？',
        '2018 我所了解的 Vue 知识大全（一）',
        '[译] React、Jest、Flow 和 Immutable.js 将使用 MIT 许可证',
        '如何无痛降低 if else 面条代码复杂度',
        '从 webpack 到全面拥抱 Parcel #1 探索 Parcel',
        '前端慌不慌？用深度学习自动生成HTML代码',
        '从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理',
        '能让你开发效率翻倍的 VSCode 插件配置（上）',
        '妈妈再也不用担心我不会webpack了',
        '滴滴 Web 移动端组件库 cube-ui 开源',
        '打造自己的JavaScript武器库',
        '编写自己的代码库（javascript常用实例的实现与封装）',
        'JavaScript专题系列20篇正式完结！',
        '让我印象深刻的 JavaScript 面试题',
        '送给前端开发者的一份新年礼物',
        'iView 发布后台管理系统 iview-admin，没错，它就是你想要的',
        'Android 还可以走多久？',
        '这一次，彻底弄懂 JavaScript 执行机制',
        'Vue 脱坑记 - 查漏补缺(汇总下群里高频询问的xxx及给出不靠谱的解决方案)',
        '漫画：什么是红黑树？',
        '一个炫酷大屏展示页的打造过程',
        '我是如何次次《头脑王者》获得满分的',
        'WebSocket：5分钟从入门到精通',
        '别再拿奇技淫巧搬砖了',
        'webpack 为什么这么难用？',
        '基于 Docker 打造前端持续集成开发环境'
      ],
      inverse: false,
      max: null,
      min: null,
      name: '',
      nameGap: 25,
      nameLocation: 'middle',
      nameTextStyle: { fontSize: 14 },
      position: null,
      show: true,
      type: 'category'
    }
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: '{value} ',
        interval: 'auto',
        margin: 8,
        rotate: 0,
        textStyle: { color: '#000', fontSize: 12 }
      },
      axisTick: { alignWithLabel: false },
      boundaryGap: true,
      inverse: false,
      max: null,
      min: null,
      name: '',
      nameGap: 25,
      nameLocation: 'middle',
      nameTextStyle: { fontSize: 14 },
      position: null,
      show: true,
      type: 'value'
    }
  ]
}
