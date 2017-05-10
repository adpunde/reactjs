# Introduction to React.js

## How to setup react.js server on local machine:
1. Install node.js and npm.
2. Create a main directory and do npm init.
3. Install following packages:
  npm install -g babel --save
  npm install -g babel-cli --save
  npm install -g webpack --save
  npm install -g webpack-dev-server --save
  npm install react --save
  npm install react-dom --save
  npm install babel-core
  npm install babel-loader
  npm install babel-preset-react
  npm install babel-preset-es2015
4. Create the App folder. Create index.html, App.jsx, main.js and webpack.config.js.
5. Modify webpack.config.js as follows:
var path = require('path');
var config = {
  entry: './main.js',
	
  output: {
    path: path.resolve('./'),
    filename: 'index.js',
 },
	
   devServer: {
      inline: true,
      port: 8080,
      host: 'server ip'
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
6. Add following entry to packages.json
  "start": "webpack-dev-server --hot"
7. Add your code to html, jsx, css etc. files.
8. Run npm start from the App directory.
  webpack: Compiled successfully should appear on the console.
9. Access the website from the browser.
