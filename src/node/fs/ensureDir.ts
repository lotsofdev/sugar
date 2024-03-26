import __fs from 'fs-extra';

/**
 * @name            ensureDir
 * @namespace       node.fs
 * @type            Function
 * @async
 * @platform        node
 * @status          stable
 *
 * Ensure that the passed directory exists. If not, will be created recursively... (async)
 *
 * @param       {String}              dir           The directory to ensure that it exists...
 * @return      {Promise}                           A promise that will be resolved once the directory has been created if needed...
 *
 * @todo        tests
 *
 * @snippet         __ensureDir($1)
 * await __ensureDir($1)
 *
 * @example       js
 * import { __ensureDir } from '@coffeekraken/sugar/fs.js';
 *  __ensureDir('my/cool/dir').then(() => {
 *    // do something...
 * });
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __ensureDir(dir: string): Promise<void> {
  return __fs.ensureDir(dir);
}
