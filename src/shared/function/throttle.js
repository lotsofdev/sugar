/**
 * @name            throttle
 * @namespace       shared.function
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This utils function allows you to make sure that a function that will normally be called
 * several times, for example during a scroll event, to be called once each threshhold time
 *
 * @param           {Number}            threshhold          The delay in ms to wait between two function calls
 * @param           {Function}          fn                  The function to throttle
 * @return          {Function}                              The throttled function
 *
 * @todo      tests
 *
 * @snippet         __throttle($1, $2)
 * __throttle($1, () => {
 *      $2
 * })
 *
 * @example 		js
 * import { __throttle } from '@lotsof/sugar/function';
 * const myThrottledFn = __throttle(1000, () => {
 * 		// my function content that will be
 * 		// executed only once each second
 * });
 *
 * document.addEventListener('scroll', (e) => {
 * 		// call my throttled function
 * 		myThrottledFn();
 * });
 *
 * @since         2.0.0
 * @author 	        Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __throttle(threshhold, fn) {
    threshhold || (threshhold = 250);
    let last;
    return function () {
        // @ts-ignore
        const context = this;
        const now = Date.now(), args = arguments;
        if (!last || last <= now - threshhold) {
            last = now;
            fn.apply(context, args);
        }
    };
}
//# sourceMappingURL=throttle.js.map