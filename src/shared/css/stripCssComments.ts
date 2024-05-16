import __stripCssComments from 'strip-css-comments';

/**
 * @name                stripCssComments
 * @namespace           shared.css
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              beta
 *
 * This function simply remove all the css comments like:
 * - Multiline blocks css comments begining with /* *, ending with * /
 * - Single line comments begining with //
 *
 * @param       {String}        css         The css code to process
 * @param       {Object}      [settings={}]   An object of settings
 * @return      {String}                    The processed css code
 *
 * @setting     {Boolean}     [block=true]       Remove the blocks comments
 * @setting     {Boolean}     [line=true]       Remove the line comments
 *
 * @todo        doc
 *
 * @snippet         __stripCssComments($1)
 *
 * @example       js
 * import { __stripCssComments } from '@coffeekraken/sugar/css';
 * __stripCssComments(`
 * // something cool
 * body { background-color: red; }
 * `);
 * // body { background-color: red }
 *
 * @see         https://www.npmjs.com/package/strip-css-comments
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */

export interface IStripCssCommentsSettings {
  block: boolean;
  line: boolean;
}

export default function stripCssComments(
  css,
  settings?: IStripCssCommentsSettings,
): string {
  const finalSettings: IStripCssCommentsSettings = {
    block: true,
    line: true,
    ...(settings ?? {}),
  };
  if (finalSettings.block) {
    // css = css.replace(/\/\*{2}([\s\S]+?)\*\//g, '');
    css = __stripCssComments(css, {
      preserve: false,
    });
  }
  if (finalSettings.line) {
    css = css.replace(/^[\s]{0,99999999}\/\/.*$/gm, '');
  }
  return css;
}
