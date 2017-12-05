var ApiClient = require('./api-client');
var Dota2Client = new ApiClient('570');

/**
 * Retrieves a list of all Dota 2 heroes
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetHeroes
 */
Dota2Client.fn.extend('getHeroes', function (params, next) {
    if (typeof params === 'function') {
        next = params;
        params = {};
    }

    this.invoke('GetHeroes')
        .using(params)
        .on('IEconDOTA2')
        .then(next);
});

/**
 * Retrieves only itemized (aka has items in the store) heroes
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetHeroes
 */
Dota2Client.fn.extend('getItemizedHeroes ', function (next) {
    this.getHeroes({ 'itemizedonly' : 1 }, next);
});

/**
 * Retrieves a list of item rarity types, includes colors!
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetRarities
 */
Dota2Client.fn.extend('getRarities', function (next) {
    this.invoke('GetRarities')
        .on('IEconDOTA2')
        .then(next);
});

/**
 * Retrieves a list of the most recent matches
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetMatchHistory
 */
Dota2Client.fn.extend('getMatchHistory', function (params, next) {
    if (typeof params === 'function') {
        next = params;
        params = {};
    }

    this.invoke('GetMatchHistory')
        .using(params)
        .on('IDOTA2Match')
        .then(next);
});

/**
 * Retrieves a list of matches ordered by their sequence number
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetMatchHistoryBySequenceNum
 */
Dota2Client.fn.extend('getMatchHistoryBySequenceNum', function (params, next) {
    this.invoke('GetMatchHistoryBySequenceNum')
        .using(params)
        .on('IDOTA2Match')
        .then(next);
});

/**
 * Retrieve details of a specific match id
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetMatchDetails
 */
Dota2Client.fn.extend('getMatchDetails', function (match_id, next) {
    this.invoke('GetMatchDetails')
        .using({ match_id: match_id })
        .on('IDOTA2Match')
        .then(next);
});

/**
 * Retrieve information about DotaTV-supported leagues
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetLeagueListing
 */
Dota2Client.fn.extend('getLeagueListing', function (next) {
    this.invoke('GetLeagueListing')
        .on('IDOTA2Match')
        .then(next);
});

/**
 * Retrieve a list of in-progress league matches,as well as details
 * of that match as it unfolds.
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetLeagueListing
 */
Dota2Client.fn.extend('getLiveLeagueGames', function (next) {
    this.invoke('GetLiveLeagueGames')
        .on('IDOTA2Match')
        .then(next);
});

/**
 * Retrieve information about a specific team
 * @details http://wiki.teamfortress.com/wiki/WebAPI/GetTeamInfoByTeamID
 */
Dota2Client.fn.extend('getTeamInfoByTeamID', function (params, next) {
    this.invoke('GetTeamInfoByTeamID')
        .using(params)
        .on('IDOTA2Match')
        .then(next);
});

module.exports = exports = Dota2Client;
