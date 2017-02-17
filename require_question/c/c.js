var gulp= require('gulp');

var gulplike = require('./../gulplike/gulplike.js');
gulplike['gulplike:in:c'] = "gulplike:in:c"

gulp.task('task:c', function(){
    console.log('module:c task task:c executed')
});

function helloC(){
    return 'module:c helloC function';
}

var strC = "module:c strC variable";

console.log("module:c " , helloC(), ', ', strC)

module.exports = {
    helloC: helloC,
    strC: strC
}
