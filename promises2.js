const p1 = fetch('https://jsonplaceholder.typicode.com/users');
const p2 = fetch('https://jsonplaceholder.typicode.com/posts');
const p3 = fetch('https://jsonplaceholder.typicode.com/comments');

// Promise.all → all must succeed
Promise.all([p1, p2, p3])
  .then(responses => {
    // Convert all responses to JSON
    return Promise.all(responses.map(res => res.json()));
  })
  .then(([user, posts, comments]) => {
    console.log(" All data loaded!");

    console.log("User:", users.length);
    console.log("Posts:", posts.length);
    console.log("Comments:", comments.length);
  })
  .catch(err => {
    console.log(" One failed:", err);
  });