const savePost = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const postTitle = document.querySelector('#title').value.trim();
    const comment = document.querySelector('#content').value.trim();

    if (postTitle && comment) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ postTitle, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/post');            // redirects to dashboard if login works
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#create-post')
    .addEventListener('click', savePost);
