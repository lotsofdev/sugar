/**
 * @name            getTranslateProperties
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
 * @snippet         __getTranslateProperties($1)
 *
 * @example  	js
 * import { __getTranslateProperties } from '@coffeekraken/sugar/dom'
 * const props = __getTranslateProperties(myCoolHTMLElement);
 * // output format
 * // {
 * // 	x : 100,
 * // 	y : 0,
 * // 	z : 0
 * // }
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IGetTranslatePropertiesResult {
    x: number;
    y: number;
    z: number;
}
export default function __getTranslateProperties($elm: HTMLElement): IGetTranslatePropertiesResult;
