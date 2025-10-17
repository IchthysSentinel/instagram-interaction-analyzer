# Instagram Interaction Analytics Tool

Analyze Instagram interactions (comments and likes) from your Instagram data download.

## Features

- Analyze comments and likes data
- Simple browser UI to upload your JSON files
- Command Line Interface (CLI) for power users
- Free and open source under MIT License

## Usage

### Browser Version

1. Open `browser/index.html` in your browser.
2. Upload your `comments.json` and `likes.json` files exported from Instagram.
3. View analytics immediately.

### CLI Version

1. Install Node.js (https://nodejs.org/)
2. Open terminal and navigate to `cli` folder.
3. Run:
   ```bash
   npm install
   node cli.js --comments ../examples/sample-data/comments.json --likes ../examples/sample-data/likes.json
