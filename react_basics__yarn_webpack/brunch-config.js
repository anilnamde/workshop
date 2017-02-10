exports.config = {
    paths: {
        watched: ['src/scss', 'src/js'],
        public: 'dist'
    },
    files: {
        stylesheets: {joinTo: 'app.css'},
        javascripts: {joinTo: 'app.js'}
    },
    plugins: {
        babel: {
            presets: ['es2015', 'es2016', 'react']
        }
    }
};