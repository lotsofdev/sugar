/**
 * @name            md5
 * @namespace       node.crypto
 * @type            Object
 * @platform        node
 * @status          stable
 *
 * Expose two function named "encrypt" and "decrypt" that you can use to process your content using the md5 algorithm
 *
 * @snippet         __md5.encrypt($1)
 *
 * @example         js
 * import { __md5 } from '@coffeekraken/sugar/crypto';
 * __md5.encrypt('hello world');
 *
 * @todo        tests
 *
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
declare const _default: {
    /**
     * @name        encrypt
     * @type          Function
     *
     * Encrypt
     *
     * @param       {String}      message         The message to encrypt
     * @return      {String}                      The encrypted string
     *
     * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
     */
    encrypt: (message: any) => any;
    /**
     * @name        decrypt
     * @type        Function
     *
     * Decrypt
     *
     * @param       {String}        message         The message to decrypt
     * @return      {String}                        The decrypted message
     *
     * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
     */
    decrypt: (message: any) => any;
};
export default _default;
