// Auto-save function
function autoSave(event) {
    const target = event.target;
    const title = document.getElementById('title-input').value;
    const content = target.value;
  
    // Send the data to the server using AJAX
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
  
    function getCookie(name) {
      const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return cookieValue ? cookieValue.pop() : '';
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', './auto-save', true);
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle the response from the server
        console.log('Auto-save successful!');
      }
    };
    xhr.send(formData);
  }
  // Event listeners for auto-saving
  const titleInput = document.getElementById('title-input');
  const sectionTextareas = document.querySelectorAll('textarea[name^="section-content-"]');
  
  titleInput.addEventListener('input', autoSave);
  
  sectionTextareas.forEach(textarea => {
    textarea.addEventListener('input', autoSave);
  });
  
  sectionsContainer.addEventListener('input', function (event) {
    if (event.target.matches('textarea')) {
      autoSave(event);
    }
  });







  // Handle form submission
const articleForm = document.getElementById('article-form');
articleForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Perform any necessary data validation or manipulation here

  // Send the data to the server using AJAX or submit the form
  // (Example: using Fetch API)
  const formData = new FormData(articleForm);
  fetch('/save-article-url', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
});