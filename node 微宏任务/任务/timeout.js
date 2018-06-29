setTimeout(() => {
  console.log('setTimeout1')
  Promise.resolve().then(data => {
    console.log('微任务1')
  })
}, 0);
Promise.resolve().then(data=>{
  console.log('微任务2')
  setTimeout(() => {
    console.log('setTimeout2')
  }, 0);
});
//微任务2 setTimeout2 微任务1 setTimeout1