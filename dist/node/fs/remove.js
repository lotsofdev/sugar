import __fs from 'fs-extra';
/**
 * @name            remove
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing. Like rm -rf (async)
 *
 * @param       {String}              path           The file/directory path to delete
 * @return      {Promise}                           A promise that will be resolved when the remove is completed
 *
 * @todo        tests
 *
 * @snippet         __remove($1)
 * await __remove($1)
 *
 * @example       js
 * import { __remove } from '@lotsof/sugar/fs';
 * await __remove('my/cool/file.json').then(() => {
 *    // do something on complete...
 * });
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __remove(path) {
    return __fs.remove(path);
}
//# sourceMappingURL=remove.js.map