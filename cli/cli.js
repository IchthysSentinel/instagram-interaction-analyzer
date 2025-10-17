#!/usr/bin/env node

const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('comments', {
    alias: 'c',
    type: 'string',
    description: 'Path to comments JSON file',
    demandOption: true,
  })
  .option('likes', {
    alias: 'l',
    type: 'string',
    description: 'Path to likes JSON file',
    demandOption: true,
  })
  .help()
  .argv;

function analyzeData(comments, likes) {
  const commentsCount = comments.length;
  const likesCount = likes.length;

  function topUsers(data) {
    const counts = {};
    for (const item of data) {
      const username =
        item.user?.username ||
        item.username ||
        item.commenter ||
        item.liker ||
        'unknown';

      counts[username] = (counts[username] || 0) + 1;
    }
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    return sorted.map(([user, count]) => ({ user, count }));
  }

  return {
    commentsCount,
    likesCount,
    mostCommentedUsers: topUsers(comments),
    mostLikedUsers: topUsers(likes),
  };
}

function main() {
  try {
    const commentsRaw = fs.readFileSync(argv.comments, 'utf-8');
    const likesRaw = fs.readFileSync(argv.likes, 'utf-8');

    const comments = JSON.parse(commentsRaw);
    const likes = JSON.parse(likesRaw);

    const result = analyzeData(comments, likes);

    console.log('Instagram Interaction Analysis:');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
