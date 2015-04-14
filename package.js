Package.describe({
  name: 'jianjie:listhings',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'List of things (countries, nationalities, etc)',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.export('listhings',['server', 'client']);
  api.addFiles('listhings.js',['server', 'client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jianjie:listhings');
  api.addFiles('listhings.js',['server', 'client']);
  api.addFiles('listhings-tests.js',['server', 'client']);
});
