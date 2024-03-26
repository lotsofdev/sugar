import __parseAuthorString from './parseAuthorString.js';
/**
 * @name                    formatPackageJson
 * @namespace               shared.package
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * This function simply take a package.json JSON formatted object and standardize
 * some fields like the "author" one to be sure it is an object at the end,
 * the "contributors" array the same way as the "author" one, etc... Here's the list
 * of processed actions:
 * 1. Transform the string version of the "author" field into an object with the properties "name", "email" and "url"
 * 2. Transform the string version of the "contributors" field into an object with the properties "name", "email" and "url"
 *
 * @param       {Object}        json        The json to process
 * @return      {Object}                    The standardized json
 *
 * @todo      tests
 *
 * @snippet         __formatPackageJson($1)
 *
 * @example       js
 * import { __formatPackageJson } from '@coffeekraken/sugar/package.js';
 * __formatPackageJson({
 *    "author": "Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)"
 * }); // => {
 *    "author": {
 *      "name": "Olivier Bossel",
 *      "email": "olivier.bossel@gmail.com",
 *      "url": "https://olivierbossel.com"
 *    }
 * }
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __formatPackageJson(json) {
    // author
    if (json.author && typeof json.author === 'string') {
        json.author = __parseAuthorString(json.author);
    }
    else if (json.author && Array.isArray(json.author)) {
        json.author = json.author.map((string) => {
            if (typeof string === 'string') {
                return __parseAuthorString(string);
            }
            return string;
        });
    }
    // contributors
    if (json.contributors && typeof json.contributors === 'string') {
        json.contributors = __parseAuthorString(json.contributors);
    }
    else if (json.contributors && Array.isArray(json.contributors)) {
        json.contributors = json.contributors.map((string) => {
            if (typeof string === 'string') {
                return __parseAuthorString(string);
            }
            return string;
        });
    }
    return json;
}
//# sourceMappingURL=formatPackageJson.js.map