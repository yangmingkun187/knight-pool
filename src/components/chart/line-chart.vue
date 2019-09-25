<template>
    <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>
<script>
    // 引入 ECharts 主模块
    const echarts = require( 'echarts/lib/echarts' );
    require( 'echarts/lib/chart/bar' );
    require( 'echarts/lib/chart/line' );
    // 引入提示框和标题组件
    require( 'echarts/lib/component/tooltip' );
    require( 'echarts/lib/component/title' );
    require( 'echarts/lib/component/legend' );
    require( 'echarts/lib/component/dataZoom' );
    export default {
        name: 'lineChart',
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
            seriesName: {
                type: String,
                default: '收入'
            },
            grid: {
                type: Object,
                default() {
                    return {
                        show: true,
                        borderWidth: 1,
                        borderColor: '#E6E9EC',
                        containLabel: true,
                        width: 960,
                        top: 24,
                        right: 24,
                        left: 59,
                        bottom: 52,
                    }
                }
            },
            date: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                required: true
            },
            dataZoomConf: {
                type: Object,
                default() {
                    return {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        zoomLock: true,
                        fillerColor: 'rgba(0, 0, 0, 0.05)',
                        borderColor: '#f5f5f5',
                        backgroundColor: '#f8f9fa',
                        dataBackground: {
                            lineStyle: {
                                color: '#dddddd',
                                opacity: 1,
                            },
                            areaStyle: {
                                color: '#eeeeee',
                                opacity: 1,
                            }
                        },
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 4,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 2
                        }
                    }
                }
            },
            seriesConf: {
                type: Object,
                default() {
                    return {
                        type: 'line',
                        symbolSize: 5,
                        symbol: 'circle',
                        lineStyle: {
                            normal: {
                                width: 1,
                                color: '#1989FA',
                            }
                        },
                        itemStyle: {
                            normal: {
                                type: 'solid',
                                color: '#1989FA',
                                barBorderRadius: 0,
                            }
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(25, 137, 250, 1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(233, 247, 248, 1)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                        },
                    }
                }
            },
            tooltipFormatter: Function

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
        updated() {
            this.$nextTick(function () {
                this.chart.resize()
            })
        },
        methods: {
            initChart() {
                let date = this.date.map(item => {
                    return {
                        value: item,
                        textStyle: {
                            fontFamily: 'helvetica',
                        }
                    }
                })
                this.chart.setOption( {
                    backgroundColor: '#FFFFFF',
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        trigger: 'axis',
                        axisPointer: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    grid: this.grid,
                    calculable: true,
                    xAxis: [ {
                        type: 'category',
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#dddddd'
                            }
                        },
                        boundaryGap: false,
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            color: '#888888'
                        },
                        data: date,

                    } ],
                    yAxis: [ {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#dddddd'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            color: '#888888'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eeeeee',
                                type: 'dashed',
                            }
                        },
                    } ],
                    dataZoom: this.dataZoomConf ? [ {
                        type: 'inside',
                        startValue: this.date.length < 15 ? 0 : Math.abs(this.date.length - 15),
                        endValue: this.date.length - 1,
                        zoomLock: true
                    }, this.dataZoomConf] : null,

                    series: [ Object.assign(this.seriesConf, {
                        name: this.seriesName,
                        data: this.data
                    })],
                } )
            }
        }
    }
</script>
