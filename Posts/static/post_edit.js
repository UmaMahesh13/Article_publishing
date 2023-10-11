
const addSectionButton = document.getElementById('add-section-button');
const sectionsContainer = document.getElementById('sections-container');
let sectionIndex = 0;

// Helper function to check if a section is empty
function isEmptySection(section) {
  const sectionContent = document.querySelector('.section-content');
  if(section.classList.contains('text')){
    console.log(`previous is text section${section.class}`)
    return section.value.trim() === '';
    

  };
  if(section.classList.contains('image')){
    console.log("previous section is image")
    return false;
     
  }
  else{
    console.log("give image")
    return true;
     
  }
  
}

addSectionButton.addEventListener('click', () => {
  
  // Check if the previous section is empty before adding a new section
  if (sectionIndex===0){var previousSection=null}
  else{if (document.getElementById('options')) {
    document.getElementById('options').remove();
  }var previousSection = sectionsContainer.lastElementChild}
  if (!previousSection || !isEmptySection(previousSection)) {
      //show buttons
      const sectionchoicestemplate=`<span class="section-choices">
      <button class="choice" id="sec">section</button>
      <button class="choice" id="img">image</button>
      <button class="choice" id="vid">video</button>
      </span>
      `;
      addSectionButton.insertAdjacentHTML('afterend',sectionchoicestemplate)
      var buttons = document.querySelectorAll('.choice');

    // Add event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Button clicked, perform your desired action here
            console.log('Button clicked:', button.id);
            switch (button.id) {
              case 'sec':
                handlesectionbutton();
                break;
              case 'img':
                handleimageButton();
                break;
              case 'vid':
                handleVideoButton();
                break;
              default:
                break;
        
            }
            
        });
      })
    sectionIndex++;
    console.log(`${sectionIndex}`)
  }});


  document.addEventListener('click', function(event) {
    const section = event.target;
    const templateButtons = document.getElementById('templateButtons');
    console.log(event.target.classList)
    if (document.getElementById('options' & sectionIndex!=0)) {
      document.getElementById('options').remove();
    }
    if (Array.from(event.target.classList).some(className => className.startsWith('section-'))) {
      const template=`<div id="options">
      <button>Add</button><button>Delete</button></div>`
      section.insertAdjacentHTML('afterend',template);
    } 
  });
  



