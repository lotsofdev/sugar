/**
 * @name            dirname
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * Return the dirname the same as the __dirname cjs variable.
 * The only difference is that it's a function and you need to pass the "import" variable
 * from the filename in which you use this...
 *
 * @return      {String}                            The dirname path
 *
 * @snippet         __dirname()
 *
 * @todo        tests
 *
 * @example             js
 * import { __dirname } from '@coffeekraken/sugar/fs';
 * __dirname();
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __dirname(): string;
