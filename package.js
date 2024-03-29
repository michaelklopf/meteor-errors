Package.describe({
  name: "michaelklopf:errors",
  summary: "A pattern to display application errors to the user",
  version: "1.0.1",
  git: "https://github.com/michaelklopf/meteor-errors.git"
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('michaelklopf:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_tests.js', 'client');
});
