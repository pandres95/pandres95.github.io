/* jshint node:true */
'use strict';

var sequence    = require('gulp-sequence')
,   gulp        = require('gulp-folder-load')('tasks');

gulp.task('default', sequence('prepare', ':serve'));
