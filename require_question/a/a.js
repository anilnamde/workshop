var gulp= require('gulp');
var gulplike = require('./../gulplike/gulplike.js');
gulplike['gulplike:in:a'] = "gulplike:in:a";

gulp.task('task:a', function(){
    console.log('module:a task task:a executed')
});

function helloA(){
    return 'module:a helloA function';
}

var strA = "module:a strA variable";

console.log("module:a " , helloA(), ', ', strA)

module.exports = {
    helloA: helloA,
    strA: strA
}
