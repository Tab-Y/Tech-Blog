const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_Id = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('#comment-input').value;

  if (body) {
    await fetch('/api/comments', {       // runs the route to comments
      method: 'POST',
      body: JSON.stringify({
        post_Id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);