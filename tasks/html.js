const {
	src,
	dest
} = require('gulp');
const include = require('gulp-file-include');
const typograf = require('gulp-typograf');
const bs = require('browser-sync');

module.exports = function html() {
	return src(['src/**/*.html', '!src/components/**/*.html'])
		.pipe(include())
		.pipe(typograf({
      locale: ['ru', 'en-US']
    }))
		.pipe(dest('build'))
		.pipe(bs.stream())
}