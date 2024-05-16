/**
 * @name      isScrollable
 * @namespace            js.is
 * @type      Function
 * @platform          js
 * @status        stable
 *
 * Check if the passed element is scrollable or not
 *
 * @return    {Boolean}    true if is scrollable, false if not
 *
 * @snippet         __isScrollable($1)
 *
 * @todo      tests
 *
 * @example    js
 * import { __isScrollable } from '@coffeekraken/sugar/dom'
 * if (__isScrollable($myElement)) {
 *   // do something
 * }
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isScrollable($elm, settings) {
    var _a;
    settings = Object.assign({ x: true, y: true }, (settings !== null && settings !== void 0 ? settings : {}));
    // check only Element nodes
    if (!($elm instanceof Element)) {
        return false;
    }
    const style = ((_a = window.parent) !== null && _a !== void 0 ? _a : window).getComputedStyle($elm);
    var overflowY = style.overflowY.trim();
    var overflowX = style.overflowX.trim();
    const dir = {
        vertical: (overflowY === 'scroll' || overflowY === 'auto') &&
            $elm.scrollHeight > $elm.clientHeight,
        horizontal: (overflowX === 'scroll' || overflowX === 'auto') &&
            $elm.scrollWidth > $elm.clientWidth,
    };
    if (settings.x && dir.horizontal)
        return true;
    if (settings.y && dir.vertical)
        return true;
    return false;
}
//# sourceMappingURL=isScrollable.js.map