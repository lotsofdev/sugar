// @ts-nocheck
var _a, _b;
import __SPromise from '@coffeekraken/s-promise';
/**
 * @name      detectInOutDirection
 * @namespace            js.dom.detection
 * @type      Function
 * @platform          js
 * @status              beta
 * @async
 *
 * Detect the mouse direction when entered on the passed element. The direction can be up, down, left or right and will be passed to the two callbacks available.
 *
 * @param    {HTMLElement}    $elm    The element to listen for mouseover and mouseout on
 * @return    {HTMLElement}    The $elm to maintain chainability
 *
 * @event       in          Emitted when the pointer enters the element
 * @event       out         Emitted when the pointer leaves the element
 *
 * @snippet         __detectInOutDirection($1)
 * __detectInOutDirection($1).on('in', direction => {
 *      $2
 * }).on('out', direction => {
 *      $3
 * });
 *
 * @todo      tests
 *
 * @example     js
 * import { __detectInOutDirection } from '@coffeekraken/sugar/dom';
 * const detector = __detectInOutDirection($myElm).on('in', (direction) => {
 *    // direction can be "up", "down", "left" or "right"
 * }).on('out', (direction) => {
 *    // direction can be "up", "down", "left" or "right"
 * });
 *
 * // cancel the detection process
 * detector.cancel();
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __detectInOutDirection($elm) {
    let pointerEnterHandler, pointerLeaveHandler;
    const promise = new __SPromise(({ resolve, reject, emit }) => {
        pointerEnterHandler = (e) => {
            emit('in', direction);
        };
        pointerLeaveHandler = (e) => {
            emit('out', direction);
        };
        // detect when pointerenter/leave the element
        $elm.addEventListener('pointerenter', pointerEnterHandler);
        $elm.addEventListener('pointerleave', pointerLeaveHandler);
    }).on('finally', () => {
        $elm.removeEventListener('pointerenter', pointerEnterHandler);
        $elm.removeEventListener('pointerleave', pointerLeaveHandler);
    });
    return promise;
}
let oldX = 0, oldY = 0, direction = null;
const threshold = 0;
try {
    (_a = document === null || document === void 0 ? void 0 : document.addEventListener) === null || _a === void 0 ? void 0 : _a.call(document, 'pointermove', (e) => {
        calculateDirection(e);
    });
    (_b = document === null || document === void 0 ? void 0 : document.addEventListener) === null || _b === void 0 ? void 0 : _b.call(document, 'pointerdown', (e) => {
        calculateDirection(e);
    });
}
catch (e) { }
function calculateDirection(e) {
    let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
    if (e.pageX < oldX - threshold) {
        directionX = 'left';
        diffX = oldX - e.pageX;
        oldX = e.pageX;
    }
    else if (e.pageX > oldX + threshold) {
        directionX = 'right';
        diffX = e.pageX - oldX;
        oldX = e.pageX;
    }
    if (e.pageY < oldY - threshold) {
        directionY = 'up';
        diffY = oldY - e.pageY;
        oldY = e.pageY;
    }
    else if (e.pageY > oldY + threshold) {
        directionY = 'down';
        diffY = e.pageY - oldY;
        oldY = e.pageY;
    }
    if (directionX && directionY) {
        direction = diffX > diffY ? directionX : directionY;
    }
    else if (directionX) {
        direction = directionX;
    }
    else if (directionY) {
        direction = directionY;
    }
    else {
        direction = null;
    }
}
//# sourceMappingURL=detectInOutDirection.js.map