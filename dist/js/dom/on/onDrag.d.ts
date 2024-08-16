/**
 * @name            onDrag
 * @namespace       js.dom.detect
 * @type            Function
 * @platform        js
 * @status          stable
 * @async
 *
 * Detect drag "gesture" with the mouse or touch
 *
 * @param       {HTMLElement}         elm         The HTMLElement on which to detect the swipe
 * @param       {Function}            cb          The function to call on swipe. The callback function has as parameter an object that containthe swipe direction like left, right, up and down
 * @param       {Number}              [threshold=100]       The swipe threshold
 *
 * @setting     {Number}      [maxSpeed=0.01]       The maximum speed
 *
 * @snippet         __onDrag($1, $2)
 * __onDrag($1, drag => {
 *     $2
 * });
 *
 * @todo      tests
 *
 * @example 	js
 * import { __onDrag } from '@lotsof/sugar/dom'
 * __onDrag($myElement, (drag) => {
 *    // do something...
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TOnDragTrackItem = {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    speedX: number;
    speedY: number;
};
export type TOnDragSettings = {
    maxSpeed: number;
};
export default function __onDrag($elm: HTMLElement, cb: Function, settings?: Partial<TOnDragSettings>): void;
