var http = require('http');

exports = module.exports = FeedMapper;

function FeedMapper(options) {
    if (!(this instanceof FeedMapper))
        return new FeedMapper(options);

    this.timeOut = options.timeOut || 10000;
    this.agent = options.agent || (new http.Agent()); // http agent
    this.agent.maxSockets = options.sockets || 5;
}

FeedMapper.prototype._handler = require('./handler');
FeedMapper.prototype._fetch = require('./fetch');
FeedMapper.prototype.parse = require('./parse');
