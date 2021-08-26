const gulp 							= require('gulp'),
			twig2html 				= require('./gulp/tasks/twig2html')
			styles	 					= require('./gulp/tasks/styles')
			scripts	 					= require('./gulp/tasks/scripts')
			images	 					= require('./gulp/tasks/images')
			icons	 						= require('./gulp/tasks/icons')
			fonts	 						= require('./gulp/tasks/fonts')
			static	 					= require('./gulp/tasks/static')
			serve	 						= require('./gulp/tasks/serve')
			clean 						= require('./gulp/tasks/clean')

function setMode(isProduction = false) {
	return cb => {
		process.env.NODE_ENV = isProduction ? 'production' : 'development'
		cb()
	}
}

const dev = gulp.parallel(twig2html, static, styles, scripts, fonts, images, icons)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)