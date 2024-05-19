/**
 * @name            whenScriptLoaded
 * @namespace       js.dom.detect
 * @type            Function
 * @platform        js
 * @status          beta
 *
 * Detect when a script has been fully loaded
 *
 * @feature       Promise based API
 * @feature       Callback support
 *
 * @param    {HTMLScriptElement}    $script    The script element to detect the loading state
 * @param       {Function}      [cb=null]     A callback if you prefer
 * @return    {Promise}    The promise that will be resolved when the script is fully loaded
 *
 * @snippet         __whenScriptLoaded($1)
 * __whenScriptLoaded($1).then(\$script => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example    js
 * import { __whenScriptLoaded } from '@coffeekraken/sugar/dom'
 * __whenScriptLoaded($script).then(($script) => {
 *   // do something here
 * })
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __whenScriptLoaded($script: HTMLScriptElement, cb?: Function): Promise<HTMLScriptElement>;
