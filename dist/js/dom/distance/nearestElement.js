import __distanceBetween from '../../../shared/math/distanceBetween.js';
export default function __nearestElement($from, $elements, settings) {
    const finalParams = Object.assign({}, (settings !== null && settings !== void 0 ? settings : {}));
    let $nearestElement = null, nearestDistance = Infinity;
    const fromElmBound = $from.getBoundingClientRect();
    for (let [i, $elm] of Object.entries($elements)) {
        if ($elm === $from) {
            continue;
        }
        const elmBound = $elm.getBoundingClientRect();
        let distance;
        switch (finalParams.direction) {
            case 'top':
                if (elmBound.top > fromElmBound.top) {
                    continue;
                }
                break;
            case 'right':
                if (elmBound.left < fromElmBound.right) {
                    continue;
                }
                break;
            case 'bottom':
                if (elmBound.bottom < fromElmBound.bottom) {
                    continue;
                }
                break;
            case 'left':
                if (elmBound.right > fromElmBound.left) {
                    continue;
                }
                break;
        }
        distance = __distanceBetween(fromElmBound, elmBound);
        if (distance < nearestDistance) {
            nearestDistance = distance;
            $nearestElement = $elm;
        }
    }
    return $nearestElement;
}
//# sourceMappingURL=nearestElement.js.map