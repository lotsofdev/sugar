/**
 * @name                        parseRgba
 * @namespace                   shared.color
 * @type                        Function
 * @platform                    js
 * @platform                    node
 * @status                      stable
 *
 * Parse RGBA string and return an object
 *
 * @param 	          {string}	            rgbaString		            The rgba string (rgba(r,g,b,a)) to parse
 * @return 	          {object} 				                              	The rgba object representation
 *
 * @todo      tests
 *
 * @snippet         __parseRgba($1)
 *
 * @example           js
 * import { __parseRgba } from '@lotsof/sugar/color';
 * __parseRgba('rgba(20,10,100,20)');
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __parseRgba(rgbaString) {
    rgbaString = rgbaString.toLowerCase();
    const string = rgbaString
        .replace('rgba(', '')
        .replace('rgb(', '')
        .replace(')', '')
        .replace(/\s/g, '');
    const array = string.split(',');
    return {
        r: parseInt(array[0]),
        g: parseInt(array[1]),
        b: parseInt(array[2]),
        a: array[3] ? parseInt(array[3]) : 1,
    };
}
//# sourceMappingURL=parseRgba.js.map