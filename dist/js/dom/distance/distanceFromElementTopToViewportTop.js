import __scrollTop from '../distance/scrollTop.js';
import __offsetFromViewport from '../offset/offsetFromViewport.js';
/**
 * @name            distanceFromElementTopToViewportTop
 * @namespace       js.dom.distance
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * This function take an element as parameter and returns you to distance it has
 * from the element top to the viewport top in pixels
 *
 * @param       {HTMLElement}       elm             The element you want to get the distance from
 * @return      {Number}                            The calculated distance
 *
 * @snippet         __distanceFromElementTopToViewportTop($1)
 *
 * @example         js
 * import { __distanceFromElementTopToViewportTop } from '@coffeekraken/sugar/dom';
 * __distanceFromElementTopToViewportTop(myElement); // => 23
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __distanceFromElementTopToViewportTop(elm) {
    const offsets = __offsetFromViewport(elm);
    const scrollTop = __scrollTop();
    // @ts-ignore
    return offsets.top - scrollTop;
}
//# sourceMappingURL=distanceFromElementTopToViewportTop.js.map