/**
 * @name                easeInterval
 * @namespace           shared.function
 * @type                Function
 * @platform            js
 * @status              stable
 * @async
 *
 * This function allows you to call a callback function exactly as the `setInterval` would do but with an easing that you can specify,
 * as well as an `interval` setting to customize how many time your function will be called.
 * By default this function will pass the "easedPercent" that represent the percentage of your passed "duration" with the easing applied on it.
 * With that you can make everything you want inside your callback function.
 *
 * @param       {Number}            duration            The duration of your interval process you want
 * @param       {Function}          [cb=null]           A callback function to call at each interval
 * @param       {IEaseIntervalSettings}     [settings={}]       Some settings to customize your interval process
 * @return      {SPromise}                              An SPromise that will be resolved once the process is complete, and through which you can subscribe to the "interval" event that is the same as the "cb" parameter
 *
 * @setting         {Number}        [inteval=1000/25]           An interval in ms to call your callback function
 * @setting         {Function}      [easing=easeInOutQuart]     An easing function that take as parameter a value between 0 and 1
 * @setting         {Number}        [from=0]                    The value to start with
 * @setting         {Number}        [to=100]                    The value to end with
 *
 * ª@todo      tests
 *
 * @snippet         __easeInterval($1, $2)
 * const easeInterval = __easeInterval($1, percent => {
 *      $2
 * });
 * // easeInterval.cancel(); // stop the easing process
 * await easeInterval;
 *
 * @example         js
 * import { __easeInterval } from '@lotsof/sugar/function';
 * await __easeInterval(2000, (easedPercent) => {
 *      // do something...
 * }, {
 *      interval: 1000 / 25 // 25 times by second
 * });
 *
 * @since       2.0.0
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
export interface IEaseIntervalSettings {
    interval?: number;
    easing?: Function;
    from?: number;
    to?: number;
    onEnd?: Function;
}
export default function __easeInterval(duration: number, cb: Function, settings?: IEaseIntervalSettings): Promise<unknown>;
