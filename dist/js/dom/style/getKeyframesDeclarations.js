import __getCssDeclarations from './getCssDeclarations';
/**
 * @name            getKeyframesDeclarations
 * @namespace       js.dom.style
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Get all the keyframes declarations from the passed rules
 *
 * @param       {string}            animationName        CSS animationName to search KeyFrameRule declarations for
 * @param       {array}              rules               Array of CSSRules to search
 * @return      {CSSKeyframeRule}              Array of matching KeyFrameRules
 *
 * @todo      tests
 *
 * @snippet         __getKeyframesDeclarations($1)
 *
 * @example  	js
 * import { __getKeyframesDeclarations } from '@coffeekraken/sugar/dom';
 * __getKeyframesDeclarations('myCoolAnimation', [myCoolCssRules]);
 *
 * @see             https://github.com/marionebl/jogwheel/blob/master/source/library/get-keyframe-declarations.js
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function getKeyframesDeclarations(animationName, rules) {
    const keyframesNames = [];
    return __getCssDeclarations('keyframes', rules, (rule) => {
        if (keyframesNames.includes(rule.name))
            return false;
        keyframesNames.push(rule.name);
        return rule.name === animationName;
    });
}
//# sourceMappingURL=getKeyframesDeclarations.js.map