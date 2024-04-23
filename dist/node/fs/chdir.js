/**
 * @name            chdir
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * This function allows you to change the process working directory.
 * If you make use of the `__spawn` sugar function, it will also change
 * the directory of the parent process if you call this function in a childProcess.
 *
 * @todo        tests
 *
 * @param       {String}            path            The folder path you want to go to
 *
 * @snippet         __chdir($1)
 *
 * @example         js
 * import { __chdir } from '@lotsof/sugar/fs';
 * __chdir('/my/cool/file.txt', 'Hello world');
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __chdir(path) {
    var _a;
    (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, {
        command: `chdir`,
        args: path,
    });
    process.chdir(path);
}
//# sourceMappingURL=chdir.js.map