'use strict';

Package.describe({
    name: 'artemi:universe-autoform-select',
    summary: 'Custom "afUniverseSelect" input type for AutoForm, with the appearance as selectize',
    version: '0.3.10',
    git: 'https://github.com/urnix/meteor-universe-autoform-select.git'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    if (!api.addAssets) {
        api.addAssets = function (files, platform) {
            api.addFiles(files, platform, {isAsset: true});
        };
    }

    api.use(['ecmascript', 'templating', 'underscore'], 'client');
    api.use('aldeed:autoform@5.8.1');
    api.use('artemi:universe-selectize@0.1.23', 'client');

    api.addFiles([
        'universe-autoform-select.html',
        'universe-autoform-select.js'
    ], 'client');
});
