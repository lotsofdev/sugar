/**
 * @name            easeInQuad
 * @namespace       shared.easing
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Ease in quad function
 *
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 *
 * @snippet         __easeInQuad($1)
 *
 * @example         js
 * import { __easeInQuad } from '@coffeekraken/sugar/easing';
 * __easeInQuad(0.4);
 *
 * @todo      tests
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __easeInQuad(t) {
    return t * t;
}
//# sourceMappingURL=easeInQuad.js.map