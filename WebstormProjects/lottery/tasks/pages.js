/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch,livereload()));
});