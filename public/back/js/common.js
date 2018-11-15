

// //开启进度条
// NProgress.start();

// setTimeout(function(){
//   NProgress.done();
// },500)




//在第一个ajax请求时，开启进度条

//.ajaxComplete() 每个ajax完成时调用
//.ajaxSuccess() 每个ajax成功响应时调用
//.ajaxError() 每个ajax失败响应时调用
//.ajaxSend() 每个ajax准备要发送前，会调用

//.ajaxStart() 第一个ajax准备要发送时，会调用
//.ajaxStop() 当所有ajax请求 完成时调用




$(document).ajaxStart(function(){

  NProgress.start();
});


$(document).ajaxStop(function(){
  
  NProgress.done();
});