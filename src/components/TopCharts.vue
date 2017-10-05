<template>
    <div id="topcharts">
        <div class="row container-fluid mb-5">
            <div id="chart"></div>
            <div id="chart2"></div>
            <div id="chart3"></div>
            <div id="chart4"></div>
            <div id="chart5"></div>
            <div id="chart6"></div>
            <div id="chart7"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ShortList',
        data() {
            return {
                msg: 'asdfa'
            }
        },
        methods: {
            addchart() {

                var chart = c3.generate({
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        colors: {
                            data1: '#f7931a'
                        },
                        types: {
                            data1: 'area-spline'
                        }
                    }
                });
            },
            addchart2() {
                var chart2 = c3.generate({
                    bindto: '#chart2',
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        colors: {
                            data1: '#f7931a',
                        },
                        types: {
                            data1: 'area-spline'
                        }
                    }
                });
            },
            addchart3() {
                var chart = c3.generate({
                    bindto: '#chart3',
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        types: {
                            data1: 'area-spline'
                        }
                    }
                });
            },
            addchart4() {
                var chart = c3.generate({
                    bindto: '#chart4',
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        colors: {
                            data1: '#f7931a'
                        },
                        types: {
                            data1: 'area-spline'
                        }
                    }
                });
            },
            addchart5() {
                var chart5 = c3.generate({
                    bindto: '#chart5',
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        colors: {
                            data1: '#f7931a'
                        },
                        types: {
                            data1: 'area-spline'
                        },
                        point: {
                            show: false
                        }
                    }
                });
            },
            addchart6() {
                var chart6 = c3.generate({
                    bindto: '#chart6',
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        colors: {
                            data1: '#f7931a'
                        },
                        types: {
                            data1: 'area-spline'
                        },
                        point: {
                            show: false
                        }
                    }
                });
            },
             addchart7() {
                var chart7 = c3.generate({
                    bindto: '#chart7',
                    size: {
                        height: 150,
                        width: 190
                    },
                    data: {
                        columns: [
                            ['data1', 130, 100, 140, 200, 150, 50]
                        ],
                        colors: {
                            data1: '#f7538a'
                        },
                        types: {
                            data1: 'area-spline'
                        },
                        point: {
                            show: false
                        }
                    }
                });
            }
        },
        mounted() {
            this.addchart();
            this.addchart2();
            this.addchart3();
            this.addchart4();
            this.addchart5();
            this.addchart6();
            this.addchart7();
        }
    }
</script>

<style lang="scss">
.c3 .c3-axis-x path, .c3 .c3-axis-x line {
    stroke: #efefef;
}
.c3 .c3-axis-y path, .c3 .c3-axis-y line {
    stroke: #efefef;
}
.c3-axis, .c3-axis-y {
    fill: #dddddd;
}
.c3-legend-item, .c3-legend-item-data1, .c3-legend-item-focused{
    fill: #dddddd;
}
</style>
