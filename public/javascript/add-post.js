// add post which will be on the dashboard
async function newFormHandler(event) {
    event.preventDefault();

    // pull info from the form that the user added
    const title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('input[name="post-body"]').value;
    
    // post the informtation to posts based on suer
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
      console.log("There was an issue adding your post.");
    }
}

// EVENT LISTENER
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);