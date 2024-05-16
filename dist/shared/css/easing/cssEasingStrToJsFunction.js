import __bezierEasing from 'bezier-easing';
export default function __cssEasingStrToJsFunction(easing) {
    // linear easing by default
    let params = [0, 0, 1, 1];
    switch (easing) {
        case 'ease':
            params = [0.25, 1, 0.25, 1];
            break;
        case 'ease-in-out':
            params = [0.42, 0, 0.58, 1];
            break;
        case 'ease-in':
            params = [0.42, 0, 1, 1];
            break;
        case 'ease-out':
            params = [0, 0, 0.58, 1];
            break;
        case 'linear':
            break;
        default:
            params = easing
                .replace(/^cubic-bezier\(/, '')
                .replace(/\)$/, '')
                .split(',')
                .map((v) => parseFloat(v));
            break;
    }
    // @ts-ignore
    return __bezierEasing(...params);
}
//# sourceMappingURL=cssEasingStrToJsFunction.js.map