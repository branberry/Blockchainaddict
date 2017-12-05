Dazzle - a Dota 2 Api Wrapper for Node
===
Dazzle is a lightweight, easy-to-use API client for the Dota 2 WebAPI [http://wiki.teamfortress.com/wiki/WebAPI#Dota_2](http://wiki.teamfortress.com/wiki/WebAPI#Dota_2).
Check it out on github @ [https://github.com/JamieLottering/dazzle-node](https://github.com/JamieLottering/dazzle-node)

Installation
-----------
    npm install dazzle
    
Requirements
------------
    Get a Steam API key at http://steamcommunity.com/dev/apikey

Usage & Examples
-----------
    var dazzle = require('dazzle');
    var dota2Api = new dazzle('apikey');
    
### Get a list of heroes
    dota2Api.getHeroes(function (err, response) {
        var heroes = response.heroes;
    });
    
### Get recent matches
    dota2Api.getMatchHistory(function (err, response) {
        var matches = response.matches;
    });
        
Easily extendable
----------
To create your own API method simply extend the client like so:
    
    dota2Api.extend('myFancyMethod', function (params, next) {
        // do somethin cool here
        this.invoke('MethodName')
            .using(params)
            .on('InterfaceName')
            .then(next);
    });

    dota2Api.myFancyMethod({}, function (err, response) {
        // hey it works!
    });
    
For a list of methods and interfaces see [http://wiki.teamfortress.com/wiki/WebAPI#Dota_2](http://wiki.teamfortress.com/wiki/WebAPI#Dota_2). Note that you dont need to include the app ID (aka _570), this is added automatically.

License
-----------
[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Author
-----------
Jamie Lottering
[GitHub](https://github.com/JamieLottering) &bull; [http://well.io](http://well.io) &bull; [twitter](http://twitter.com/jamielottering)