(function() {
  'use strict';

  var gulp = require('gulp');
  var gulpConcat = require('gulp-concat');
  var minjs = require('gulp-uglify');
  var minifyCSS = require('gulp-minify-css');
  var compass = require('gulp-compass');
  var karma = require('karma').server;
  var jshint = require('gulp-jshint');
  var bump = require('gulp-bump');
  var browserSync = require('browser-sync').create();
  var ngHtml2Js = require('gulp-ng-html2js');
  var fs = require('fs');
  var path = require('path');
  var packageJson = JSON.parse(fs.readFileSync('./package.json'));
  var rename = require('gulp-rename');

  // Defining Files

  var environment = 'production';

  var additionalLintFiles = [
    './gulpfile.js',
    './'+packageJson.main
  ];

  var allLintFiles = packageJson.gulpSettings.appFiles.jsFiles.concat(additionalLintFiles);

  var compassImportPaths = packageJson.gulpSettings.styleModules.map(function(styleModule) {
    return path.join(path.dirname(require.resolve(styleModule)),'src');
  });

  gulp.task('lint', function () {
    return gulp.src(allLintFiles, {base: packageJson.gulpSettings.base})
      .pipe(jshint('./config/.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  });

  gulp.task('test', ['lint'], function (done) {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done);
  });

  gulp.task('createTemplates', function(cb){
    gulp.src(packageJson.gulpSettings.appFiles.templateFiles)
      .pipe(ngHtml2Js({
        base: packageJson.gulpSettings.base,
        moduleName: packageJson.gulpSettings.createTemplates.moduleName,
        prefix: packageJson.gulpSettings.createTemplates.prefix
      }))
      .pipe(gulpConcat(packageJson.gulpSettings.createTemplates.templateFile))
      .pipe(gulp.dest(packageJson.gulpSettings.destination.js))
      .on('end', cb);
  });

  gulp.task('combineFiles', ['createTemplates'], function(){
    // combine and minify JS

    var jsFilesCombined = [].concat(packageJson.gulpSettings.appFiles.jsFiles);

    jsFilesCombined.push(packageJson.gulpSettings.destination.js+'/'+packageJson.gulpSettings.createTemplates.templateFile);
    jsFilesCombined.push(packageJson.gulpSettings.combineFiles.ignore);
    gulp.src(jsFilesCombined, {base: packageJson.gulpSettings.base})
      .pipe(gulpConcat(packageJson.gulpSettings.destination.jsFile))
      .pipe(gulp.dest(packageJson.gulpSettings.destination.js))
      .pipe(rename(packageJson.gulpSettings.destination.jsFileMin))
      .pipe(minjs({mangle: false}))
      .pipe(gulp.dest(packageJson.gulpSettings.destination.js))
      .pipe(browserSync.stream());
    browserSync.reload();
  });

  gulp.task('compileStyle', function(){
    gulp.src(packageJson.gulpSettings.appFiles.styles)
      .pipe(compass({
        require: ['sass-globbing', 'bootstrap-sass'].concat(packageJson.gulpSettings.compass.require),
        project: __dirname,
        sass: packageJson.gulpSettings.compass.sass,
        css: packageJson.gulpSettings.compass.css,
        time: true,
        sourcemap: environment === 'development',
        /* jshint ignore:start */
        import_path: compassImportPaths
        /* jshint ignore:end */
      }))
      .on('error', function(error) {
        console.log(error);
        this.emit('end');
      })
      .pipe(minifyCSS())
      .pipe(gulp.dest(packageJson.gulpSettings.destination.css))
      .pipe(browserSync.stream());
  });

  // Will patch the version 
  gulp.task('bump', function(){
    gulp.src('./package.json')
      .pipe(bump())
      .pipe(gulp.dest('./'));
  });

  gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({script: packageJson.main}).on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    });
  });

  gulp.task('serve', ['lint', 'test', 'compileStyle', 'createTemplates', 'combineFiles'], function() {
    environment = 'development';
    browserSync.init({
        server: {
          baseDir: './'
        }
    });
    gulp.watch(allLintFiles, ['lint', 'combineFiles']);
    gulp.watch(packageJson.gulpSettings.appFiles.styles, ['compileStyle']);
    gulp.watch(packageJson.gulpSettings.appFiles.htmlFiles, ['createTemplates', 'combineFiles']);
  });

  gulp.task('build', ['lint', 'test', 'createTemplates', 'combineFiles', 'compileStyle']);

  gulp.task('publish', ['lint', 'test', 'createTemplates', 'combineFiles', 'compileStyle', 'bump']);

  gulp.task('default', ['serve']);

})();