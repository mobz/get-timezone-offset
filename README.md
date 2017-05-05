# getTimezoneOffset

getTimezoneOffset is a tiny library ( less than 1k ) for getting timezone offsets.

It returns the timezone offset in minutes for any IANA timezone name for any valid javascript date in the past, present and future.

## Example

	var now = new Date();

	var offset = getTimezoneOffset( 'America/New_York', now );

	console.log( `Timezone offset in New York is ${offset}` );


## How it works

getTimezoneOffset is tiny because it ships _without a database of timezones_, using the tz database of the underlying operating system via the global `Intl` object.

Internationalization is a relatively new feature for javascript engines; Engine support is tracked [ here ](http://kangax.github.io/compat-table/esintl/#test-DateTimeFormat_accepts_IANA_timezone_names), but boils down to;

* Node: 4+
* IE/Edge: Edge only
* FF: 52+
* Chromium: 45+
* Safari: 10+

## Tests

The tests will validate the library functionality _and_ the javascript engine's implementation of `Intl.DateTimeFormat`.

To test in node

	npm test

To test in a browser

	npm run test:browser

Then open `test.html` in a browser and view the console output.
