/**
 * @name            positionFromEvent
 * @namespace       js.dom.position
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Get the position from an event "touchstart", "touchmove", "touchend", "mousedown", "mousemove" or "mouseup".
 *
 * @param 		{MouseEvent|TouchEvent} 					e  		The event to get the position from
 * @return 		{x: number; y: number;} 									The absolute position of the event
 *
 * @snippet         __positionFromEvent($1)
 *
 * @todo      tests
 *
 * @example  	js
 * import { __positionFromEvent } from '@coffeekraken/sugar/dom'
 * __positionFromEvent(e);
 * // output : { x, 230, y: 122 }
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __positionFromEvent(e) {
    let x, y;
    if (e.type == 'touchstart' ||
        e.type == 'touchmove' ||
        e.type == 'touchend' ||
        e.type == 'touchcancel') {
        // @ts-ignore
        const evt = typeof e.originalEvent === 'undefined' ? e : e.originalEvent;
        const touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    }
    else if (e.type == 'mousedown' ||
        e.type == 'mouseup' ||
        e.type == 'mousemove' ||
        e.type == 'mouseover' ||
        e.type == 'mouseout' ||
        e.type == 'mouseenter' ||
        e.type == 'mouseleave') {
        // @ts-ignore
        x = e.clientX;
        // @ts-ignore
        y = e.clientY;
    }
    return {
        x,
        y,
    };
}
//# sourceMappingURL=positionFromEvent.js.map