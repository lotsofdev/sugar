/**
 * @name            getScaleProperty
 * @namespace       js.dom.style
 * @type            Function
 * @platform        js
 * @status          beta
 *
 * Get a scale properties of an HTMLElement
 *
 * @param 		{HTMLElement} 					$elm  		The element to get the properties from
 * @return 		{Number}                                     The scale property
 *
 * @todo      tests
 *
 * @snippet         __getScaleProperty($1)
 *
 * @example  	js
 * import { __getScaleProperty } from '@coffeekraken/sugar/dom'
 * const props = __getScaleProperty(myCoolHTMLElement);
 * // output format
 * // 2
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IGetScalePropertyResult {
    x: number;
    y: number;
    z: number;
}
export default function __getScaleProperty($elm: HTMLElement): IGetScalePropertyResult | undefined;
