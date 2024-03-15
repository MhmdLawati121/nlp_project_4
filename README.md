# Project 4 - Evaluate a News Article with NLP

## Overview

This project makes use of the meaningcloud sentiment analysis API to analyse an article provided the URL, displaying the subjectivity and polarity of the text.

## Installation

- Clone or download the code.
- Run `npm install` to download the dependencies.
  - If some dependencies display an error during installation, attempt to install them by adding `--force` to the command.
  - If the dependencies are still not working, try the following commands independently:
    - `npm i cors dotenv express webpack webpack-cli`
    - `npm install --save-dev @babel/core@^7.5.4 @babel/preset-env@^7.5.4 babel-loader@^8.0.6 css-loader@^6.10.0 html-webpack-plugin@^5.6.0 jest@^29.7.0 jest-environment-jsdom@^29.7.0 jsdom@^24.0.0 mini-css-extract-plugin@^2.8.1 node-sass@^9.0.0 optimize-css-assets-webpack-plugin@^6.0.1 sass-loader@^14.1.1 style-loader@^3.3.4 terser-webpack-plugin@^5.3.10 workbox-webpack-plugin@^7.0.0 --force`
- Register to [Meaningcloud](https://www.meaningcloud.com/) to obtain an API key.
- Create a `.env` file in the root directory and type the text: `API_KEY = *****************` (replace API key with your own).
- Run the command `npm run build-dev` to start the dev server.
- To enable service workers, run the command `npm run build-prod`
- Navigate to localhost:8000 to view the page.
- Type in your article's URL to view the result.
