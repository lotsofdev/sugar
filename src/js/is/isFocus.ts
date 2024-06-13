/**
 * @name          isFocus
 * @namespace     js.is
 * @type          Function
 * @platform      js
 * @status        stable
 *
 * Check if the mouse is focus the passed HTMLElement
 *
 * @param    {HTMLElement}    $elm    The HTMLElement to check
 *
 * @snippet         __isFocus($1)
 *
 * @todo      tests
 *
 * @example    js
 * import { __isFocus } from '@lotsof/sugar/dom'
 * const $myElm = document.querySelector('.my-elm')
 * if (__isFocus($myElm)) {
 *   // do something
 * }
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isFocus($elm: HTMLElement): boolean {
  return $elm.parentElement?.querySelector(':focus') === $elm;
}
