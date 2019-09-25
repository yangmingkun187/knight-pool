import request from '@/utils/axios'

const Config = {
	/**
	 * @desc 获取用户面板
	 * @author JasonYang
	 * @date 2019/09/26 00:27:31
	 */
	async fetchCoinType() {
		let res = await request({
			url: 'pool/coins/',
		});
		return res;
	}
}
export default Config


