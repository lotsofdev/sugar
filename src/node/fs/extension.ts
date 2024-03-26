/**
 * @name                 extension
 * @namespace            node.fs
 * @type                 Function
 * @platform             node
 * @status               stable
 *
 * Return the passed file path extension
 *
 * @param           {String}            path                The file path to get the extension from
 * @return          {String}                                The file extension
 *
 * @todo        tests
 *
 * @snippet         __extension($1)
 *
 * @example         js
 * import { __extension } from '@coffeekraken/sugar/fs.js';
 * __extension('hello/world.jpg'); // => jpg
 *
 * @since         2.0.0
 * @author 	        Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __extension(path: string): string {
  const lastPart = path.split('/').pop() ?? '';
  if (!lastPart.includes('.')) return '';
  return path.split('.').pop() ?? '';
}
