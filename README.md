# Project 4 - Evaluate a News Article with NLP

## Overview

This project makes use of the meaningcloud sentiment analysis API to analyse an article provided the URL, displaying the subjectivity and polarity of the text.

## Installation

- Clone or download the code.
- Run `npm install` to download the dependencies.
  - If some dependencies display an error during installation, attempt to install them by adding `--force` to the command.
- Register to [Meaningcloud](https://www.meaningcloud.com/) to obtain an API key.
- Create a `.env` file in the root directory and type the text: `API_KEY = *****************` (replace API key with your own).
- Run the command `npm run build-dev` to start the dev server.
- To enable service workers, run the command `npm run build-prod`
- Navigate to localhost:8000 to view the page.
- Type in your article's URL to view the result.
