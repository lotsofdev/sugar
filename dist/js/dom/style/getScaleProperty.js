import * as rematrix from 'rematrix';
export default function __getScaleProperty($elm) {
    if (!window.getComputedStyle)
        return;
    const style = getComputedStyle($elm);
    const transform = style.transform ||
        style.webkitTransform ||
        // @ts-ignore
        style.mozTransform ||
        // @ts-ignore
        style.msTransform;
    if (!transform)
        return;
    const matrix = rematrix.fromString(transform).toString();
    var values = matrix.split(','), pi = Math.PI, sinB = parseFloat(values[8]), b = Math.round((Math.asin(sinB) * 180) / pi), cosB = Math.cos((b * pi) / 180), matrixVal10 = parseFloat(values[9]), a = Math.round((Math.asin(-matrixVal10 / cosB) * 180) / pi), matrixVal1 = parseFloat(values[0]), c = Math.round((Math.acos(matrixVal1 / cosB) * 180) / pi);
    return {
        x: a,
        y: b,
        z: c,
    };
}
//# sourceMappingURL=getScaleProperty.js.map