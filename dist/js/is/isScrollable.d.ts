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
export interface IIsScrollableSettings {
    x: boolean;
    y: boolean;
}
export default function __isScrollable($elm: HTMLElement, settings?: Partial<IIsScrollableSettings>): boolean;
