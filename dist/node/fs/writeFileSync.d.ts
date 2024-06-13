/**
 * @name                writeFileSync
 * @namespace           node.fs
 * @type                Function
 * @platform            node
 * @status              stable
 *
 * Write a file. If don't exist, will be created as well as the directory structure if needed... (sync)
 *
 * @param       {String}              path           The file path to write
 * @param       {String}              data          The data to write in the file
 * @param       {Object}              [options={}]  options are what you'd pass to [fs.writeFileSync()](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
 *
 * @todo        tests
 *
 * @snippet         __writeFileSync($1, $2)
 *
 * @example       js
 * import { __writeFileSync } from '@lotsof/sugar/fs';
 * __writeFileSync('my/cool/file.txt', 'Hello World');
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __writeFileSync(path: string, data: any, options?: {}): string;
