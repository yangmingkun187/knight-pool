<template>
    <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>
<script>
    // 引入 ECharts 主模块
    const echarts = require( 'echarts/lib/echarts' );
    require( 'echarts/lib/chart/bar' );
    require( 'echarts/lib/chart/pie' );
    // 引入提示框和标题组件
    require( 'echarts/lib/component/tooltip' );
    require( 'echarts/lib/component/title' );
    require( 'echarts/lib/component/legend' );
    require( 'echarts/lib/component/dataZoom' );
    export default {
        name: 'pieChart',
        props: {
            className: {
                type: String,
                default: 'chart'
            },
            id: {
                type: String,
                default: 'chart'
            },
            width: {
                type: String,
                default: '200px'
            },
            height: {
                type: String,
                default: '200px'
            },
            data: {
                type: Array,
                required: true
            },
            legend: {
                type: Object,
                default() {
                    return {
                        orient: 'vertical',
                        top: 60,
                        right: 10,
                        data: [ '挂号费', '检查费', '治疗费', '药费' ],
                        textStyle: {
                            fontSize: 14
                        }
                    }
                }
            },
            center: {
                type: Array,
                default() {
                    return  ['127', '96']
                }
            },
            label: {
                type: Object,
                default() {
                    return {
                        normal: {
                            show: false
                        }
                    }
                }
            }
        },
        data() {
            return {};
        },
        mounted() {
            this.chart = echarts.init( document.getElementById( this.id ) );
            this.initChart();
        },
        watch: {
            data: {
                handler: function() {
                    this.initChart();
                },
                deep: true
            }
        },
        methods: {
            initChart() {
                this.chart.setOption( {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}: {c} ({d}%)'
                    },
                    legend: this.legend,
                    backgroundColor: '#ffffff',
                    series: [{
                        hoverAnimation: false, //设置饼图默认的展开样式
                        center: this.center,
                        radius: ['48', '80'],
                        name: 'pie',
                        type: 'pie',
                        selectedMode: 'single',
                        selectedOffset: 14, //选中是扇区偏移量
                        hoverOffset: 14,
                        clockwise: true,
                        startAngle: 90,
                        label: this.label,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                borderColor: '#ffffff',
                            },
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 5,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.2)'
                            }
                        },
                        data: this.data
                    }]
                } )
            }
        }
    }
</script>
