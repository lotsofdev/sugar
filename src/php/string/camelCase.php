<?php

namespace Sugar\string;

/**
 * @name                camelCase
 * @namespace           string
 * @type                Function
 * @platform            php
 * @status              stable
 *
 * Capital case a string
 *
 * @param         {String}          $string        The string to camelCase
 * @return        {String}                      The camelCased string
 *
 * @todo      tests
 *
 * @snippet         \Sugar\string\camelCase($1)
 *
 * @example     php
 * \Sugar\string\camelCase('hello world'); // => helloWorld
 *
 * @see             https://www.npmjs.com/package/change-case
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function camelCase(string $string, string $separator = '_'): string
{
    return lcfirst(str_replace($separator, '', ucwords($string, $separator)));
}
