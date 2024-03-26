/**
 * @name            easeInCubic
 * @namespace       shared.easing
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Ease in cubic function
 *
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 *
 * @snippet         __easeInCubic($1)
 *
 * @example         js
 * import { __easeInCubic } from '@coffeekraken/sugar/easing';
 * __easeInCubic(0.4);
 *
 * @todo      tests
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __easeInCubic(t) {
    return t * t * t;
}
//# sourceMappingURL=easeInCubic.js.map