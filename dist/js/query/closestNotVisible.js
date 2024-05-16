// @ts-nocheck
import __isVisible from '../is/isVisible';
/**
 * @name        closestNotVisible
 * @namespace            js.dom.query
 * @type      Function
 * @platform          js
 * @status        beta
 *
 * Go up the dom three to find the first element that is not visible.
 * Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none
 *
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @return 		{HTMLElement} 								The element found or null
 *
 * @snippet         __closestNotVisible($1)
 *
 * @todo      interface
 * @todo      doc
 * @todo      tests
 *
 * @example  	js
 * import { __closestNotVisible } from '@coffeekraken/sugar/dom'
 * const closestElm =  __closestNotVisible(myCoolElement);
 * if (closestElm) {
 * 		// we have found en element that is not visible
 * }
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __closestNotVisible(elm) {
    const originalElm = elm;
    elm = elm.parentNode;
    while (elm && elm != originalElm.ownerDocument) {
        if (!__isVisible(elm)) {
            return elm;
        }
        elm = elm.parentNode;
    }
    return null;
}
//# sourceMappingURL=closestNotVisible.js.map