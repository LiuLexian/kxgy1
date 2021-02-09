/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    // requestScreenCapture()
    //显示启停浮窗
    showCtrlWindow();



    //点击娱
    var selector = text("众人帮");
    var result = clickRandom(selector);
    // if (!result){
    //     toast("点击失败");
    //     return;
    // }
    // return;
    //打开众人帮

    clickPoint(random(101,127),random(1076,1131))
    //线程 点击稻草人
    var t=setInterval(function() {
        clickPoint(random(101,127),random(1076,1131))
        // sleep(random(500,1500));
        logd("提升作物量");
    },random(60000,120000));


    //开始再这里编写代码了！！
    var i = 0;
    while(true){
        i++;
        if (i == 1 || i%random(500,1000) == 0){
            //申请截屏
            var aimage = image.captureFullScreen();
            if (aimage){
                //截图
                var points = image.findColorEx("0xF83700-0x101010", 0.9, 566, 1758, 722, 2018, 10,1);
                if (points){
                    logd("农场升级");
                    clickPoint(random(608,675),random(1825,1932))
                    sleep(random(500,1500));
                    logd("选择第一个待升级作物");
                    points = image.findMultiColorEx("0xFE6400-0x101010", "39|-21|0xFFB93F-0x101010,75|32|0xFFF5E3-0x101010", 0.9, 734, 753, 989, 1686, 10,1);
                    if (points){
                        //选择随机一个 立即升级
                        var num = random(0,points.length);
                        clickPoint(points[num].x,points[num].y)
                        sleep(random(100,250))
                    }
                    //关闭作物升级窗口
                    clickPoint(random(973,1030),random(474,511))
                    sleep(random(100,250))
                }
            }
        }else {
            clickPoint(random(825,979),random(1763,1923))
            sleep(random(700,1700));
            logd("快速收获第"+i+"次");
        }

    }
}


/**
 *  申请截屏权限
 */
function requestScreenCapture() {
    logd("申请截屏权限");
    var req = image.requestScreenCapture(10000,0);
    if (!req) {
        req = image.requestScreenCapture(10000,0);
    }
    if (!req) {
        toast("申请权限失败");
        return;
    }
}


/**
 *  打年兽
 */
function alipaynewyear(){
    logd("开始打年兽...")

    // logd("点击立即开始按钮")
    // var selector = text("立即开始");
    // var result = clickRandom(selector);
    // while (!result){
    //     result = clickRandom(selector);
    // }


    //申请完权限等1s再截图,否则会截不到图
    sleep(3000)
    var startTime =  time();
    var endTime =  startTime;
    var count = 0;
    var clickCount = 0;
    var errorCount = 0;
    while ((endTime - startTime)/1000 <= 32){
        count++;
        var aimage = image.captureFullScreen();
        if (aimage != null) {
            var points = image.findMultiColorEx("0xFF4262-0x101010", "41|-34|0xF7E0D2-0x101010,65|-94|0x5885EA-0x101010", 0.9, 203, 787, 829, 1520, 5,1);
            //这玩意是个数组
            try{
                if(points){
                    // logd("points length "+points.length);
                    var num = random(0,points.length);
                    // logd(points[num])
                    clickPoint(points[num].x,points[num].y)
                    sleep(random(100,250))
                    clickCount++;
                }else{
                    errorCount++;
                    logd("【"+timeFormat("yyyy-MM-dd HH:mm:ss")+ "】 未查询到");
                }
            }catch (e) {
                logd("异常时刻【"+timeFormat("yyyy-MM-dd HH:mm:ss")+ "】此刻点坐标"+points[num]+"     异常原因："+e)
            }

            //图片要回收
            image.recycle(aimage)
            endTime =  time();
        }
    }
    logd("循环共计【"+count+"】次，其中有效点击：【"+clickCount +"】次-----无效点击：【"+errorCount+"】次");
}



/**
 *  服务启动次数
 * @param time
 * @returns {boolean|*}
 */
function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();