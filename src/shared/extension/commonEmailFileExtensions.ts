import { ICommonFileExtensionsSettings } from './commonFileExtensions.js';

/**
 * @name            commonEmailFileExtensions
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
 * @snippet         __commonEmailFileExtensions()
 *
 * @example         js
 * import { __commonEmailFileExtensions } from '@lotsof/sugar/extension';
 * const extensions = __commonEmailFileExtensions();
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __commonEmailFileExtensions(
  settings: Partial<ICommonFileExtensionsSettings> = {},
): string[] {
  const finalSettings: ICommonFileExtensionsSettings = {
    dot: false,
    exclude: [],
    ...settings,
  };
  return ['email', 'eml', 'emix', 'msg', 'oft', 'ost', 'pst', 'vcf']
    .filter((ext) => !finalSettings.exclude.includes(ext))
    .map((ext) => (finalSettings.dot ? `.${ext}` : ext));
}
