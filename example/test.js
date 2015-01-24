var debug = require('debug')('feed-parser:testapp');
var util = require('util');
var feed = require('./template');
var FeedMapper = require('../lib');

var feedMapper = FeedMapper({
    timeOut: 5000
});

debug('running rss feed mapper');

feedMapper.parse(feed, function(err, entries) {
    if (err) return debug(err);
    debug(util.inspect(entries, { colors: true }));
});
