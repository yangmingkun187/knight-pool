import includes  from './includes'

export default class Polyfill {
    static config = [
        includes
    ];
    static walk = () => {
        Polyfill.config.forEach((fn) => {
            if(fn instanceof Function) {
                fn && fn()
            } else {
                console.warn('Polyfill Must Be A Function')
            }
        })
    }
}