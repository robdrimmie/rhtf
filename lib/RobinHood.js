"use strict";

var Botkit = require('botkit');

class RobinHood {
    constructor(token) {
        this.token = token;

        this.controller = Botkit.slackbot({
            debug:false
        });

        this.bot = this.controller.spawn({token: token}).startRTM();
    }

    chatter() {
        const timeout = Math.random() * (30 - 12) + 12;

        this.bot.say({
            text: 'I am a noise machine. Sleeping for ' + timeout + ' seconds',
            channel: 'general'
        });



        setTimeout(this.chatter.bind(this), timeout * 1000);
    }
}

module.exports = RobinHood;
