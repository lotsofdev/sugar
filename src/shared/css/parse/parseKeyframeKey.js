/**
 * @name            parseKeyframeKey
 * @namespace       js.css.parse
 * @type            Function
 * @platform        js
 * @platform        nonde
 * @status          beta
 * @private
 *
 * Parses KeyFrameRule.keyText to an array of integers holding keyframe percentages
 *
 * @param 		 {string}		 keyText			 KeyFrameRule.keyText to parse
 * @return 			{array}          					Array of percentages for this KeyFrameRule
 *
 * @todo      tests
 *
 * @snippet         __parseKeyframeKey($1)
 *
 * @example  	js
 * import { __parseKeyframeKey } from '@lotsof/sugar/css';
 * __parseKeyframeKey('from');
 *
 * @see             https://github.com/marionebl/jogwheel/blob/master/source/library/get-css-rules.js
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __parseKeyframeKey(keyText) {
    // Split multivalue key,
    return (keyText
        .split(',')
        // Trim any remaining whitespace
        .map((key) => key.trim())
        // "Understand" CSS keyText keywords
        .map((key) => key.replace('from', '0').replace('to', '100'))
        // Remove any math symbols
        .map((key) => key.replace('%', ''))
        // Parse to integer
        .map((key) => parseInt(key, 10)));
}
//# sourceMappingURL=parseKeyframeKey.js.map