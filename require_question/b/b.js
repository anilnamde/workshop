var gulp= require('gulp');

var gulplike = require('./../gulplike/gulplike.js');
gulplike['gulplike:in:b'] = "gulplike:in:b"


gulp.task('task:b', function(){
    console.log('module:b task task:b executed')
});

function helloB(){
    return 'module:b helloB function';
}

var strB = "module:b strB variable";

console.log("module:b " , helloB(), ', ', strB)

module.exports = {
    helloB: helloB,
    strB: strB
}
