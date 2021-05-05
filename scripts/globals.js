'use strict';

const ROOT = process.cwd();
const PUBLIC_DIR = `${ROOT}/public`;
const APP_DIR = `${ROOT}/src`;

module.exports = {
    ENV: process.env.NODE_ENV,
    APP_DIR,
    PUBLIC_DIR
};
