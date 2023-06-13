'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async user() {
        return {
            title: "this is title",
            content: "this is content",
        };
    }
    async getuser(username, password) {
        return {
            username,
            password,
            state: "3",
        };
    }

}

module.exports = UserService;