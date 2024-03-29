JSGoClient
==========

A simple mobile Go (wei-qi) client app written in JavaScript using [phonegap](http://phonegap.com/).

To run the test do this from the project root directory:

 ./gulp test

To watch for files changes and automatically run the tests do thi:

 ./gulp watch

References
----------

### Guides

- [Phonegap](http://phonegap.com/)
- [Angular and Phonegap](http://briantford.com/blog/angular-phonegap)
- [Quick start guide to phonegap and AngularJS](http://devgirl.org/2013/06/10/quick-start-guide-phonegap-and-angularjs/)
- [How to test your JS and use it in a browser](http://www.rexfeng.com/blog/2014/07/how-to-unit-test-your-js-and-use-it-in-the-browser/)

### Tools

- [Android SDK](http://developer.android.com/sdk/index.html)
- [Phonegap/Cordova Command Line Interface (CLI)](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface)
- [Yeoman](http://yeoman.io) - scaffolding for webapps, only used to create initial angularjs app structure in goclient/app
    - Installed yeoman 'npm install -g yo'
    - Installed yeoman angularjs generator 'npm install -g generator-angular'
    - Entered app directory ('goclient/angular' in this case) and created an angular app with 'yo angular'
    - Installed Compass from within app directory with 'gem update --system && gem install compass'
- [Gulp](http://gulpjs.com/)

TODO
----

- Make a basic phonegap app, include ngMobile module from angular-mobile.js to remove click delays.
- Add an empty 19x19 board which can be clicked to add stones until full
- Click an occupied point removes the stone
- On mobile initial click zooms to a 7x7 segment, second click selects point to place stone
- Add minimal [KGS client](https://www.gokgs.com/) capability

DONE
----

- Use [Gulp](http://gulpjs.com/) as a top-level build system
    - tasks:
        - 'test':'run jasmine tests'
        - 'lint':'run jshint on js files'
        - 'build':'cd goclient ; phonegap build android'
        - 'install':'cd goclient ; phonegap install android'

