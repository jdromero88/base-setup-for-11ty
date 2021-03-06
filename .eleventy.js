module.exports = function(config) {
	config.addPassthroughCopy({ './src/style.css': 'style.css' })
	// config.addPassthroughCopy({ './src/assets/js/index.js': 'index.js' })
	config.setTemplateFormats(["html", "liquid", "njk"])
	return {
		dir: {
			input: './src',
			output: './build'
		}
	}
}
