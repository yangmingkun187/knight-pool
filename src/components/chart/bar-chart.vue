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
        name: 'barChart',
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
                        left: 160,
                        //                        right: 92,
                        bottom: 52,
                    }
                }
            },
            category: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                required: true
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
                handler: function () {
                    this.initChart();
                },
                deep: true
            }
        },
        updated() {
            this.$nextTick( function () {
                this.initChart();
            } )
        },
        methods: {
            initChart() {
                let category = this.category.map(item => {
                    return {
                        value: item,
                        textStyle: {
                            fontSize: 14,
                            color: '#333333',
                        }
                    }
                })
                this.chart.setOption( {
                    color: [ '#FDAB2E' ],
                    backgroundColor: '#FFFFFF',
                    grid: this.grid,
                    tooltip: {
                    },
                    xAxis: {
                        show: false,
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: category,
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                            alignWithLabel: true
                        },
                    }
                    ,
                    series: [
                        {
                            name: '患者人数',
                            type: 'bar',
                            barWidth: '20',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            data: this.data
                        }
                    ]
                } )
            }
        }
    }
</script>
