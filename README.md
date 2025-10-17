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


--------------------------------------------------------------------------------------------------------------------------------------

Yes — the steps I gave earlier *are* good, but I can refine them further based on your repo so they match what’s actually there. I checked your GitHub at **`https://github.com/IchthysSentinel/instagram-interaction-analyzer`** and saw that you have folders: `browser/`, `cli/`, `examples/sample-data/`, etc. ([GitHub][1])

Let me write a polished “Steps” section **tailored to your repo**. You can paste this into your `README.md`.

---

## 📋 Steps to Use This Project

### For Browser (No coding needed)

1. Download the repository:

   * Click the green **Code** button → **Download ZIP**
   * Or (if you know git) run:

     ```
     git clone https://github.com/IchthysSentinel/instagram-interaction-analyzer.git
     ```

2. Unzip / open the folder on your computer.

3. Inside the project, open:

   ```
   browser/index.html
   ```

   in your browser (Chrome, Firefox, Edge, etc.)

4. Prepare your Instagram data:

   * Go to Instagram’s data download page and request your data in JSON format.
   * After you receive the ZIP, unzip it.
   * Locate `comments.json` and `likes.json` from your Instagram export.

5. In the browser tool:

   * Upload your `comments.json` file
   * Upload your `likes.json` file
   * The tool will analyze and display results (top commenters, most liked, etc.)

---

### For CLI (Node.js) Usage

1. Make sure **Node.js** is installed on your machine.

2. In your terminal / command prompt, navigate to the CLI folder in the project:

   ```
   cd instagram-interaction-analyzer/cli
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the tool:

   ```
   node cli.js --comments ../examples/sample-data/comments.json --likes ../examples/sample-data/likes.json
   ```

   Replace the sample paths with paths to your Instagram data JSON files when ready.

5. You’ll see output in the terminal showing:

   * Total number of comments
   * Total number of likes
   * Top commenters
   * Top liked users/posts

---

### 🗂️ Project Folder Structure

```
browser/                  ← Files for browser-based UI
  ├ index.html
  ├ script.js
  └ style.css

cli/                      ← Command-line tool (Node.js)
  ├ cli.js
  └ package.json

examples/sample-data/     ← Example JSON files for testing
  ├ comments.json
  └ likes.json

README.md                 ← This guide and project summary
LICENSE                   ← MIT license
.gitignore                ← Files & folders to ignore (e.g. node_modules)
```

---


[1]: https://github.com/IchthysSentinel/instagram-interaction-analyzer "GitHub - IchthysSentinel/instagram-interaction-analyzer: Analyze Instagram interactions (comments, likes) from your data download. A simple tool to analyze your **Instagram Data Download** and get meaningful insights — all while keeping your data private and local."

---



