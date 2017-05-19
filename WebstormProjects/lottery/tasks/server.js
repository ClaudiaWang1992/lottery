import gulp from 'gulp';
import gulpif from 'gulp-if';
//启动一个脚本作为服务器
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();

  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js','server/views/**/*.html'],function(file){
    server.notify.apply(server,[file]);
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})
