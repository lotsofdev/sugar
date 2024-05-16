import __isScrollable from '../../is/isScrollable.js';
import __querySelectorUp from './querySelectorUp.js';
/**
 * @name                closestScrollable
 * @namespace           js.dom.query
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * Go up the dom three to find the first element that is scrollable.
 * The default scrollable element is the body
 *
 * @param 		{HTMLElement} 					$elm  		The element to start on
 * @return 		{HTMLElement|undefined} 								The element found or undefined
 *
 * @snippet         __closestScrollable($1)
 *
 * @todo      tests
 *
 * @example  	js
 * import { __closestScrollable } from '@coffeekraken/sugar/dom';
 * __closestScrollable($myElement);
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __closestScrollable($elm) {
    const res = __querySelectorUp($elm, ($e) => __isScrollable($e));
    return res;
}
//# sourceMappingURL=closestScrollable.js.map