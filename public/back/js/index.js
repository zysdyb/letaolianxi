$(function () {

  // 基于准备好的dom，初始化echarts实例
  var echarts_left = echarts.init(document.querySelector('.echarts_left'));

  // 指定图表的配置项和数据
  var option1 = {
    title: {
      text: '2018年注册人数'
    },
    tooltip: {},
    legend: {
      data: ['人数', "销量"]
    },
    xAxis: {
      data: ["1月","2月","3月","4月","5月","6月"]
    },
    yAxis: {},
    series: [{
      name: '人数',
      type: 'bar',
      data: [50, 120, 36, 10, 10, 20]
    }, {
      name: '销量',
      type: 'bar',
      data: [10,100, 36, 10, 10, 20]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  echarts_left.setOption(option1);





    // 基于准备好的dom，初始化echarts实例
    var echarts_right = echarts.init(document.querySelector('.echarts_right'));

    // 指定图表的配置项和数据
    var option2 = {
      title : {
          text: '热门品牌销售',
          subtext: '2018年11月',
          x:'center',
          textStyle:{
            color:"#e92322",
            fontSize: 30
          }

      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['美津浓','新百伦','斯凯奇','鸿星尔克','耐克']
      },
      series : [
          {
              name: '品牌',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'美津浓'},
                  {value:310, name:'新百伦'},
                  {value:234, name:'斯凯奇'},
                  {value:135, name:'鸿星尔克'},
                  {value:1548, name:'耐克'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'yellow'
                  }
              }
          }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    echarts_right.setOption(option2);
  

})