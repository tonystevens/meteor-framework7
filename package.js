Package.describe({
  name: 'tonystevens:meteor-framework7',
  version: '1.3.0',
  summary: 'Meteor wrapper for Framework7 (v1.6.0).',
  git: 'https://github.com/tonystevens/meteor-framework7.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.addFiles('framework7/dist/js/framework7.min.js', 'client');

  api.addAssets([
    'framework7/dist/css/framework7.ios.colors.css',
    'framework7/dist/css/framework7.ios.colors.min.css',
    'framework7/dist/css/framework7.ios.css',
    'framework7/dist/css/framework7.ios.min.css',
    'framework7/dist/css/framework7.ios.rtl.css',
    'framework7/dist/css/framework7.ios.rtl.min.css',
    'framework7/dist/css/framework7.material.colors.css',
    'framework7/dist/css/framework7.material.colors.min.css',
    'framework7/dist/css/framework7.material.css',
    'framework7/dist/css/framework7.material.min.css',
    'framework7/dist/css/framework7.material.rtl.css',
    'framework7/dist/css/framework7.material.rtl.min.css',
  ], 'client');

  api.addAssets([
    'framework7/dist/img/i-f7-ios.png',
    'framework7/dist/img/i-f7-material.png'
    ], 'client');

});

