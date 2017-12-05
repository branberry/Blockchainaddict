var http = require('http');
var querystring = require('querystring');

var config = require('../config.json');

module.exports = exports = {
    extend: function (dest, source) {
        for (var o in source) {
            if (source.hasOwnProperty(o)) {
                dest[o] = source[o];
            }
        };
        return dest;
    },
    generateCallbackId: function (iface, method) {
        return iface + '_' + method;
    },
    makeCall: function (apiClient) {
        var self = this;

        var params = this.extend({}, apiClient.params);
        params = this.extend(params, apiClient.transientParams);

        this.makeRequest(apiClient, params, function (err, response) {
            var callbackId = self.generateCallbackId(apiClient.interface, apiClient.method);
            apiClient.parseCallback(callbackId, err, response.result);
        });

        apiClient.transientParams = {};

        return apiClient;
    },
    makePath: function (apiClient, query) {
        return [
            config.steamApiProtocol,
            config.steamApiHost,
            '/', apiClient.getInterface(),
            '_', apiClient.getAppId(),
            '/', apiClient.getMethod(),
            '/v', config.steamApiVersion,
            '?', querystring.stringify(query)
        ].join("");
    },
    makeRequest: function (apiClient, query, next) {
        var path = this.makePath(apiClient, query);

        var req = http.get(path, function (res) {
            var data = '';

            res.on('data', function (chunk) {
                data += chunk;
            });

            res.on('end',function () {
                var obj = JSON.parse(data);
                next(null, obj, null);
            });
        });

        req.on('error', function (e) {
            next(e, {}, null);
        });
    }
};
