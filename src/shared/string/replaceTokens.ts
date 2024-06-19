/**
 * @name                    replaceTokens
 * @namespace               js.string
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * This function takes as parameter a tokened string like "something [cool]", an object
 * of arguments/values and return the processed string with the tokens replaced by the arguments values.
 *
 * @param       {String}          string          The string to process
 * @param       {Object}          tokensObj         The arguments/value object
 * @param       {Object}          [settings={}]   A settings object to configure the parsing process
 * @return      {String}                          The processed string
 *
 * @setting     {String}        [regexp=\[([a-zA-Z0-9-_]+)\] The regexp to use to match the tokens
 * @setting     {Boolean}       [stripUndefined=true]       Specify if you want to strip the tokens that are not found in the tokensObj
 *
 * @snippet         (string) __replaceTokens($1, $2)
 * __replaceTokens($1, $2)
 *
 * @todo      Add setting to define tokens delimiter
 * @todo      Support multi level tokens like [something.cool]
 * @todo      tests
 *
 * @example     js
 * import { __replaceTokens } from '@lotsof/sugar/string';
 * __replaceTokens('hello [world]', { world: 'Coco' }); // => hello Coco
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
interface IReplaceTokensSettings {
  regexp?: string;
  stripUndefined?: boolean;
}

function replaceTokens(
  string: string,
  tokensObj: any,
  settings: IReplaceTokensSettings = {},
): string {
  settings = {
    regexp: '\\[([a-zA-Z0-9-_]+)\\]',
    stripUndefined: true,
    ...settings,
  };
  let tokens;
  const reg = new RegExp(settings.regexp ?? '\\[([a-zA-Z0-9-_]+)\\]', 'g');
  while ((tokens = reg.exec(string))) {
    if (tokensObj[tokens[1]] === undefined && !settings.stripUndefined)
      return '';
    string = string.replace(tokens[0], tokensObj[tokens[1]] || '');
  }

  if (settings.stripUndefined) {
    string = string.replace(reg, '');
  }

  return string;
}
export default replaceTokens;
