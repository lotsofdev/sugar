/**
 * @name      isHover
 * @namespace            js.is
 * @type      Function
 * @platform          js
 * @status        stable
 *
 * Check if the mouse is isHover the passed HTMLElement
 *
 * @param    {HTMLElement}    $elm    The HTMLElement to check
 *
 * @snippet         __isHover($1)
 *
 * @todo      tests
 *
 * @example    js
 * import { __isHover } from '@coffeekraken/sugar/dom'
 * const $myElm = document.querySelector('.my-elm')
 * if (__isHover($myElm)) {
 *   // do something
 * }
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isHover($elm: HTMLElement): boolean {
  return $elm.parentElement?.querySelector(':isHover') === $elm;
}
