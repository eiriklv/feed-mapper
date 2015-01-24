exports = module.exports = {
    name: 'TheWireCutter',
    url: 'http://feeds.feedburner.com/TheWirecutter',
    template: {
        elements: [
            {
                name: 'guid',
                type: 'url',
                required: true,
                items: [
                    {
                        selector: 'guid'
                    },
                    {
                        selector: 'link'
                    },
                    {
                        selector: 'title',
                        decode: true
                    }
                ]
            },
            {
                name: 'title',
                required: true,
                items: [
                    {
                        selector: 'title',
                        decode: true
                    }
                ]
            },
            {
                name: 'url',
                type: 'url',
                required: true,
                items: [
                    {
                        selector: 'link'
                    }
                ]
            },
            {
                name: 'image',
                type: 'url',
                items: [
                    {
                        selector: 'enclosures[0].url'
                    }
                ],
                fallback: 'http://thewirecutter.wpengine.netdna-cdn.com/wp-content/themes/thewirecutter/thewirecutter/img/logo/header.png'
            }
        ]
    }
};
