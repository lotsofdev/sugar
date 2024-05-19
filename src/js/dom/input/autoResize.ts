/**
 * @name            autoResize
 * @namespace       js.dom.input
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Automatically resize a textarea height
 *
 * @param 		{HTMLFormElement} 		$textarea 		The textarea to auto resize
 *
 * @todo      tests
 *
 * @snippet         __autoResize($1)
 *
 * @example 	js
 * import { __autoResize } from '@coffeekraken/sugar/dom';
 * __autoResize($textarea);
 *
 * @see             https://stackoverflow.com/a/56416714
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://olivierboss$input.com)
 */
export default function autoResize($textarea: HTMLTextAreaElement): void {
  $textarea.style.boxSizing = 'border-box';
  var offset = $textarea.offsetHeight - $textarea.clientHeight;
  $textarea.addEventListener('input', function (event) {
    // @ts-ignore
    event.target.style.height = 'auto';
    // @ts-ignore
    event.target.style.height = event.target.scrollHeight + offset + 'px';
  });
}
