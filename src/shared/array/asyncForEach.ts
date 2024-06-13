/**
 * @name                    asyncForEach
 * @namespace               shared.array
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * Allow to make some async foreach on your arrays
 *
 * @param         {Array}             array             The array to loop on
 * @param         {Function}          asyncFn           The async function to call on each items
 *
 * @snippet         __asyncForEach($1, $2)
 * await __asyncForEach($1, (item, idx) => {
 *      $2
 * });
 *
 * @example         js
 * import { __asyncForEach } from '@lotsof/sugar/array';
 * const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
 * __asyncForEach([0,1,2,3], async (item) => {
 *    await waitWor(50);
 *    console.log(item);
 * });
 * // 0
 * // 1
 * // 2
 * // 3
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
interface IAsyncForEach {
  (value: any, index: number, array: any[]): void;
}
export default async function __asyncForEach(
  array: any[],
  asyncFn: IAsyncForEach,
): Promise<void> {
  return new Promise(async (resolve) => {
    for (let index = 0; index < array.length; index++) {
      await asyncFn(array[index], index, array);
    }
    resolve();
  });
}
