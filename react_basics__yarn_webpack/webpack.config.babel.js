import path from 'path';

const config = {
    entry: {
        app: path.resolve(__dirname, 'src/js/app.jsx'),
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    }

};

export default config;