var locale = 'en-US';
var us_re = /(\d+).(\d+).(\d+),?\s+(\d+).(\d+)(.(\d+))?/;

var format_options = {
	timeZone: "UTC",
	hourCycle: 'h23',
	hour12: false,
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

var utc_f = new Intl.DateTimeFormat(locale, format_options );

function parseDate( date_str ) {
	date_str = date_str.replace(/[\u200E\u200F]/g, '');
	var date_a = us_re.exec( date_str );
	return [].slice.call(us_re.exec( date_str ), 1)
		.map( Math.floor );
}

function diffMinutes( d1, d2 ) {
	var day = d1[1] - d2[1];
	var hour = d1[3] - d2[3];
	var min = d1[4] - d2[4];

	if( day > 15 ) day = -1;
	if( day < -15 ) day = 1;

	return 60 * ( 24 * day + hour ) + min;
}

module.exports = function getTimezoneOffset( tz_str, date ) {

	format_options.timeZone = tz_str;

	var loc_f = new Intl.DateTimeFormat(locale, format_options );

	return diffMinutes(
		parseDate( utc_f.format( date )),
		parseDate( loc_f.format( date ))
	);
}
