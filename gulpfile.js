var gulp = require('gulp');
var through = require('through2')
var frontMatter = require('front-matter');
var markdownIt = require('markdown-it');
var hljs = require('highlight.js');
var objectAssign = require('object-assign');
var fs = require('fs');

const sourceDir = 'data'
const destinationDir = 'public/data'

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

const md = markdownIt({ 
  html: true, 
  linkify: true, 
  typographer: true, 
  highlight
})

var postIndex = {"count":0}

const addToIndex = function(metaInfo) {
    postIndex.count += 1
    if (!postIndex[metaInfo.layout]) {
      postIndex[metaInfo.layout] = []
    }
    postIndex[metaInfo.layout].push(metaInfo)
}

const compileMarkdown = function (file, enc, cb) {
    const meta = frontMatter(file.contents.toString())
    const body = md.render(meta.body)
    const fullResult = objectAssign({}, meta.attributes, {body})

    addToIndex(meta.attributes)

    file.contents = new Buffer(JSON.stringify(fullResult), "utf8");
    file.path = file.path.replace('.md', '.json')
    cb(null, file)
}

gulp.task('compile', function() {
    gulp.src(sourceDir+'/posts/**/index.md')
    .pipe(through.obj(compileMarkdown))
    .pipe(gulp.dest(destinationDir + '/posts/'))
    .on('end', function(){ 
        fs.writeFile(destinationDir+"/posts/index.json", JSON.stringify(postIndex), "utf8")
    });
    
    gulp.src([sourceDir+'/posts/**/*.*', '!'+sourceDir+'/posts/**/*.md'])
    .pipe(gulp.dest(destinationDir + '/posts/'))

    gulp.src(sourceDir+'/*.json')
    .pipe(gulp.dest(destinationDir))
});
