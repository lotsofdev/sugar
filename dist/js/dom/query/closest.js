import __querySelectorUp from './querySelectorUp.js';
/**
 * @name                closestElement
 * @namespace           js.dom.query
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * Go up the dom three to find the first element that matches the passed selector
 *
 * @param 		{HTMLElement} 					$elm  		The element to start on
 * @param 		{String|Function} 				selector 	A css selector to search for or a check function that will be used
 * @return 		{HTMLElement} 								The element found or null
 *
 * @snippet         __closest($1, $2)
 *
 * @todo      tests
 *
 * @example  	js
 * import { __closestElement } from '@lotsof/sugar/dom'
 * const closestElm =  __closestElement(myCoolElement, '.my-cool-class');
 * if (closestElm) {
 * 		// we have found en element that matches the selector
 * }
 * // the selector param can be a function that need to return either true or false like so:
 * closest(myCoolElement, (elm) => {
 *   return elm.hasAttribute('my-cool-attribute')
 * })
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default __querySelectorUp;
//# sourceMappingURL=closest.js.map