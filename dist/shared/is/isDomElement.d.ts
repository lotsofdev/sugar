/**
 * @name                isDomElement
 * @namespace           js.is
 * @type                Function
 * @platform            js
 * @plarform            node
 * @status              stable
 *
 * Check if the passed element is a DOM element
 *
 * @param       {any}           element             The element to check
 * @return      {Boolean}                           true if is a DOM element, false if not
 *
 * @todo      tests
 *
 * @snippet         __isDomElement($1)
 *
 * @example    js
 * import { __isDomElement } from '@lotsof/sugar/dom'
 * __isDomElement($myElement);
 *
 * @see         https://stackoverflow.com/questions/384286/how-do-you-check-if-a-javascript-object-is-a-dom-object
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isDomElement(element: any): boolean;
