import __fs from 'fs-extra';
/**
 * @name                move
 * @namespace           node.fs
 * @type                Function
 * @platform            node
 * @status              stable
 *
 * Moves a file or directory, even across devices (async)
 *
 * @param       {String}              src           The source path to move
 * @param       {String}              dest          The destination path
 * @return      {Promise}                           A promise that will be resolved once the file/directory has been moved...
 *
 * @todo        tests
 *
 * @snippet         __move($1, $2)
 * await __move($1, $2)
 *
 * @example       js
 * import { __move } from '@coffeekraken/sugar/fs.js';
 * await __move('my/cool/dir', 'another/place/for/directory').then(() => {
 *    // do something...
 * });
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __move(src, dest) {
    return __fs.move(src, dest);
}
//# sourceMappingURL=move.js.map