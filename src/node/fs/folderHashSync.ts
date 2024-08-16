import __deepMerge from '../../shared/object/deepMerge.js';
import __isDirectory from '../is/isDirectory.js';
import __fileHashSync from './fileHashSync.js';

import { BinaryToTextEncoding } from 'crypto';
import * as __fs from 'fs';
import __sha256 from '../../shared/crypto/sha256.js';

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
 * @param           {TFolderHashSettings}       [settings={}]       Some settings to configure your hash generation process
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
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export type TFolderHashIncludeSettings = {
  ctime: boolean;
};
export type TFolderHashSettings = {
  recursive: boolean;
  algo: string;
  digest: BinaryToTextEncoding;
  include: Partial<TFolderHashIncludeSettings>;
};

export default function __folderHashSync(
  folderPath: string,
  settings: Partial<TFolderHashSettings> = {},
): string {
  settings = __deepMerge(
    {
      recursive: true,
      algo: 'sha256',
      digest: 'base64',
      include: {
        ctime: false,
      },
    },
    settings ?? {},
  );
  const paths: string[] = [];

  function readDir(dir) {
    const files = __fs.readdirSync(dir);
    files.forEach((filePath) => {
      if (settings.recursive && __isDirectory(`${dir}/${filePath}`)) {
        return readDir(`${dir}/${filePath}`);
      }
      paths.push(`${dir}/${filePath}`);
    });
  }

  readDir(folderPath);

  const filesHashes: string[] = [];

  paths.forEach((path) => {
    if (__isDirectory(path)) return;
    filesHashes.push(__fileHashSync(path, settings));
  });

  return __sha256.encrypt(filesHashes.join('-'));
}
