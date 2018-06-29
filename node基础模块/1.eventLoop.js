

// 1)和浏览器的不同
// promise1
// Promise.resolve().then(data=>{
//   console.log('promise1');
//   setTimeout(() => {
//     console.log('timeout1');
//   }, 0);
// })
// // 会默认讲timers的阶段的内容全部执行完后 切换阶段时才会执行微任务
// setTimeout(() => {
//   console.log('timeout2');
//   Promise.resolve().then(data => {
//     console.log('promise2');
//   });
// }, 0);


// 2)微任务中最早的是nextTick  不要写循环 
// Promise.resolve().then(data => {
//   console.log('promise');
// });

// process.nextTick(function () {
//   console.log('nextTick')
// })

// node执行时 会有准备工作 (会浪费一定的时间)
// poll阶段 poll阶段下一个阶段是check阶段 文件读写操作
let fs =  require('fs')
fs.readFile('./.gitignore','utf8',function () {
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(function () {
    console.log('setImmediate');
  });
});
// 浏览器
// 宏任务 setTimeout setImmediate MessageChannel MuationObserver 
// 微任务 Promise.then nextTick