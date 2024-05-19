/**
 * @name 		        circleConstrain
 * @namespace           shared.math
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Take as parameter a central point, a radius and a points to constrain inside the circle defined by the radius
 *
 * @param    {Vector2}    center    The center point of the circle
 * @param    {Number}    radius    The radius to constrain the point in
 * @param    {Vector2}    point    The point to constrain
 * @return    {Vector2}    The new constrained value for the point
 *
 * @todo      tests
 *
 * @snippet         __circleConstrain($1, $1)
 * __circleConstain({
 *      x: $1, y: $2
 * }, $3, {
 *      x: $4, y: $5
 * })
 *
 * @example    js
 * import { __circleConstrain } from '@coffeekraken/sugar/math'
 * __circleConstrain({
 * 	x: 10, y: 10
 * }, 10, {
 * 	x: 10, y: 5
 * })
 *
 * @see    https://stackoverflow.com/questions/8515900/how-to-constrain-movement-within-the-area-of-a-circle
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
interface ICircleConstrainPoint {
    x: number;
    y: number;
}
export default function __circleConstrain(center: ICircleConstrainPoint, radius: number, point: ICircleConstrainPoint): ICircleConstrainPoint;
export {};
