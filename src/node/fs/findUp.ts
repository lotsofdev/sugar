import * as __fs from 'fs';
import { globSync as __globSync } from 'glob';
import __isGlob from '../../shared/is/isGlob.js';

/**
 * @name            findUp
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          beta
 * @async
 *
 * This function simply walk across upper folders to search for a file
 * and returns you the first finded
 *
 * @param       {IFindUpSearch}         search          The name of the file you search
 * @param       {IFindUpSettings}       [settings={}]       An object of settings to configure your research
 * @return      {SFile|null}                                 An SFile instance or null if nothings founded
 *
 * @todo            tests
 *
 * @snippet         __findUp($1)
 * await __findUp($1)
 *
 * @example         js
 * import { __findUp } from '@lotsof/sugar/fs';
 * const file = await __findUp('myCoolFile.json', {});
 * console.log(file.path);
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */

export interface IFindUpSettings {
  symlinks?: boolean;
  cwd?: string;
  stopWhenFound?: boolean;
}

export default function __findUp(
  search: string,
  settings: IFindUpSettings,
): Promise<string[]> {
  settings = {
    symlinks: true,
    cwd: process.cwd(),
    stopWhenFound: true,
    ...settings,
  };

  return new Promise(async (resolve) => {
    const cwd = settings.cwd;
    // @ts-ignore
    let currentPath = cwd.split('/').filter((p) => p.trim() !== '');
    let foundedFiles: string[] = [];

    while (currentPath.length > 0) {
      const path = `/${currentPath.join('/')}`;

      if (__isGlob(search)) {
        let files = __globSync(search, {
          cwd: path,
          follow: settings.symlinks,
        });
        if (files && files.length) {
          files = files.map((f) => {
            return `${path}/${f}`;
          });
          foundedFiles = [...foundedFiles, ...files];
        }
      } else if (__fs.existsSync(`${path}/${search}`)) {
        foundedFiles.push(`${path}/${search}`);
      }
      // check if we need to stop when found
      if (settings.stopWhenFound && foundedFiles.length) {
        break;
      }
      // update the currentPath
      currentPath = currentPath.slice(0, -1);
    }

    // athe end
    return resolve(foundedFiles);
  });
}
