module.exports = function(config) {
	config.addPassthroughCopy({ './src/style.css': 'style.css' })
	config.addPassthroughCopy({ './src/assets/js/index.js': 'index.js' })
	return {
		dir: {
			input: './src',
			output: './build'
		}
	}
}
