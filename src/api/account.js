

import request from '@/utils/axios'

const Account = {
	/**
	 * @desc 获取用户面板
	 * @author JasonYang
	 * @date 2019/09/26 00:27:31
	 */
	async fetchAccountList({page=1,page_size=50,account_name=''}) {
		return await request({
			url: '/pool/account/list/',
			params: {
				page,
				page_size,
				account_name,
			}
		});
	}
}
export default Account


