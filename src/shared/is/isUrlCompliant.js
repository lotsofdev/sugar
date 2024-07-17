import __urlCompliant from '../string/urlCompliant.js';
/**
 * @name            isUrlCompliant
 * @namespace       shared.string
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function check if the passed string is url compliant.
 * This mean that it has no spaces, and no special characters
 *
 * @param       {String}        string         The string to process
 * @return      {Boolean}                       true if compliant, false if not
 *
 * @todo      tests
 *
 * @snippet         __isUrlCompliant($1)
 *
 * @example         php
 * import { __isUrlCompliant } from '@lotsof/sugar/string';
 * __isUrlCompliant('Hello world'); // false
 * __isUrlCompliant('/something/cool'); // true
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isUrlCompliant(str) {
    return str === __urlCompliant(str);
}
//# sourceMappingURL=isUrlCompliant.js.map