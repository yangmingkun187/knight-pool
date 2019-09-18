/**
 * @desc 格式化数字，支持 2 - 4 位小数
 * @author JasonYang
 * @date 2019/09/16 23:54:15
 * @params num
 * @params toFixed2
 * @return
 */
export function formatNumber( num, toFixed2 = true ) {
	if (num === null || num === undefined) return '';
	num = Number( (+num).toFixed( 5 ) );
	let numStr = '' + num;

	// 是否为负数
	let isMinus = false;
	if (/^-/.test( numStr )) {
		isMinus = true;
		numStr = numStr.slice( 1 );
	}

	if (toFixed2) {
		numStr = Number( numStr ).toFixed( 2 );
	} else {
		let decimal = numStr.split( '.' )[ 1 ];
		let decimalLength = decimal ? decimal.length : 0;
		if (decimalLength > 5) {
			numStr = Number( numStr ).toFixed( 5 );
		} else if (decimalLength > 2) {
			numStr = Number( numStr ).toFixed( decimalLength )
		} else {
			numStr = Number( numStr ).toFixed( 2 );
		}
	}

	numStr = (isMinus ? '-' : '') + numStr;
	return numStr;
}