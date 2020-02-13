//-------------------------------封装的 点击心 形 自动执行
    !function(e, t,evt) {
    // 元素属性赋值
    function r() {
        for (var e = 0; e < s.length; e++)
        {
            if(s[e].alpha <= 0)
            {
                t.body.removeChild(s[e].el), s.splice(e, 1);
            }else{
                s[e].y--, 
                s[e].scale += .004,
                s[e].alpha -= .013,
                s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999";
            } 
        }     
        requestAnimationFrame(r);
        return;
    }
    // 如果存在点击事件 执行动画
    function n() {
        var t = "function" == typeof e[evt] && e[evt];
        e[evt] = function(e) {
            t && t(), o(e);
        }
    }
    // 创建元素并且定义初始属性数组
    function o(e) {
        var a = t.createElement("div");
        a.className = "heart", s.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c()
        }), t.body.appendChild(a)
    }
    // 定义样式文件并添加
    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    // 返回随机色
    function c() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }
    // 执行动画兼容处理
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
    function(e) {
        setTimeout(e, 1e3 / 60)
        }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()
    }(window, document,'onclick');
