<template>
    <div class="dashboard">

        <el-row :gutter="16" class="computing-power">
            <el-col :span="16">

                <el-card class="box-card line-chart">
                    <div slot="header" class="clearfix">
                        <span>算力统计</span>
                        <el-tabs v-model="activeDayFilter" @tab-click="changeDayFilter">
                            <el-tab-pane label="最近72小时" name="3"></el-tab-pane>
                            <el-tab-pane label="过去一周" name="7"></el-tab-pane>
                            <el-tab-pane label="过去30天" name="30"></el-tab-pane>
                        </el-tabs>
                    </div>
                    <LineChart id='dayLineChart'
                               :date="lineDate"
                               :data="lineData"
                               :grid="grid"
                               :dataZoomConf="null"
                               height='288px'
                               width='100%'></LineChart>
                </el-card>

            </el-col>

            <el-col :span="8">

                <el-card class="box-card">

                    <div class="title">
                        当前算力
                    </div>

                    <div class="content">
                        <div>
                            <h5>实时算力</h5>
                            <p>
                                {{account_hash_rate.shares_15m}} <span>{{account_hash_rate.shares_15m_unit}}</span>
                            </p>
                        </div>

                        <div>
                            <h5>1小时算力</h5>
                            <p>
                                {{account_hash_rate.shares_1h}} <span>{{account_hash_rate.shares_1h_unit}}</span>
                            </p>
                        </div>
                    </div>

                    <div class="title">
                        当前矿力
                    </div>

                    <div class="content">
                        <div>
                            <h5>当前矿机</h5>
                            <p>
                                {{account_miner_stats.miner_total}}
                            </p>
                        </div>

                        <div class="miner-status">
                            <div class="active">
                                <img src="~assets/images/miner_active.png" alt="">
                                <p>{{account_miner_stats.miner_active}}</p>
                            </div>
                            <div>
                                <img src="~assets/images/miner_inactive.png" alt="">
                                <p>{{account_miner_stats.miner_inactive}}</p>
                            </div>
                        </div>
                    </div>

                    <el-progress :text-inside="true"
                                 :stroke-width="24"
                                 :percentage="percentageMachine"
                                 status="success">
                    </el-progress>

                </el-card>

            </el-col>
        </el-row>

        <el-row :gutter="16" class="btc-group">
            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        今日已挖
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p class="blue">
                        {{earns.today}} <span>BTC</span>
                    </p>
                </el-card>

            </el-col>

            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        总收益
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p>
                        {{earns.total_amount}} <span>BTC</span>
                    </p>
                </el-card>

            </el-col>
            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        已支付
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p>
                        {{earns.pay_amount}} <span>BTC</span>
                    </p>
                </el-card>

            </el-col>
            <el-col :span="6">

                <el-card class="box-card">
                    <h3>
                        余额
                        <i class="el-icon-warning-outline"></i>
                    </h3>
                    <p>
                        {{earns.balance}} <span>BTC</span>
                    </p>
                </el-card>

            </el-col>

        </el-row>

        <el-row :gutter="16" class="info-group">

            <el-col :span="7">
                <el-card class="box-card notice" :body-style="{padding: 0}">
                    <div slot="header" class="clearfix">
                        <span>通知公告</span>
                        <span class="all-notice">全部公告</span>
                    </div>
                    <ul>
                        <li v-for="o in 6" :key="o" class="text item">
                            {{'系统升级通知 ' + o }}
                        </li>
                    </ul>
                </el-card>
            </el-col>

            <el-col :span="10">
                <el-card class="box-card address">
                    <div slot="header" class="clearfix">
                        <span>挖矿地址</span>
                    </div>
                    <ul>
                        <li v-for="o in 3" :key="o" class="text item">
                            <span>{{'stratum+tcp://ltc.ss.poolin.com:25 ' + o }}</span>
                            <el-button type="primary" plain size="mini">复制</el-button>
                        </li>
                    </ul>
                </el-card>
            </el-col>

            <el-col :span="7">
                <el-card class="box-card contact" :body-style="{padding: '16px 20px 24px'}">
                    <div slot="header" class="clearfix">
                        <span>联系 Knight Pool</span>
                    </div>
                    <div class="first">
                        <div>
                            <div class="wechat">
                                <img src="~assets/images/icon-wechat.png" alt="">微信
                            </div>
                            wyueyw
                        </div>
                        <div>
                            <div class="email">
                                <img src="~assets/images/icon-email.png" alt="">Email
                            </div>
                            admin@knightpool.co
                        </div>
                    </div>
                    <div class="second" style="margin-top: 18px;">
                        <div>
                            <div class="qq">
                                <img src="~assets/images/icon-qq.png" alt="">QQ
                            </div>
                            123290398
                        </div>
                        <div>
                            <div class="qqqun">
                                <img src="~assets/images/icon-qqqun.png" alt="">QQ群
                            </div>
                            3723823
                        </div>
                    </div>
                </el-card>
            </el-col>

        </el-row>

    </div>
</template>

<script>
	import DashboardAPI from '@/api/dashboard'
	import {mapGetters, mapActions} from 'vuex';
	import LineChart from '@/components/chart/line-chart';

	export default {
		props: {},
		components: {
			LineChart
		},
		created() {
			this.fetchData();
			this.fetchChartData();
		},
		data() {
			return {
				activeDayFilter: '3',
				account_miner_stats: {},
				account_hash_rate: {},
				earns: {},

				lineDate: [],
				lineData: [],
				grid: {
					show: true,
					borderWidth: 0,
					borderColor: '#dddddd',
					containLabel: true,
					top: '16px',
					left: '10px',
					bottom: '14px',
					right: '34px',
				},
			}
		},
		computed: {
			...mapGetters([
				'coinTypes',
				'currentCoinType',
				'accountList',
				'currentAccount',
			]),

			percentageMachine() {
				return this.account_miner_stats.miner_active / this.account_miner_stats.miner_total * 100 || 0
			}
		},
		methods: {
			async fetchData() {
				let res = await DashboardAPI.fetchStat({
					puid: 13,
					coin: this.currentCoinType,
				});
				this.account_miner_stats = res.account_miner_stats;
				this.account_hash_rate = res.account_hash_rate;
				this.earns = res.earns;
			},

			async fetchChartData() {
				let res = await DashboardAPI.fetchChart({
					puid: 13,
					coin: this.currentCoinType,
					day: this.activeDayFilter
				})
				this.lineDate = [];
				this.lineData = [];
				for (let i = 0; i < res.length; i++) {
					this.lineDate.push(res[i].day.split(' ')[0]);
					this.lineData.push(res[i].value);
				}
			},

			changeDayFilter() {
				this.fetchChartData()
			},

		}
	};
</script>
