import __whenLinkLoaded from './whenLinkLoaded';
/**
 * @name            whenStylesheetsReady
 * @namespace       js.dom.detect
 * @type            Function
 * @platform        js
 * @status          stable
 * @async
 *
 * Wait until all the HTMLLinkElement's are properly loaded
 *
 * @feature       Async promise based
 * @feature       Multiple stylesheets elements listening
 *
 * @param 		{Array}<HTMLLinkElement> 		[links=null] 			The HTMLLinkElement tags to process. If not passed, take the local stylesheets links
 * @return 		{Promise<void>} 										The promise that will be resolved when all the links are loaded
 *
 * @todo      tests
 *
 * @snippet         __whenStylesheetsReady($1)
 * __whenStylesheetsReady($1).then(stylesheets => {
 *      $2
 * });
 *
 * @example 	js
 * import { __whenStylesheetsReady } from '@coffeekraken/sugar/dom'
 * __whenStylesheetsReady([
 * 		myHTMLLinkElement1,
 * 		myHTMLLinkElement2
 * ]).then(stylesheets => {
 *      // do something...
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __whenStylesheetsReady(links) {
    if (!links) {
        links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    }
    const promises = [];
    [].forEach.call(links, ($link) => {
        promises.push(__whenLinkLoaded($link));
    });
    const allPromises = Promise.all(promises);
    return allPromises;
}
//# sourceMappingURL=whenStylesheetsReady.js.map