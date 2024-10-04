import {src , dest ,watch} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

export function hola( done ){
    console.log("hola desde gulpfile");
    done()
}

const sass = gulpSass(dartSass)

export function css(done){
    src('src/scss/app.scss' , {sourcemaps:true})
    .pipe(sass().on('error',sass.logError))
    .pipe(dest('dist/css') , {sourcemaps:true})

    done()
}
export function dev(){
    watch('src/scss/**/*.scss',css)
}




