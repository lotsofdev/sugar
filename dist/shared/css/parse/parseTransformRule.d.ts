/**
 * @name            parseTransformRule
 * @namespace       js.css.parse
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          beta
 * @private
 *
 * Parse the transform rule of an element and returns a simple object with each properties separated.
 *
 * @param 		 {string}		 transformStr	            The transform string to parse
 * @return        {TParseTransformRuleResult}               An object with all the parsed transform properties
 *
 * @todo      tests
 *
 * @example  	js
 * import { __parseTransformRule } from '@lotsof/sugar/css';
 * __parseTransformRule('translate(-100px, 200rem));
 *
 * @see             https://github.com/marionebl/jogwheel/blob/master/source/library/get-css-rules.js
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TParseTransformRuleResult = {
    scale: string | number;
    scaleX: string | number;
    scaleY: string | number;
    scaleZ: string | number;
    translateX: string | number;
    translateY: string | number;
    translateZ: string | number;
    rotate: string | number;
    rotateX: string | number;
    rotateY: string | number;
    rotateZ: string | number;
    skew: string | number;
    skewX: string | number;
    skewY: string | number;
};
export default function __parseTransformRule(transformStr: string): TParseTransformRuleResult;
