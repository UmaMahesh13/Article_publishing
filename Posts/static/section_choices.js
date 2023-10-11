function handlesectionbutton(){
    const template=`<textarea style="display:block;" class="section-${sectionIndex} text" 
    placeholder="Section Content"></textarea>`
    sectionsContainer.insertAdjacentHTML('beforeend', template);
    const choices=document.querySelector('.section-choices')
    choices.remove()
  }
  function handleimageButton(){
    const template=`<div id="fileinput"><input type="file" id="imageInput">
      <button id="submitButton">Submit</button></div>
      `
    sectionsContainer.insertAdjacentHTML('beforeend', template);
    const choices=document.querySelector('.section-choices')
    choices.remove()
    document.getElementById('submitButton').addEventListener('click', function() {
      var fileInput = document.getElementById('imageInput');
      var file = fileInput.files[0];
      
      if (file) {
          var reader = new FileReader();
          
          reader.onload = function(e) {
              var imageElement = document.createElement('img');
              imageElement.src = e.target.result;
              imageElement.alt = 'Submitted Image';
              imageElement.classList.add(`section-${sectionIndex}`,"image")
              imageElement.style=" max-width: 300px;max-height: 200px;height: auto;display:block"
              sectionsContainer.appendChild(imageElement);
          };
          reader.readAsDataURL(file);
          document.getElementById('fileinput').remove()
  }});return 0;};
  