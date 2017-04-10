Package.describe({
  name: 'tonystevens:meteor-framework7',
  version: '1.0.0',
  summary: 'Meteor wrapper for Framework7 (v1.6.0).',
  git: 'https://github.com/tonystevens/meteor-framework7.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.addFiles('Framework7/dist/js/framework7.min.js', 'client');

  api.addAssets([
    'Framework7/dist/css/framework7.ios.colors.css',
    'Framework7/dist/css/framework7.ios.colors.min.css',
    'Framework7/dist/css/framework7.ios.css',
    'Framework7/dist/css/framework7.ios.min.css',
    'Framework7/dist/css/framework7.ios.rtl.css',
    'Framework7/dist/css/framework7.ios.rtl.min.css',
    'Framework7/dist/css/framework7.material.colors.css',
    'Framework7/dist/css/framework7.material.colors.min.css',
    'Framework7/dist/css/framework7.material.css',
    'Framework7/dist/css/framework7.material.min.css',
    'Framework7/dist/css/framework7.material.rtl.css',
    'Framework7/dist/css/framework7.material.rtl.min.css'
  ], 'client');

  api.addAssets([
    'Framework7/dist/img/i-f7-ios.png',
    'Framework7/dist/img/i-f7-material.png'
    ], 'client');

});

