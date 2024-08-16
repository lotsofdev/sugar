/**
 * @name            iframeAutoSize
 * @namespace       js.dom.iframe
 * @type            Function
 * @platform        js
 * @status          stable
 * @async
 *
 * This function allows you to resize an iframe to fit its content.
 *
 * @param           {HTMLElement}           obj           The iframe element to resize
 * @param           {TIFrameAutoSizeSettings}           [settings={}]           Some settings to configure your iframe auto size
 *
 * @setting        {Boolean}         [width=true]         Specify if you want to resize the width of the iframe
 * @setting        {Boolean}         [height=true]        Specify if you want to resize the height of the iframe
 *
 * @snippet         __iframeAutoSize($1)
 * __iframeAutoSize($1, $2);
 *
 * @todo      tests
 *
 * @example  	js
 * import { __iframeAutoSize } from '@lotsof/sugar/dom';
 * __iframeAutoSize($1, $2);
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TIFrameAutoSizeSettings = {
    width?: boolean;
    height?: boolean;
};
export default function __iframeAutoSize($iframe: HTMLIFrameElement, settings?: TIFrameAutoSizeSettings): void;
