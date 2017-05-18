/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
//gulp基于流
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
//热更新
import livereload from 'gulp-livereload';
//文件信息流，管道拼接
import plumber from 'gulp-plumber';
//文件重命名
import rename from 'gulp-rename';
//压缩js css
import uglify from 'gulp-uglify';
//在命令行工具输出的包
import {log, colors} from 'gulp-util';
//命令行参数解析
import args from './util/args';

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            // 处理常规的错误逻辑
            errorHandle: function () {

            }
        }))
        .pipe(named())
        .pipe(
            gulpWebpack({
                module: {
                    loaders: [{
                        test: /\.js$/,
                        loader: 'babel'
                    }]
                }
            }), null, (err, stats) => {
                log(`Finished'${colors.cyan('scripts')}'`, stats.toString({
                    chunks: false
                }))
            })
        .pipe(gulp.dest('server/public/javascripts'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({
            compress: {properties: false},
            output: {'quote_keys': true}
        }))
        .pipe(gulp.dest('server/public/javascripts'))
        .pipe(gulpif(args.watch, livereload()))
});

