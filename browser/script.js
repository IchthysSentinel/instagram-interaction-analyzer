document.getElementById('uploadForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const commentsFile = document.getElementById('commentsFile').files[0];
  const likesFile = document.getElementById('likesFile').files[0];

  if (!commentsFile || !likesFile) {
    alert('Please select both comments and likes JSON files.');
    return;
  }

  const resultsDiv = document.getElementById('results');
  resultsDiv.textContent = 'Reading files...';

  try {
    const commentsText = await commentsFile.text();
    const likesText = await likesFile.text();

    const commentsData = JSON.parse(commentsText);
    const likesData = JSON.parse(likesText);

    const analysis = analyzeData(commentsData, likesData);

    resultsDiv.textContent = JSON.stringify(analysis, null, 2);
  } catch (error) {
    resultsDiv.textContent = 'Error reading or parsing JSON files: ' + error.message;
  }
});

function analyzeData(comments, likes) {
  // Simple summary counts
  return {
    commentsCount: comments.length,
    likesCount: likes.length,

    mostCommentedUsers: topUsers(comments, 'commenter'),
    mostLikedUsers: topUsers(likes, 'liker'),
  };
}

function topUsers(data, userKey) {
  // userKey is example 'commenter' or 'liker', you may adjust depending on JSON structure

  // We'll guess data items have a 'username' property.  
  // Adjust if your JSON structure differs.

  const counts = {};
  for (const item of data) {
    // Try to find username field (fallback)
    const username =
      item.user?.username ||
      item.username ||
      item.commenter ||
      item.liker ||
      'unknown';

    counts[username] = (counts[username] || 0) + 1;
  }

  // Sort descending
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return sorted.map(([user, count]) => ({ user, count }));
}
