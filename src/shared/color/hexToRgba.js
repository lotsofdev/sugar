/**
 * @name                    hexToRgba
 * @namespace               shared.color
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * Hex to RGBA
 *
 * @param	              {string}       	hex         		The hex string to convert
 * @return            	{object} 			                  	The rgba object representation
 *
 * @todo      tests
 *
 * @snippet         __hexToRgba($1)
 *
 * @example         js
 * import { __hexToRgba } from '@coffeekraken/sugar/color';
 * __hexToRgba('#ff00ff');
 *
 * @see         https://www.npmjs.com/package/colors-convert
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
function hexToRGBA(h) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (h.length == 4) {
        r = '0x' + h[1] + h[1];
        g = '0x' + h[2] + h[2];
        b = '0x' + h[3] + h[3];
        // 6 digits
    }
    else if (h.length == 7) {
        r = '0x' + h[1] + h[2];
        g = '0x' + h[3] + h[4];
        b = '0x' + h[5] + h[6];
    }
    return { r, g, b, a: 1 };
}
export default function __hexToRgba(hex) {
    // return hexToRgba(hex, 1);
    return hexToRGBA(hex);
}
//# sourceMappingURL=hexToRgba.js.map