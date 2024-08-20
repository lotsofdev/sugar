import __Mark from 'mark.js';

/**
 * @name            highlightText
 * @namespace       shared.string
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function allows you to highlight some text in a string or in an HTMLElement
 *
 * @param      {String|HTMLElement}          ctx         The string or HTMLElement in which to highlight the text
 * @param      {String|String[]|RegExp}      search      The text to highlight
 * @return      {String|HTMLElement}                    The processed string or HTMLElement
 *
 * @snippet         __highlightText($1, $2)
 *
 * @todo      tests
 *
 * @example         php
 * import { __highlightText } from '@lotsof/sugar/string';
 * __highlightText('Hello world', 'llo'); // => He<span class="-highlight">llo</span> world
 *
 * @see         https://markjs.io
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export type THighlightTextSettings = {
  class: string;
};

export default function __highlightText<T>(
  ctx: T,
  search: string | string[] | typeof RegExp,
  settings?: Partial<THighlightTextSettings>,
): T {
  const finalSettings: THighlightTextSettings = {
    class: '-highlight',
    ...(settings ?? {}),
  };
  let resType, internalCtx;

  if (typeof ctx === 'string') {
    internalCtx = document.createElement('div');
    internalCtx.innerHTML = ctx;
    resType = 'string';
  } else if (ctx instanceof HTMLElement) {
    internalCtx = ctx;
    resType = 'element';
  }

  const mark = new __Mark(internalCtx),
    markOptions = {
      className: finalSettings.class,
    };

  if (search instanceof RegExp) {
    mark.markRegExp(search, markOptions);
  } else if (Array.isArray(search) || typeof search === 'string') {
    mark.mark(search, markOptions);
  }

  if (resType === 'string') {
    return internalCtx.innerHTML;
  }

  return internalCtx;
}
