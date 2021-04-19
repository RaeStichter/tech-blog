async function commentFormHandler(event) {
    event.preventDefault();

    // pulling the information from the textbox
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
      // getting the id based on what the window location indicates
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
        console.log("There was an issue adding your comment.");
      }
    }
}

// EVENT LISTENERS
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);