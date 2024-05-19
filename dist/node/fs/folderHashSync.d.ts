/// <reference types="node" resolution-mode="require"/>
import { BinaryToTextEncoding } from 'crypto';
/**
 * @name            folderHashSync
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * This function allows you to get back an integrity hash for the passed folder.
 * This mean that if a folder returns the same integrity hash twice, the folder or files in it
 * has not been updated...
 *
 * @param           {String}            folderPath      The folder path you want to get the hash back
 * @param           {IFolderHashSettings}       [settings={}]       Some settings to configure your hash generation process
 * @return          {String}                            The calculated folder hash
 *
 * @setting         {Boolean}           [recursive=true]            Specify if you want to generate a hash using also the children or not
 * @setting         {String}            [algo='sha356']             The algorithm to use
 * @setting         {BinaryToTextEncoding}      [digest='base64']       How to digest the hash
 *
 * @snippet         __folderHashSync($1)
 *
 * @example         js
 * import { __folderHashSync } from '@lotsof/sugar/fs';
 * __folderHashSync('my/cool/folder'); // => YZOrKDx9LCLd8X39PoFTflXGpRU=,
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IFolderHashIncludeSettings {
    ctime: boolean;
}
export interface IFolderHashSettings {
    recursive: boolean;
    algo: string;
    digest: BinaryToTextEncoding;
    include: Partial<IFolderHashIncludeSettings>;
}
export default function __folderHashSync(folderPath: string, settings?: Partial<IFolderHashSettings>): string;
