"use strict"

const nconf = require('nconf');

const RobinHood = require('./lib/RobinHood');
const FriarTuck = require('./lib/FriarTuck');

nconf.file('./config.json');

let tokens = nconf.get("slack:tokens");
let bandits = [];

tokens.forEach(function(token) {
    let band = {
        token: token,
        robin: new RobinHood(token),
        tuck: new FriarTuck(token)
    };

    band.robin.chatter();
    //band.tuck.chatter();

    bandits.push(band);
});
