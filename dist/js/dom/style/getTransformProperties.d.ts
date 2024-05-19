/**
 * @name            getTransformProperties
 * @namespace       js.dom.style
 * @type            Function
 * @platform        js
 * @status          beta
 *
 * Get a translate properties of an HTMLElement
 *
 * @param 		{HTMLElement} 					$elm  		The element to get the properties from
 * @return 		{Object} 									The translate x,y and z properties
 *
 * @todo      tests
 *
 * @snippet         __getTransformProperties($1)
 *
 * @example  	js
 * import { __getTransformProperties } from '@coffeekraken/sugar/dom'
 * const props = getTransformProperties(myCoolHTMLElement);
 * // output format
 * // {
 * // 	translateX : 100,
 * // 	translateY : 0,
 * // 	translateZ : 0,
 * //   rotateX: 0,
 * //   rotateY: 0,
 * //   rotateZ: 0
 * // }
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IGetTransformPropertiesResult {
    translateX: number;
    translateY: number;
    translateZ: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
}
declare function getTransformProperties($elm: HTMLElement): IGetTransformPropertiesResult;
export default getTransformProperties;
