import includes  from './includes'

export default class Polyfill {
    static config = [
        includes
    ];
    static walk = () => {
        Polyfill.config.forEach((fn) => {
            if (fn instanceof Function) {
                fn && fn()
            } else {
                // eslint-disable-next-line no-console
                console.warn('Polyfill Must Be A Function');
            }
        })
    };
}