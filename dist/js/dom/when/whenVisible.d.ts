/**
 * @name            whenVisible
 * @namespace       js.dom.detect
 * @type            Function
 * @platform        js
 * @status          stable
 * @async
 *
 * Monitor an HTMLElement to be notified when it is visible
 *
 * @feature       Promise based API
 *
 * @param 		{HTMLElement} 				$elm 		The element to monitor
 * @return 		(Promise<HTMLElement>) 								The promise that will be resolved when the element is visible
 *
 * @snippet         __whenVisible($1)
 * __whenVisible($1).then(\$elm => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example 	js
 * import { __whenVisible } from '@coffeekraken/sugar/dom'
 * __whenVisible(myCoolHTMLElement).then(($elm) => {
 * 		// do something with your element that is now visible
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IWhenVisibleSettings {
    whenVisible?: Function;
    whenInvisible?: Function;
    once: boolean;
}
export default function __whenVisible($elm: HTMLElement, settings?: Partial<IWhenVisibleSettings>): Promise<HTMLElement>;
