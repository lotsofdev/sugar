import __getAnimationProperties from './getAnimationProperties';
export default function __getAnimationsFromElement($elm) {
    const properties = __getAnimationProperties($elm);
    const animations = [];
    properties.name.forEach((name, i) => {
        animations.push({
            name,
            duration: properties.duration[i],
            delay: properties.delay[i],
            timingFunction: properties.timingFunction[i],
            iterationCount: properties.iterationCount[i],
            direction: properties.direction[i],
            playState: properties.playState[i],
            fillMode: properties.fillMode[i],
        });
    });
    return animations;
}
//# sourceMappingURL=getAnimationsFromElement.js.map