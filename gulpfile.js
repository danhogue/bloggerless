var gulp = require('gulp');
var through = require('through2')
var frontMatter = require('front-matter');
var markdownIt = require('markdown-it');
var hljs = require('highlight.js');
var objectAssign = require('object-assign');

const compileSource = 'data'
const compileDestination = 'public/data'

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

const compileMarkdown = function (chunk, enc, cb) {
    const md = markdownIt({ html: true, linkify: true, typographer: true, highlight})
    const meta = frontMatter(chunk.contents + "")
    const body = md.render(meta.body)
    const result = objectAssign({}, meta.attributes, {body})
    chunk.contents = new Buffer(JSON.stringify(result), "utf8");
    chunk.path = chunk.path.replace(/[^\/]*$/, '')+"index.json"
    cb(null, chunk)
}

const markdownToJson = function (file, enc, cb) {
    const folderName = file.path.match(/([^\/]*)\/*$/)[1]
    gulp.src(file.path+'/*.md')
    .pipe(through.obj(compileMarkdown))
    .pipe(gulp.dest(compileDestination + '/posts/' + folderName))
    cb(null, file)
}

const copyPostFiles = function (file, enc, cb) {
       const folderName = file.path.match(/([^\/]*)\/*$/)[1]
        gulp.src(file.path+'/*.png')
        .pipe(gulp.dest(compileDestination + '/posts/' + folderName))
        gulp.src(file.path+'/*.jpg')
        .pipe(gulp.dest(compileDestination + '/posts/' + folderName))
        gulp.src(file.path+'/*.css')
        .pipe(gulp.dest(compileDestination + '/posts/' + folderName))
    cb(null, file)
}

gulp.task('compile', function() {
   gulp.src(compileSource+'/posts/*')
   .pipe(through.obj(markdownToJson))  
   .pipe(through.obj(copyPostFiles))
   gulp.src(compileSource+'/*.json')
   .pipe(gulp.dest(compileDestination))
});
