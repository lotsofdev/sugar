import AES from 'crypto-js/aes';
import utf8 from 'crypto-js/enc-utf8';
import parse from '../../shared/string/parse.js';
import toString from '../../shared/string/toString.js';

/**
 * @name            aes
 * @namespace       node.crypto
 * @type            Object
 * @platform        node
 * @status          stable
 *
 * Expose two function named "encrypt" and "decrypt" that you can use to process your content using the aes algorithm
 *
 * @todo            tests
 *
 * @snippet         __aes.encrypt($1)
 *
 * @example         js
 * import { __aes } from '@lotsof/sugar/crypto';
 * __aes.encrypt('hello world');
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default {
  /**
   * @name        encrypt
   * @type        Function
   *
   * Encrypt
   *
   * @param       {String}       message        The message to encrypt
   * @param       {String}       [key='coffeekraken.sugar.crypto.aes']       The secret key to encrypt
   * @return      {String}                       The encrypted message
   *
   * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
   */
  encrypt: function (message, key = 'coffeekraken.sugar.crypto.aes') {
    if (typeof message !== 'string') message = toString(message);
    return AES.encrypt(message, key).toString();
  },

  /**
   * @name        decrypt
   * @type        Function
   *
   * Decrypt
   *
   * @param       {String}      message         The message to decrypt
   * @param       {String}      [key='coffeekraken.sugar.crypto.aes']      The secret key to decrypt
   * @return      {String}                      The decrypted message
   *
   * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
   */
  decrypt: function (message, key = 'coffeekraken.sugar.crypto.aes') {
    const value = AES.decrypt(message, key).toString(utf8);
    return parse(value);
  },
};
