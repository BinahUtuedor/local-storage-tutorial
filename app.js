const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

function appendComment (event) {

  const data = {
      // Define dynamic data to add
    avatar: "https://secure.gravatar.com/avatar/d1f5ca0d7e625f334c5186e112b77ebd",
    comment: commentInput.value,
    author: "Andy Leverenz"
  };
  
  // Prevent form from submitting
  event.preventDefault();

  // If comment textarea value < 1, return
  if (commentInput.value.length < 1 ) return;
  
  // Append comment
  template(data);

  // Reset textarea value
  commentInput.value = "";

  // Save the list to localStorage
  localStorage.setItem('commentListing', commentList.innerHTML);
}

submit.addEventListener('click', appendComment, false)

// Get instance of local storage key/value
const saved = localStorage.getItem('commentListing');

//Cehck if it exists and if so, set HTML to value
if (saved) commentList.innerHTML = saved;
