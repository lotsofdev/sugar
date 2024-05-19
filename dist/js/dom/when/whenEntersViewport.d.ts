/**
 * @name                whenEntersViewport
 * @namespace           js.dom.detect
 * @type                Function
 * @platform            js
 * @status              stable
 * @async
 *
 * Monitor an HTMLElement to be notified when it is enters in the viewport (1/3vh in the viewport), or in the viewport
 *
 * @feature       Promise based API
 * @feature       Some settings available to tweak the behavior
 *
 * @param 		{HTMLElement} 				elm 					The element to monitor
 * @param 		{Partial<IWhenEntersViewportSettings>} 					[settings={}] 		Some settings to tweak the detection behavior
 * @return 		(Promise<HTMLElement>) 											The promise that will be resolved when the element is in the viewport
 *
 * @setting         {String}        [offset='0px 0px -25% 0px']         An offset to detect the element entering in viewport earlier or later
 *
 * @snippet         __whenEntersViewport($1)
 * __whenEntersViewport($1).then(\$elm => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example 	js
 * import { __whenEntersViewport } from '@coffeekraken/sugar/dom'
 * __whenEntersViewport($myElement).then(($elm) => {
 * 		// do something with your element that has entered the viewport...
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IWhenEntersViewportSettings {
    offset: string | number | undefined;
}
export default function __whenEntersViewport(elm: HTMLElement, settings?: IWhenEntersViewportSettings): Promise<HTMLElement>;
