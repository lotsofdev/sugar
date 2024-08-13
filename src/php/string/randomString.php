<?php

namespace Sugar\String;

/**
 * @name            randomString
 * @namespace       php.string
 * @type            Function
 * @platform        php
 * @status          beta
 *
 * This function allows you to generate a random string using the characters and the wanted length
 * specified in the params
 *
 * @param       {Number}            $length             The length of the string you want
 * @param       {String}            [$characters='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']         The characters you want to use to generate the string
 * @return      {String}                        The generated string
 *
 * @snippet             \Sugar\String\randomString($1);
 *
 * @example         php
 * Sugar\String\randomString(10); // => ak93mdkaod
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function randomString(
    $length,
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) {
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
