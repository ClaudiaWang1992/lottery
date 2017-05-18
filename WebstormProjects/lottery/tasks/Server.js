/**
 * Created by wangjialei on 2017/5/17.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
// 启动一个脚本作为服务器
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch)return cb();
    // 创建一个服务器 --harmony当前目录下执行脚本
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();
    // 做文件的监听，监听哪些路径
    gulp.watch(['server/public/**/*.js','server/views/**/*.html'],function(file){
        // 监听后通知服务器文件改变做相应的处理，需要刷新浏览器
        server.notify.apply(server,[file]);
    });

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        // 监听后发生变化重启服务器
        server.start.bind(server)();
    });
});
