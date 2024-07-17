/**
 * @name                exists
 * @namespace           node.fs
 * @type                Function
 * @async
 * @platform            node
 * @status              stable
 *
 * This function simply check if the path passed exists.
 * You can specify what you want to take care of using the settings object
 *
 * @param       {String}        path        The path you want to check
 * @param       {IExistsSettings}       [settings={}]       Some settings for what you want to take care of
 * @return      {Boolean}                       true if exists, false if not
 *
 * @setting       {Boolean}       [directory=true]      Specify if you want to take care of directories
 * @setting         {Boolean}       [file=true]         Specify if you want to take care of files
 * @setting         {Boolean}       [symlink=true]      Specify if you want to take care of symlinks
 *
 * @todo        tests
 *
 * @snippet         __exists($1)
 * await __exists($1)
 *
 * @example         js
 * import { __exists } from '@lotsof/sugar/fs';
 *  __exists('/something/cool.txt'); // => true
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IExistsSettings {
    directory: boolean;
    file: boolean;
    symlink: boolean;
}
export default function __exists(path: string, settings?: Partial<IExistsSettings>): Promise<boolean>;
