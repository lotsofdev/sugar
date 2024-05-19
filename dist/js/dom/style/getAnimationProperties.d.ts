/**
 * @name            getAnimationProperties
 * @namespace       js.dom.style
 * @type            Function
 * @platform        js
 * @status          beta
 *
 * Get the css animation properties from an HTMLElement in an object format
 *
 * @param 		{HTMLElement} 					elm  		The element to get the properties from
 * @return 		{Object} 									The animation properties
 *
 * @todo      tests
 *
 * @snippet         __getAnimationProperties($1)
 *
 * @example  	js
 * import { __getAnimationProperties } from '@coffeekraken/sugar/dom'
 * const props = __getAnimationProperties(myCoolHTMLElement);
 * // output format
 * // {
 * // 	name : ['animation1'],
 * // 	duration : [200],
 * // 	delay : [0],
 * // 	timingFunction : ['linear'],
 * // 	iterationCount : [1],
 * // 	direction : ['forward'],
 * // 	totalDuration : 200
 * // }
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IGetAnimationPropertiesObject {
    name: string;
    duration: number;
    delay: number;
    timingFunction: string;
    iterationCount: number;
    direction: string;
    fillMode: string;
    playState: string;
}
export interface IGetAnimationPropertiesResult {
    totalDuration: number;
    animations: IGetAnimationPropertiesObject[];
}
export default function __getAnimationProperties(elm: HTMLElement): IGetAnimationPropertiesResult;
