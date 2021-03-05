module.exports = function(config) {
	config.addPassthroughCopy({ './src/style.css': 'style.css' })
	return {
		dir: {
			input: './src',
			output: './build'
		}
	}
}
