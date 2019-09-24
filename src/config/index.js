// 不同环境配置不同的Api请求地址
import dev from './config.dev.js'
import prod from './config.prod'

let API_BASE_URL = process.env.NODE_ENV
let config = null

switch (API_BASE_URL) {
    case 'development': config = dev; break
    case 'production': config = prod; break
}

export default config
