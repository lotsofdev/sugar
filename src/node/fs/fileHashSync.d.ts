import { BinaryToTextEncoding } from 'crypto';
/**
 * @name            fileHashSync
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * This function allows you to get back an integrity hash for the passed file.
 * This mean that if a file returns the same integrity hash twice, the folder or files in it
 * has not been updated...
 *
 * @param           {String}            filePath      The folder path you want to get the hash back
 * @param           {IFileHashSettings}       [settings={}]       Some settings to configure your hash generation process
 * @return          {String}                            The calculated folder hash
 *
 * @setting         {String}            [algo='sha356']             The algorithm to use
 * @setting         {BinaryToTextEncoding}      [digest='base64']       How to digest the hash
 *
 * @todo            tests
 *
 * @snippet         __fileHashSync($1)
 *
 * @example         js
 * import { __fileHashSync } from '@lotsof/sugar/fs';
 * __fileHashSync('my/cool/folder'); // => YZOrKDx9LCLd8X39PoFTflXGpRU=,
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IFileHashIncludeSettings {
    ctime: boolean;
}
export interface IFileHashSettings {
    algo: string;
    digest: BinaryToTextEncoding;
    include: Partial<IFileHashIncludeSettings>;
}
export default function __fileHashSync(filePath: string, settings?: Partial<IFileHashSettings>): string;
