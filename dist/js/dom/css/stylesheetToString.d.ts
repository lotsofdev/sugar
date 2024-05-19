/**
 * @name                stylesheetToString
 * @namespace           js.css
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * This function take a StyleSheet instance and convert it to a simple string
 *
 * @todo        tests
 *
 * @param       {StyleSheet|StyleSheetList}        stalesheet      The StyleSheet instance to convert
 * @return      {String}                            The css string
 *
 * @snippet         __stylesheetToString($1)
 *
 * @example         js
 * import { __stylesheetToString } from '@coffeekraken/sugar/dom';
 * __stylesheetToString(document.stylesheets); // => body { ... }
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __stylesheetToString(stylesheet: StyleSheet | StyleSheetList): string;
