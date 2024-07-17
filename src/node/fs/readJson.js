var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export default function __readJson(path) {
    if (!__fs.existsSync(path)) {
        throw new Error(`<red>[readJson]</red> Sorry but the passed file path "<cyan>${path}</cyan>" does not exists...`);
    }
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const json = __readJsonSync(path);
        resolve(json);
    }));
}
//# sourceMappingURL=readJson.js.map