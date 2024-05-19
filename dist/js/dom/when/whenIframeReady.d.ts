/**
 * @name            whenIframeReady
 * @namespace       js.dom.detect
 * @type            Function
 * @platform        js
 * @status          beta
 * @async
 *
 * Wait until the passed iframe is ready to be used
 *
 * @param       {HTMLIframeElement}         $iframe          The iframe to wait on
 * @return 		{Promise<HTMLIframeElement>} 					A promise that will be resolved when an interaction has been made
 *
 * @snippet         __whenIframeReady($1)
 * __whenIframeReady($1).then(\$elm => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example  	js
 * import { __whenIframeReady } from '@coffeekraken/sugar/dom'
 * __whenIframeReady($myCoolIframe).then($iframe => {
 *      // do something...
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __whenIframeReady($iframe: HTMLIFrameElement): Promise<any>;
