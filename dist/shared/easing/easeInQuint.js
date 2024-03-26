/**
 * @name            easeInQuint
 * @namespace       shared.easing
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Ease in quint function
 *
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 *
 * @snippet         __easeInQuint($1)
 *
 * @example         js
 * import { __easeInQuint } from '@coffeekraken/sugar/easing.js';
 * __easeInQuint(0.4);
 *
 * @todo      tests
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __easeInQuint(t) {
    return t * t * t * t * t;
}
//# sourceMappingURL=easeInQuint.js.map