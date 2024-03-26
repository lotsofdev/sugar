import distanceBetween from './distanceBetween';
export default function __circleConstrain(center, radius, point) {
    const dist = distanceBetween(center, point);
    if (dist <= radius) {
        return point;
    }
    else {
        const x = point.x - center.x;
        const y = point.y - center.y;
        const radians = Math.atan2(y, x);
        return {
            x: Math.cos(radians) * radius + center.x,
            y: Math.sin(radians) * radius + center.y,
        };
    }
}
//# sourceMappingURL=circleConstrain.js.map