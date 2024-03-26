import __isValidPath from 'is-valid-path';

/**
 * @name                    isPath
 * @namespace               shared.is
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * Check if the passed string is a valid path or not
 *
 * @param         {String}            path              The path to check
 * @return        {Boolean}                             true if the path is valide, false if not
 *
 * @todo      tests
 *
 * @snippet         __isPath($1)
 *
 * @example       js
 * import { __isPath } from '@coffeekraken/sugar/is.js';
 * __isPath('hello/world'); // => true
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isPath(path: string): boolean {
  // check if the path is valid or not
  if (!__isValidPath(path)) return false;
  // otherwise, all is ok
  return true;
}
