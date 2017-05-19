/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src('app/css/*.css')
        .pipe(gulp.dest('server/public/stylesheets'))
        .pipe(gulpif(args.watch,livereload()));
});