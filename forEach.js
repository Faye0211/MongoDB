var db = connect("company")  //进行链接对应的集合collections
var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
result.forEach(function(result){
    printjson(result)
})