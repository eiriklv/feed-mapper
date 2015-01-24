Map RSS feeds using JSON templates
====================================================

#### TODO
* Create proper documentation of the template options and workings
* Add test suite with Jest/Jasmine
* Publish on npm :D

#### Introduction:
Map RSS feeds using JSON templates

#### Example use:
```js
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
```

#### Example template (see the `/example` folder for more elaborate templates):
```json
{
    "name": "hackernews",
    "url": "https://news.ycombinator.com/rss",
    "template": {
        "elements": [
            {
                "name": "guid",
                "type": "url",
                "required": true,
                "items": [
                    {
                        "selector": "guid"
                    },
                    {
                        "selector": "link"
                    },
                    {
                        "selector": "title",
                        "decode": true
                    }
                ]
            },
            {
                "name": "title",
                "required": true,
                "items": [
                    {
                        "selector": "title"
                    }
                ]
            },
            {
                "name": "url",
                "type": "url",
                "required": true,
                "items": [
                    {
                        "selector": "link"
                    }
                ]
            },
            {
                "name": "image",
                "type": "url",
                "items": [
                    {
                        "selector": "enclosures[0].url"
                    }
                ],
                "fallback": "https://news.ycombinator.com/y18.gif"
            }
        ]
    }
}
```

#### Example output:
```js
[
    {
        "origin": "https://news.ycombinator.com/",
        "host": "news.ycombinator.com",
        "ranking": 24,
        "guid": "http://blog.ycombinator.com/last-day-to-apply-to-yc-hacks",
        "title": "Last day to apply to YC Hacks",
        "url": "http://blog.ycombinator.com/last-day-to-apply-to-yc-hacks",
        "image": "https://news.ycombinator.com/y18.gif"
    },
    ....
]
```
