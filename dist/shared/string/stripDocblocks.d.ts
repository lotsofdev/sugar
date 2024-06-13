/**
 * @name            stripDocblocks
 * @namespace       shared.string
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function simply take a string and get rid of all docblocks
 *
 * @param       {String}            str         The string to process
 * @return      {String}                        The processed string
 *
 * @snippet         __stripDocblocks($1)
 *
 * @todo      tests
 *
 * @example         js
 * import { __stripDocblocks } from '@lotsof/sugar/string';
 * __stripDocblocks('...');
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __stripDocblocks(str: string): string;
