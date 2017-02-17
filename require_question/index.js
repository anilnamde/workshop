var gulp = require('gulp');
runTask('task:a')
require('./a/a.js');
runTask('task:a')

require('./b/b.js');
require('./c/c.js');


var gulplike = require('./gulplike/gulplike.js');
console.log('=========', JSON.stringify(gulplike));

// functions and variables declared in other module not avaiable
// output:  helloA is not defined
dontCrash(function(){
    console.log(helloA())
    console.log(strA)
    console.log(helloB())
    console.log(strB)
    console.log(helloC())
    console.log(strC)
})

function runTask(taskName){
    if (gulp.tasks[taskName]) { 
        gulp.start(taskName);
    }else{
        console.log(`${taskName} task missing`)
    }
}

function dontCrash(fun){
    try{
        fun()
    }catch(e){console.log(e)}
}