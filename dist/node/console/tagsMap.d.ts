/**
 * @name                tagsMap
 * @namespace           node.console
 * @type                Object
 * @platform            node
 * @status              stable
 * @private
 *
 * Store the tag->function map used in ```parseHtml``` function for example
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
declare const tagsMap: {
    black: (tag: any, content: any) => string;
    red: (tag: any, content: any) => string;
    green: (tag: any, content: any) => string;
    yellow: (tag: any, content: any) => string;
    blue: (tag: any, content: any) => string;
    magenta: (tag: any, content: any) => string;
    cyan: (tag: any, content: any) => string;
    white: (tag: any, content: any) => string;
    grey: (tag: any, content: any) => string;
    bgBlack: (tag: any, content: any) => string;
    bgRed: (tag: any, content: any) => string;
    bgGreen: (tag: any, content: any) => string;
    bgYellow: (tag: any, content: any) => string;
    bgBlue: (tag: any, content: any) => string;
    bgMagenta: (tag: any, content: any) => string;
    bgCyan: (tag: any, content: any) => string;
    bgWhite: (tag: any, content: any) => string;
    bold: (tag: any, content: any) => string;
    dim: (tag: any, content: any) => string;
    italic: (tag: any, content: any) => string;
    underline: (tag: any, content: any) => string;
    strike: (tag: any, content: any) => string;
    h1: (tag: any, content: any) => string;
    h2: (tag: any, content: any) => string;
    date: (tag: any, content: any) => string;
    time: (tag: any, content: any) => string;
    day: (tag: any, content: any) => string;
    days: (tag: any, content: any) => string;
    month: (tag: any, content: any) => string;
    months: (tag: any, content: any) => string;
    year: (tag: any, content: any) => string;
    years: (tag: any, content: any) => string;
    hour: (tag: any, content: any) => string;
    hours: (tag: any, content: any) => string;
    minute: (tag: any, content: any) => string;
    minutes: (tag: any, content: any) => string;
    second: (tag: any, content: any) => string;
    seconds: (tag: any, content: any) => string;
    br: (tag: any, content: any) => string;
};
export default tagsMap;
