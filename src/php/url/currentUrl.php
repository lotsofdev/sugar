<?php

namespace Sugar\url;

/**
 * @name            currentUrl
 * @namespace       php.url
 * @type            Function
 * @platform        php
 * @status          beta
 *
 * Return the current url
 *
 * @return    {String}    The current url
 *
 * @snippet 		\Sugar\url\currentUrl();
 *
 * @example    php
 * \Sugar\url\currentUrl();
 * // https://lotsof.dev/hello/world?query=string
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function currentUrl()
{
    $protocol =
        isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on'
            ? 'https'
            : 'http';
    return $protocol . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}
