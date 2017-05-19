/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clear','css','pages','scripts',['browser','serve']));