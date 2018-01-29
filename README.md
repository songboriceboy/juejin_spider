# juejin_spider

## imgs文件夹下为项目的结果图，部分在READEME已经展示

## spiders文件夹下为爬取掘金的爬虫文件
* 主要用到python的requests和bs4库

## juejin_analyze.ipynb为分析掘金的notebook文件
* 使用jupyter notebook进行分析 
* pyecharts进行数据可视化

## front-end文件夹下是项目的前端部分
* 技术栈vue全家桶，bootstrap（只用到了css文件，无其他js文件依赖）

## back-end文件夹下是项目的后端部分
* 使用Go语言编写Server，采用标准库http编写

* 因为项目涉及到了elasticsearch故使用了Go语言版elastic client

## 使用
进入back-end文件夹，直接运行
```
go run main.go
```
即可访问localhost:3000

front-end文件夹下为vue的标准项目，可以直接进行查看和更改

暂时有个webpack的小Bug，开发环境下的有个动画在生产环境下失效了，目前还没找到解决方案
## 效果图

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/1.png)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/2.png)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/3.png)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/4.png)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/5.png)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/6.jpg)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/7.png)

![](https://github.com/PedroGao/juejin_spider/blob/master/imgs/8.png)