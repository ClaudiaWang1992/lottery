/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch){
        return cb();
    }
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.html',['pages']);
    gulp.watch('app/**/*.css',['css']);
});