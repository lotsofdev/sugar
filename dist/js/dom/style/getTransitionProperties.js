import __convertTime from '../../../shared/datetime/convertTime.js';
import __getStyleProperty from './getStyleProperty.js';
function splitIfNeeded(what, separator) {
    var _a;
    if ((_a = what.includes) === null || _a === void 0 ? void 0 : _a.call(what, separator)) {
        return what.split(separator).map((item) => item.trim());
    }
    return [what];
}
function getTransitionProperties(elm) {
    // get the transition properties
    const property = __getStyleProperty(elm, 'transition-property');
    const duration = __getStyleProperty(elm, 'transition-duration') || 0;
    const timingFunction = __getStyleProperty(elm, 'transition-timing-function');
    const delay = __getStyleProperty(elm, 'transition-delay');
    // return the transition object
    const props = {
        properties: splitIfNeeded(property, ','),
        durations: splitIfNeeded(duration, ',').map((value) => __convertTime(value, 'ms')),
        delays: splitIfNeeded(delay, ',').map((value) => __convertTime(value, 'ms')),
        timingFunctions: splitIfNeeded(timingFunction, ','),
    };
    const result = {
        transitions: [],
        totalDuration: 0,
    };
    for (let [i, property] of props.properties) {
        result.transitions.push({
            property,
            duration: props.durations[i],
            timingFunction: props.timingFunctions[i],
            delay: props.delays[i],
        });
    }
    let i = 0;
    const delays = [0].concat(props.delays);
    [0].concat(props.durations).forEach((val) => {
        if (val + delays[i] > result.totalDuration) {
            result.totalDuration = val + delays[i];
        }
        i++;
    });
    return result;
}
export default getTransitionProperties;
//# sourceMappingURL=getTransitionProperties.js.map