var util = require('./util');
var conf = require('../config.json');
var pkg = require('../package.json');

var ApiClient = function (appId) {
    var ApiClient = $ = function (apiKey) {
        this.callbacks = [];

        this.transientParams = {};
        this.params = {};

        this.appId = appId;
        this.params.key = apiKey || null;
        this.params.language = conf.language;
        this.params.version = conf.steamApiVersion;

        this.interface = null;
        this.method = null;

        return this;
    };

    $.fn = $.prototype = {
        version: pkg.version
    };

    $.fn.extend = function (name, body) {
        if (typeof this[name] !== 'undefined') {
            console.error('Dazzle - ApiClient: ', name, ' already exists');
            return this[name];
        }

        this[name] = function () {
            var args = Array.prototype.slice.call(arguments);
            return body.apply(this, args);
        };
    };

    $.fn.invoke = function (method) {
        this.method = method;
        return this;
    };

    $.fn.using = function (params) {
        this.transientParams = params;
        return this;
    };

    $.fn.on = function (iface) {
        this.interface = iface;
        return util.makeCall(this);
    };

    $.fn.parseCallback = function () {
        var args = Array.prototype.slice.call(arguments);

        this.callbacks[args.shift()].apply(this, args);
        delete this.callbacks[args[0]];

        return this;
    };

    $.fn.then = function (callback) {
        var callbackId = util.generateCallbackId(this.interface, this.method);

        this.callbacks[callbackId] = callback;
        return this;
    };

    $.fn.get = function (keys) {
        return this.params[keys];
    };

    $.fn.getAppId = function () {
        return this.appId;
    };

    $.fn.getInterface = function () {
        return this.interface;
    };

    $.fn.getMethod = function () {
        return this.method;
    };

    $.fn.set = function (key, value, overwrite) {
        var existingKey = typeof this.get(key);
        if (overwrite) {
            this.params[key] = value;
        } else if (existingKey === 'undefined') {
            this.params[key] = value;
        }
        return this;
    };

    $.fn.setApiKey = function (apiKey) {
        this.set('key', apiKey, true);
        return this;
    };

    return ApiClient;
};

module.exports = ApiClient;
