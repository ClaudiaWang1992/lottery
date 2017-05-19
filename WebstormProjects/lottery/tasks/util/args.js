/**
 * Created by wangjialei on 2017/5/17.
 */
// 命令行参数部分配置
// yargs 处理命令行参数的包
import yargs from 'yargs';
const args = yargs
    // 区分开发环境与生产环境
    // 命令行中没有输入这个选项则默认是开发环境否则production环境
    .option('production',{
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    // 用watch参数来控制，若有这个参数表示在监听比如动态更新等
    .option('watch',{
        boolean: true,
        default: false,
        describe:'watch all files'
    })

    //是否详细输出命令行执行日志
    .option('verbose',{
        boolean: true,
        default: false,
        describe: 'log'
    })

    //表示强制生成sourcemap
    .option('sourcemaps',{
        describe: 'force the creation of the sourcemaps'
    })

    //设置生成服务器的端口
    .option('port',{
        string: true,
        default: 8080,
        describe: 'server port'
    })
    //对输入命令行内容以字符串进行解析
    .argv

export default args;
