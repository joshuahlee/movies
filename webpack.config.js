const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './client/dist'),
  },

  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './client/src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        use: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }

      


    ]
  }

};

// {
//   test: [/\.js$/], // include .js files
//   enforce: "pre", // preload the jshint loader
//   exclude: /node_modules/, // exclude any and all files in the `node_modules folder`
//   use: [
//           { loader: "babel-loader" }, 
//           options: {
//               presets: [
//                   "@babel/preset-env",
//                   "@babel/preset-react"
//               ],
//               plugins: [
//                   "@babel/plugin-syntax-dynamic-import",
//                   "@babel/plugin-proposal-class-properties"
//               ]
//             }
    
//           },
        
//         ]
//       },
//      {test: [/\.scss$/,
//       use: [
//           { loader: "style-loader" }, 
//           { loader: "css-loader" },
//           {
//   loader: 'postcss-loader',
//   options: {
//     config: {
//        path: 'path/to/postcss.config.js'
//     }
//   }
// },
//           { loader: "sass-loader" },
//      ],
//   }