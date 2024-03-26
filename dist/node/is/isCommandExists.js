var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spawnSync } from 'child_process';
/**
 * @name            isCommandExists
 * @namespace       node.is
 * @type            Function
 * @async
 * @platform        node
 * @status          stable
 *
 * This function allows you to check if a command exists on the system where the script is running
 *
 * @todo        tests
 *
 * @param       {String}            command         The command to check like "ls", "node", etc...
 * @return      {Promise}                           A promise fullfiled once the check has finished with true of false as value
 *
 * @snippet         __isCommandExists($1)
 * await __isCommandExists($1)
 *
 * @example         js
 * import { __isCommandExists } from '@coffeekraken/sugar/is.js';
 * await  __isCommandExists('ls'); // => true
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isCommandExists(command) {
    return __awaiter(this, void 0, void 0, function* () {
        const isWin = process.platform === 'win32';
        const where = isWin ? 'where' : 'whereis';
        // check by version
        const versionOut = spawnSync(`${command} --version`, [], {
            encoding: 'utf-8',
            shell: true,
        });
        if (versionOut.stdout)
            return versionOut.stdout;
        const out = spawnSync(where + ' ' + command, [], {
            encoding: 'utf8',
            shell: true,
        });
        return out.stdout !== '';
    });
}
//# sourceMappingURL=isCommandExists.js.map