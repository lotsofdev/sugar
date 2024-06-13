/**
 * @name                copyFile
 * @namespace           js.clipboard
 * @type                Function
 * @platform            js
 * @async
 * @status              stable
 *
 * This function allows you to copy to the clipboard the passed file path/url
 *
 * @param       {String}            url            The file url copy to the clipboard
 * @return      {Promise}                          A promise fullfilled when the copy has been made correctly
 *
 * @todo     tests
 *
 * @snippet         __copyFile($1)
 *
 * @example         js
 * import { __copyFile } from '@lotsof/sugar/clipboard';
 * __copyFile('https://www.google.com/favicon.ico');
 *
 * @see             https://sentry.io/answers/how-do-i-copy-to-the-clipboard-in-javascript/#:~:text=To%20write%20text%20to%20the,in%20the%20active%20browser%20tab.
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default async function __copyFile(url: string): Promise<void> {
  const data = await fetch(url);
  const blob = await data.blob();
  return navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob,
    }),
  ]);
}
