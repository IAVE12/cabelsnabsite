let gulp = require('gulp')

gulp.task("style", function(){
    return gulp
    .src(["node_modules/normalize.css/normalize.css",
    "node_modules/slick-carousel/slick.css"
       ])
})

gulp.tack('script',function(){
    return gulp.src([
        "node_moduls/slick-carousel/slick/slick.js"
    ])
})