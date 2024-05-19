/**
 * @name                injectStylesheet
 * @namespace           js.dom.inject
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * Append a stylesheet link to the page head
 *
 * @param    {String}    href    THe url to the stylesheet
 * @return    {Promise}    A promise when the stylesheet is loaded with the link element as parameter
 *
 * @snippet         __injectStylesheet($1)
 *
 * @todo      tests
 *
 * @example    js
 * import { __injectStylesheet } from '@coffeekraken/sugar/dom'
 * __injectStylesheet('/dist/css/style.css')
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __injectStylesheet(href: string): Promise<HTMLLinkElement>;
