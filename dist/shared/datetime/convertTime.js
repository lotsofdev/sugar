/**
 * @name                                convertTime
 * @namespace                           shared.datetime
 * @type                                Function
 * @platform                            js
 * @platform                            node
 * @status                              stable
 *
 * This function allows you to convert time like seconds, ms, hours, minutes, etc... from one format to another
 *
 * @param           {String|Number}             from                  The value to start from like "10s", "20ms", "2h", etc...
 * @param           {String}                    [to='ms']             The format you want to get back
 * @return          {Number}                                          The converted value
 *
 * @todo      tests
 *
 * @snippet         __convertTime($1, $2)
 *
 * @example           js
 * import { __convertTime } from '@coffeekraken/sugar/datetime.js';
 * __convertTime('10s', 'ms'); // => 10000
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __convertTime(from, to = 'ms') {
    // @ts-ignore
    let fromMs = from;
    // check if the time is a string to convert it to ms
    if (typeof from === 'string') {
        const fromNumber = parseFloat(from);
        const fromLength = fromNumber.toString().length;
        const fromString = from.slice(fromLength);
        if (fromString === 'ms' ||
            fromString === 'millisecond' ||
            fromString === 'milliseconds') {
            fromMs = fromNumber;
        }
        else if (fromString === 's' ||
            fromString === 'second' ||
            fromString === 'seconds') {
            fromMs = fromNumber * 1000;
        }
        else if (fromString === 'm' ||
            fromString === 'minute' ||
            fromString === 'minutes') {
            fromMs = fromNumber * 60 * 1000;
        }
        else if (fromString === 'h' ||
            fromString === 'hour' ||
            fromString === 'hours') {
            fromMs = fromNumber * 60 * 60 * 1000;
        }
        else if (fromString === 'd' ||
            fromString === 'day' ||
            fromString === 'days') {
            fromMs = fromNumber * 24 * 60 * 60 * 1000;
        }
        else if (fromString === 'w' ||
            fromString === 'week' ||
            fromString === 'weeks') {
            fromMs = fromNumber * 7 * 24 * 60 * 60 * 1000;
        }
        else if (fromString === 'month' || fromString === 'months') {
            fromMs = fromNumber * 31 * 24 * 60 * 60 * 1000;
        }
        else if (fromString === 'y' ||
            fromString === 'year' ||
            fromString === 'years') {
            fromMs = fromNumber * 365 * 24 * 60 * 60 * 1000;
        }
    }
    // convert not the fromMs value to the requested format
    switch (to) {
        case 'ms':
        case 'millisecond':
        case 'milliseconds':
            return fromMs;
            break;
        case 's':
        case 'second':
        case 'seconds':
            return fromMs / 1000;
            break;
        case 'm':
        case 'minute':
        case 'minutes':
            return fromMs / 1000 / 60;
            break;
        case 'h':
        case 'hour':
        case 'hours':
            return fromMs / 1000 / 60 / 60;
            break;
        case 'd':
        case 'day':
        case 'days':
            return fromMs / 1000 / 60 / 60 / 24;
            break;
        case 'w':
        case 'week':
        case 'weeks':
            return fromMs / 1000 / 60 / 60 / 24 / 7;
            break;
        case 'month':
        case 'months':
            return fromMs / 1000 / 60 / 60 / 24 / 31;
            break;
        case 'y':
        case 'year':
        case 'years':
            return fromMs / 1000 / 60 / 60 / 24 / 365;
            break;
        default:
            throw new Error(`You try to convert "${from}" to "${to}" but this format does not exist... The valids formats are "ms,s,m,h,d,w,month,y"...`);
            break;
    }
}
__convertTime.MILLISECOND = 'ms';
__convertTime.SECOND = 's';
__convertTime.MINUTE = 'm';
__convertTime.HOUR = 'h';
__convertTime.DAY = 'd';
__convertTime.WEEK = 'w';
__convertTime.MONTH = 'month';
__convertTime.YEAR = 'y';
//# sourceMappingURL=convertTime.js.map