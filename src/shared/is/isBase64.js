/**
 * @name                isBase64
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the passed value is a base 64 string
 *
 * @param    {Mixed}    value    The value to check
 * @return   {Boolean}   true if it's a Boolean, false if not
 *
 * @todo      tests
 *
 * @snippet         __isBase64($1)
 *
 * @example    js
 * import { __isBase64 } from '@coffeekraken/sugar/is'
 * if (__isBase64('wfwefwefiowjfiojwiefjwoiejfiowjfi9jef98je9f3j') {
 *   // do something
 * }
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isBase64(value) {
    if (typeof value !== 'string')
        return false;
    if (value === '' || value.trim() === '')
        return false;
    const reg = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    return reg.test(value);
}
//# sourceMappingURL=isBase64.js.map