/**
 * @name            scrollTop
 * @namespace       js.dom.distance
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Return the amount of scroll top that the user as made in the page
 *
 * @return      {Number}            The amount of scroll top that the user as made in the page
 *
 * @snippet         __scrollTop()
 *
 * @todo      tests
 *
 * @example     js
 * import { __scrollTop } from '@coffeekraken/sugar/dom';
 * __scrollTop();
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io) (https://olivierbossel.com)
 */
function scrollTop() {
    return (window.scrollY ||
        window.pageYOffset ||
        // @ts-ignore
        document.scrollTop ||
        document.body.scrollTop);
}
export default scrollTop;
//# sourceMappingURL=scrollTop.js.map