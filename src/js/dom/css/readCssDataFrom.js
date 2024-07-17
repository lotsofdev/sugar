/**
 * @name                readCssDataFrom
 * @namespace           js.dom.css
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * This function allows you to read some JSON data from the ":before|:after" pseudo class in the "content" property.
 *
 * @param       {HTMLElement}           [$elm=document.body]        The element from which to get data
 *
 * @snippet         __readCssDataFrom(document.body)
 *
 * @example         js
 * import { __readCssDataFrom } from '@lotsof/sugar/dom';
 * const data = __readCssDataFrom();
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function readCssDataFrom($elm, settings) {
    // const finalSettings: IReadCssDaraSettings = {
    //     ...(settings ?? {}),
    // };
    let data;
    // get from ":before" first
    const beforeStyle = window.getComputedStyle($elm, '::before');
    if (beforeStyle.content !== 'none') {
        try {
            // @TODO        check why we need to make JSON.parse 2 times...
            data = JSON.parse(JSON.parse(beforeStyle.content));
        }
        catch (e) { }
    }
    // if no data, check in ":after"
    if (!data) {
        const afterStyle = window.getComputedStyle($elm, '::after');
        if (afterStyle.content) {
            try {
                // @TODO        check why we need to make JSON.parse 2 times...
                data = JSON.parse(JSON.parse(afterStyle.content));
            }
            catch (e) { }
        }
    }
    // return the data or an empty object
    return data !== null && data !== void 0 ? data : {};
}
//# sourceMappingURL=readCssDataFrom.js.map