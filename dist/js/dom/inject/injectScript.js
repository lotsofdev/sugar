import __whenScriptLoaded from '../when/whenScriptLoaded.js';
/**
 * @name                injectScript
 * @namespace           js.dom.inject
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * Append a script tag either to the head or the body
 *
 * @param    {String}    src    The script src to load
 * @return    {Promise}    A promise resolved with the script tag when it has fully loaded
 *
 * @snippet         __injectScript($1)
 *
 * @todo      tests
 *
 * @example    js
 * import { __injectScript } from '@coffeekraken/sugar/dom'
 *  __injectScript('dist/js/app.js')
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __injectScript(src, $parent = document.body) {
    const $script = document.createElement('script');
    $script.src = src;
    $parent.appendChild($script);
    return __whenScriptLoaded($script);
}
//# sourceMappingURL=injectScript.js.map