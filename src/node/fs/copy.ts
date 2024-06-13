import __fs from 'fs-extra';

/**
 * @name        copy
 * @namespace            node.fs
 * @type          Function
 * @async
 * @platform        node
 * @status          stable
 *
 * Copy a file or directory (async)
 *
 * @param       {String}              src           The source path to copy
 * @param       {String}              dest          The destination path
 * @return      {Promise}                           A promise that will be resolved when the copy is completed
 *
 * @snippet         __copy($1, $2)
 * await __copy($1, $2)
 *
 * @example       js
 * import { __copy } from '@lotsof/sugar/fs';
 * await __copy('my/cool/file.jpg', 'my/new/file.jpg').then(() => {
 *    // do something on complete...
 * });
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __copy(src: string, dest: string): Promise<void> {
  return __fs.copy(src, dest);
}
