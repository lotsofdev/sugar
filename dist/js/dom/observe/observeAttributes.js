/**
 * @name                observeAttributes
 * @namespace           js.dom.observe
 * @type                Function
 * @platform            js
 * @status              stable
 * @async
 *
 * Observe attributes on an HTMLElement and get mutations through the SPromise instance
 *
 * @param 		{HTMLElement} 					target 		The element to observe
 * @param 		{MutationObserverInit} 			settings 	The mutation observer settings
 * @return 		{SPromise} 								The SPromise throught which you can have the mutations using the "then" callback
 *
 * @snippet         __observeAttributes($1)
 * __observeAttributes($1).on('attribute', mutation => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example  	js
 * import { __observeAttributes } from '@coffeekraken/sugar/dom'
 * __observeAttributes(myCoolHTMLElement).on('attribute', mutation => {
 * 		// do something with the mutation
 * });
 *
 * @see 		https://developer.mozilla.org/en/docs/Web/API/MutationObserver
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __observeAttributes(target, settings = {}) {
    let mutationObserver;
    const pro = new __SPromise(({ resolve, emit }) => {
        // create a new observer
        mutationObserver = new MutationObserver((mutations) => {
            let mutedAttrs = {};
            // loop on mutations
            mutations.forEach((mutation) => {
                // push mutation
                if (!mutedAttrs[mutation.attributeName]) {
                    emit('attribute', mutation);
                    mutedAttrs[mutation.attributeName] = true;
                }
            });
            mutedAttrs = {};
        });
        mutationObserver.observe(target, Object.assign({ attributes: true }, settings));
    });
    pro.on('finally', () => {
        mutationObserver.disconnect();
    });
    return pro;
}
//# sourceMappingURL=observeAttributes.js.map