module.exports = function(config) {
	config.addPassthroughCopy({ './src/style.css': 'style.css' })
	// config.addPassthroughCopy({ './src/assets/js/index.js': 'index.js' })

	config.addCollection('pillars', (collection) => {
		return collection.getFilteredByGlob('./src/pillars/*.md')
	})

	config.setTemplateFormats(["njk", "html", "liquid", "md"])
	return {
		dir: {
			input: './src',
			output: './build'
		}
	}
}
