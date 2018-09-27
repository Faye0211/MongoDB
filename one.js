var startTime=(new Date()).getTime()
var db=connect('log')

// 循环插入
// for(let i=0;i<1000;i++){
//     db.test.insert({num:i})
// }
// this run this is:285ms

// 批量插入
var tempArray=[]
for(let i=0;i<1000;i++){
    tempArray.push({num:i})
}
db.test.insert(tempArray)
// this run this is:23ms
var runTime=(new Date()).getTime()-startTime

print('this run this is:'+runTime+'ms')