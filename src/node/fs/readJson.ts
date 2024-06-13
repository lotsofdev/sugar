import * as __fs from 'fs';
import __readJsonSync from './readJsonSync.js';

/**
 * @name            readJson
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 * @async
 *
 * This function allows you to read a json file
 *
 * @param       {String}           path            The json file path to read
 * @return      {Object}                            The readed json
 *
 * @snippet         __readJson($1)
 * await __readJson($1)
 *
 * @example         js
 * import { __readJson } from '@lotsof/sugar/fs';
 * await __readJson('my-cool-json/file.json');
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __readJson(path: string): Promise<any> {
  if (!__fs.existsSync(path)) {
    throw new Error(
      `<red>[readJson]</red> Sorry but the passed file path "<cyan>${path}</cyan>" does not exists...`,
    );
  }
  return new Promise(async (resolve, reject) => {
    const json = __readJsonSync(path);
    resolve(json);
  });
}
