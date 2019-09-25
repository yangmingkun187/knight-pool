import request from '@/utils/axios'

const Dashboard = {
	/**
	 * @desc 获取用户面板
	 * @author JasonYang
	 * @date 2019/09/26 00:27:31
	 */
	async fetchStat(params) {
		let res = await request({
			url: '/pool/account/stats',
			params
		});
		return res;
	},

	/**
	 * @desc 算力曲线图-按天
	 * @author JasonYang
	 * @date 2019/09/26 01:56:29
	 */
	async fetchChart({coin='btc', puid = 1, days = 3}) {
		let res = await request({
			url: '/pool/account/day/chart/',
			params: {
				coin,
				puid,
				days,
			}
		})
		return res.data
	}
}
export default Dashboard





