import { ICommonFileExtensionsSettings } from './commonFileExtensions.js';

/**
 * @name            commonWebFileExtensions
 * @namespace       shared.extension
 * @type            Function
 * @platform        node
 * @platform        js
 * @status          stable
 *
 * This function allows you to get an array of common text file extensions with or without the dot
 *
 * @param       {Boolean}           withDot          If true, the dot will be added to the extension
 * @return     {Array<String>}                           The array of extensions
 *
 * @snippet         __commonWebFileExtensions()
 *
 * @example         js
 * import { __commonWebFileExtensions } from '@coffeekraken/sugar/extension.js';
 * const extensions = __commonWebFileExtensions();
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __commonWebFileExtensions(
  settings: Partial<ICommonFileExtensionsSettings> = {},
): string[] {
  const finalSettings: ICommonFileExtensionsSettings = {
    dot: false,
    exclude: [],
    ...settings,
  };
  return [
    'asp',
    'cer',
    'cfm',
    'cgi',
    'pl',
    'css',
    'htm',
    'html',
    'js',
    'jsp',
    'part',
    'php',
    'py',
    'rss',
    'xhtml',
  ]
    .filter((ext) => !finalSettings.exclude.includes(ext))
    .map((ext) => (finalSettings.dot ? `.${ext}` : ext));
}
