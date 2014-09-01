JSGoClient
==========

A simple mobile Go (wei-qi) client app written in JavaScript using [phonegap](http://phonegap.com/).

References
----------

### Guides

- [Quick start guide to phonegap and AngularJS](http://devgirl.org/2013/06/10/quick-start-guide-phonegap-and-angularjs/)
- [Phonegap](http://phonegap.com/)

### Tools

- [Android SDK](http://developer.android.com/sdk/index.html)
- [Phonegap/Cordova Command Line Interface (CLI)](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface)

TODO
----

- Use [Gulp](http://gulpjs.com/) as a top-level build system
    - tasks:
        - 'build':'cd goclient ; phonegap build android'
        - 'install':'cd goclient ; phonegap install android'
        - 'lint':'run jshint on js files'
        - 'test':'run jasmine tests'
- Make a basic phonegap app, include ngMobile module from angular-mobile.js to remove click delays.
- Add an empty 19x19 board which can be clicked to add stones until full
- Click an occupied point removes the stone
- On mobile initial click zooms to a 7x7 segment, second click selects point to place stone
- Add minimal [KGS client](https://www.gokgs.com/) capability

DONE
----

