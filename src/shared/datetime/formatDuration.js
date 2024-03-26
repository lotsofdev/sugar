/**
 * @name                formatDuration
 * @namespace           shared.datetime
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * This function let you pass a duration in ms and get back a formatted estimation like "2.4m", "30s", etc...
 *
 * @param         {Number}        duration          The duration in ms to format
 * @return        {String}                          The formatted estimation duration
 *
 * @todo      tests
 *
 * @snippet         __formatDuration($1)
 *
 * @example       js
 * import { __formatDuration } from '@coffeekraken/sugar/datetime';
 * __formatDuration(2000); // => 2s
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __formatDuration(duration) {
    if (duration === Infinity) {
        return '...';
    }
    if (duration < 1000) {
        return `${duration}ms`;
    }
    if (duration < 1000 * 60) {
        const s = (duration / 1000).toFixed(0);
        const ms = (duration - s * 1000).toFixed(0);
        if (ms <= 0)
            return `${s}s`;
        return `${s}.${ms}s`;
        // if (s > 10) {
        //     return `${s}s`;
        // } else {
        //     return `${s}s${ms > 0 ? `${ms}ms` : ''}`;
        // }
    }
    if (duration < 1000 * 60 * 60) {
        const m = Math.floor(duration / 1000 / 60);
        const s = ((duration - m * 1000 * 60) / 1000).toFixed(0);
        return `${m}m${s > 0 ? `${s}s` : ''}`;
    }
    // if (duration < 1000 * 60 * 60 * 60) {
    const h = Math.floor(duration / 1000 / 60 / 60);
    const m = ((duration - h * 1000 * 60 * 60) / 1000 / 60).toFixed(0);
    return `${h}h${m > 0 ? `${m}m` : ''}`;
    // }
}
//# sourceMappingURL=formatDuration.js.map