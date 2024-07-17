/**
 * @name        isMobile
 * @namespace            js.is
 * @type      Function
 * @platform          js
 * @status        stable
 *
 * Detect if is a mobile device (phone or tablet)
 *
 * @return    {Boolean}    true if is a mobile, false if not
 *
 * @feature         Take the theme.media.queries.mobile.maxWidth in consideration if accessible
 *
 * @todo      integrate some kind of media query check
 * @todo      tests
 *
 * @snippet         __isMobile()
 *
 * @example 	js
 * import { __isMobile } from '@lotsof/sugar/is'
 * if (__isMobile()) {
 *   // do something cool...
 * }
 *
 * @see       https://blog.devgenius.io/4-ways-to-detect-mobile-browsers-in-javascript-943b66657524
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isMobile() {
    // touch event
    if (!('ontouchstart' in document.documentElement))
        return false;
    // orientation
    if (window.orientation === undefined)
        return false;
    // match media
    const maxWidth = 639;
    if (!window.matchMedia(`only screen and (max-width: ${maxWidth}px)`).matches) {
        return false;
    }
    // limited accuracy
    if (!window.matchMedia('(pointer: coarse)').matches)
        return false;
    // it seems that it's a mobile
    return true;
}
//# sourceMappingURL=isMobile.js.map