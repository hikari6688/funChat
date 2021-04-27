// 浏览器控制台输出样式
 function err(err) {
  console.log(
    `%c错误%c${err}`,
    "color:#fff;background:#f56c6c;padding:2px 4px;border-radius:2px 0 0 2px",
    "color:white;background:#409eff;padding:2px 4px;border-radius:0 2px 2px 0"
  );
}
 function log(log) {
  if (Object.prototype.toString.call(log) === "[object Object]") {
    log = JSON.stringify(log);
  }
  console.log(
    `%日志 %c${log}`,
    "color:#fff;background:#5cb87a;padding:2px 4px;border-radius:2px 0 0 2px,",
    "color:white;background:#409eff;padding:2px 4px;border-radius:0 2px 2px 0"
  );
}
