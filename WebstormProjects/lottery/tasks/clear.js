/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clear',()=>{
    return del(['server/public','server/views']);
});
