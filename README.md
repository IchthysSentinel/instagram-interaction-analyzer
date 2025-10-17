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


Absolutely! Here's a **clear, step-by-step guide** you can add to your `README.md` under a section like:

---

## 📋 Step-by-Step Instructions

This guide helps both **non-technical users** (who want to use the browser version) and **technical users** (who prefer CLI).

---

### ✅ For Browser Users (No Coding Needed)

Use this if you want to run the tool directly in your browser (like Chrome).

#### Step 1: Download or Clone the Repository

* Option A: Click the green **"Code"** button on the GitHub page, then **Download ZIP**
* Option B (if you know Git): Run

  ```bash
  git clone https://github.com/your-username/instagram-interaction-analyzer.git
  ```

#### Step 2: Open the Tool

* Open the folder you downloaded or cloned.
* Go to the `browser` folder.
* **Double-click `index.html`** — it will open in your browser.

#### Step 3: Get Your Instagram Data

* Go to [https://www.instagram.com/download/request/](https://www.instagram.com/download/request/)
* Download your data (choose **JSON format**)
* Unzip the file from Instagram
* Locate your:

  * `comments.json` file (in `comments/` folder)
  * `likes.json` file (in `likes/` folder)

#### Step 4: Use the Tool

* In the browser, **upload** your `comments.json` and `likes.json`
* The tool will instantly analyze your interactions and show:

  * Total comments and likes
  * Who interacts with you the most

---

### 🧑‍💻 For CLI Users (Command Line / Developers)

Use this if you're familiar with **Node.js and terminal**.

#### Step 1: Install Node.js

* Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)

#### Step 2: Navigate to CLI folder

```bash
cd instagram-interaction-analyzer/cli
```

#### Step 3: Install dependencies

```bash
npm install
```

#### Step 4: Run the tool

```bash
node cli.js --comments ../examples/sample-data/comments.json --likes ../examples/sample-data/likes.json
```

Replace the sample file paths with the real paths to your Instagram data JSON files if needed.

---

### 📁 Project Folder Overview

```
📁 browser/               → HTML, CSS, and JavaScript (open index.html)
📁 cli/                   → Node.js CLI version
📁 examples/sample-data/  → Sample comments.json and likes.json files
📄 README.md              → This file
📄 LICENSE                → MIT license
📄 .gitignore             → Ignored files config
```

---



