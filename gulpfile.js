const gulp = require('gulp'),
      gutil = require('gulp-util'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      depcheck = require('depcheck'),
      checkDeps = require('gulp-check-deps'),
      path = require('path'),
      childProcess = require('child_process'),
      fork = require('child_process').fork,
      runSequence = require('run-sequence'),
      async = require('async'),
      config = require('./app/config')();

const app = {
  instance: null,
  path: 'app.js',
  env: process.env,
  start: function(callback) {
    app.instance = fork(app.path, {
      silent: true, env: app.env
    });

    if (app.instance) {
      childProcess.exec('npm start');
      gutil.log(gutil.colors.cyan('Starting'), 'express server listening on port', config.port);
      // app.instance.stdout.pipe(process.stdout);
      // app.instance.stderr.pipe(process.stderr);
    }
    callback();
  },
  stop: function(callback) {
    if (app.instance) {
      gutil.log(gutil.colors.red('Stopping'), 'express server ( PID:', app.instance.pid, ')');
      app.instance.kill('SIGTERM');
    }
    callback();
  },
  restart: function() {
    async.series([
      app.stop,
      app.start
    ]);
  },
};

const assets = {
  sass: 'app/assets/sass/app.scss',
  scripts: {
    app: 'app/assets/js/**/*.{js,jsx}',
    vendor: '',
  },
  images: 'app/assets/img/**/*',
  jade: 'app/views/**/*.jade',
  node: 'routes/**/*',
};

// Clean the /public directory
gulp.task('clean', function(callback) {
  childProcess.exec('rm -rf ./public', [], function() {
    callback();
  });
});

// Tests
gulp.task('test', function(callback) {
  runSequence(
    'build',
    [
      'depcheck',
      'outdated',
    ],
    callback);
});

// Check for unused npm packages
gulp.task('depcheck', function() {
  var options = {
    "withoutDev": false, // Check against devDependencies too
    // Pathnames to ignore
    "ignoreDirs": [
      "public",
    ],
    // Ignore dependencies that match these minimatch patterns
    "ignoreMatches": [
      'debug',
      'jade',
      'node-sass',
    ]
  };

  depcheck(path.resolve("."), options, function(unused) {
    if (unused.dependencies.length) {
      console.log('Unused dependencies', unused.dependencies);
    }

    if (unused.devDependencies.length) {
      console.log('Unused devDependencies', unused.devDependencies);
    }

    if (unused.invalidFiles.length) {
      // JS files that couldn't be parsed
      console.log('Invalid js files', unused.invalidFiles);
    }
  });
});

// Check for outdated npm packages
gulp.task('outdated', function() {
  return gulp.src('package.json').pipe(checkDeps({
    failForDevDependencies: false,
    failForPrerelease: false,
    failLevel: 'none',
  }));
});

// Get scss files and create a CSS file
gulp.task('sass', function () {
  gulp.src(assets.sass)
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/assets'));
});

// Concatenate scripts to one file
gulp.task('scripts', function() {
  gulp.src([
      assets.scripts.vendor,
      assets.scripts.app,
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/assets'));
});

// Copy images
gulp.task('images', function() {
  return gulp.src(assets.images)
    .pipe(gulp.dest('public/assets/img'));
});

// Watch for changes
gulp.task('watch', function () {
  gulp.watch(assets.images, ['images']);
  gulp.watch(assets.sass, ['sass']);
  gulp.watch(assets.scripts.vendor, ['scripts']);
  gulp.watch(assets.scripts.app, ['scripts']);
  gulp.watch(assets.node, app.restart);
});

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    [
      'sass',
      'scripts',
      'images',
    ],
    callback);
});

gulp.task('start-service', app.start);

gulp.task('exit', function () {
  childProcess.exec('^C');
});

gulp.task('start', function(callback) {
  runSequence(
    'build',
    'watch',
    'start-service',
    callback);
});

gulp.task('default', ['start']);
