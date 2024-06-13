/**
 * @name                offsetFromViewport
 * @namespace           js.dom.offset
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * Get the offset top and left of the passed element from the document top left point
 *
 * @param 		{HTMLElement} 					elm  		The element to get the offset from
 * @return 		{top: number; left: number;} 									The offset top and left object
 *
 * @snippet         __offsetFromViewport($1)
 *
 * @todo      tests
 *
 * @example  	js
 * import { __offsetFromViewport } from '@lotsof/sugar/dom'
 * const __offsetFromViewport = offset(myCoolElement);
 * // output : { top : 200, left : 300 }
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __offsetFromViewport(elm: HTMLElement): {
    top: number;
    left: number;
};
