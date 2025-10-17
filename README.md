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



--------------------------------------------------------------------------------------------------------------------------------------


# Instagram Interaction Analytics Tool

A simple tool to analyze your Instagram comments and likes, using data exported from Instagram.

## 🔍 Features

- Upload your `comments.json` and `likes.json` in the browser
- Analyze who comments or likes most
- Works offline – no login required
- CLI version for developers / automation
- Free & open-source under MIT license

---

## 🚀 How to Use

### 🖥️ For Browser Users:

1. Open `browser/index.html` in any modern browser (Chrome, Edge, Firefox).
2. Upload your Instagram data files:
   - `comments.json`
   - `likes.json`
3. See your analytics instantly (no internet needed after opening the file).

To test, you can also use the sample files from:

examples/sample-data/comments.json
examples/sample-data/likes.json


---

### 💻 For CLI Users (Node.js required):

1. Open terminal
2. Navigate to the `cli` folder:
   ```bash
   cd cli


Install dependencies:

npm install


Run the analyzer with:

node cli.js --comments ../examples/sample-data/comments.json --likes ../examples/sample-data/likes.json


--------------------------------------------------------------------------------------------------------------------------------------


🧪 Sample Output
{
  "commentsCount": 5,
  "likesCount": 5,
  "mostCommentedUsers": [
    { "user": "alice", "count": 2 },
    { "user": "bob", "count": 2 },
    { "user": "charlie", "count": 1 }
  ],
  "mostLikedUsers": [
    { "user": "alice", "count": 2 },
    { "user": "dave", "count": 1 },
    { "user": "eve", "count": 1 },
    { "user": "bob", "count": 1 }
  ]
}
