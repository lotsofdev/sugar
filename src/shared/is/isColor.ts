/**
 * @name                isColor
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the passed value is a color
 *
 * @param 		{Mixed} 		value 		The value to check
 * @return 		{Boolean} 					The check result
 *
 * @todo      tests
 *
 * @snippet         __isColor($1)
 *
 * @example 	js
 * import { __isColor } from '@lotsof/sugar/is';
 * __isColor('red') => true
 * __isColor('#fff') => true
 * __isColor('hello') => false
 *
 * @see 		http://stackoverflow.com/questions/6386090/validating-css-color-names
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isColor(value: any): boolean {
  try {
    const ele = document.createElement('div');
    ele.style.color = value;
    return ele.style.color.split(/\s+/).join('').toLowerCase() !== '';
  } catch (e) {}

  if (typeof value !== 'string') return false;

  const res =
    value.match(/^#[a-zA-Z0-9]{3,6}$/) ||
    value.match(
      /^rgba\([0-9]{1,3}(\s+)?,(\s+)?[0-9]{1,3}(\s+)?,(\s+)?[0-9]{1,3}(\s+)?,(\s+)?[0-9]{1,3}\)$/,
    ) ||
    value.match(
      /^rgb\([0-9]{1,3}(\s+)?,(\s+)?[0-9]{1,3}(\s+)?,(\s+)?[0-9]{1,3}\)$/,
    ) ||
    value.match(
      /^hsl\([0-9]{1,3}%?(\s+)?,(\s+)?[0-9]{1,3}%?(\s+)?,(\s+)?[0-9]{1,3}%?(\s+)?\)$/,
    ) ||
    value.match(
      /^hsv\([0-9]{1,3}%?(\s+)?,(\s+)?[0-9]{1,3}%?(\s+)?,(\s+)?[0-9]{1,3}%?(\s+)?\)$/,
    );

  return res !== null;
}
