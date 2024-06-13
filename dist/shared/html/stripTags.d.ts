/**
 * @name            stripTags
 * @namespace       shared.html
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Strip tags of an html string.
 * This is a simple wrapper of the nice "striptags" package that you can find here: https://www.npmjs.com/package/striptags
 *
 * @param    {String}    html    The html string to process
 * @param    {String[]}    allowedTags    The tags that are allowed like ['a','p','h1','h2']...
 * @param     {String}    tagReplacement    A string with which you want to replace the tags
 * @return    {String}    The processed string without tags
 *
 * @todo      tests
 *
 * @snippet         __stripTags($1)
 *
 * @example    js
 * import { __stripTags } from '@lotsof/sugar/html'
 * __stripTags('<p><span>Hello</span> world</p>', '<span>') // <span>Hello</span> world
 *
 * @see       https://www.npmjs.com/package/striptags
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function stripTags(html: string, allowedTags?: string[], tagReplacement?: string): string;
