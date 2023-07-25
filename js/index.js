 // Load your images on page-load
 function preloader() {
     const imagesList = [
         "./img/image1.jpg",
         "./img/image2.jpg",
         "./img/image3.jpg"
     ];
     const images = [];
     for (let i = 0; i < imagesList.length; i++) {
         images[i] = new Image();
         images[i].src = imagesList[i];
     }

     // Images ready to be used:
     console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
 };
 window.addEventListener("load", preloader);


 /* 
 Get all buttons in a NODE LIST of buttons (array like structure) */
 let links = document.querySelectorAll('button');

 /* 
 Complete your resource-object that will store the dynamic buttonContent.
 Resource object should 3 sub-objects. Give your sub-objects
 meaningful names. Every sub-object should have the following
 properties headingbuttonContent, bodyText, imgUrl and imgAlt. */

 let data = {
     government: {
         headingbuttonContent: 'Government Support',
         bodyText: 'Government help is one of the best methods to make green energy accessible for the average individual. To promote the use of sustainable energy technologies, governments can offer a variety of incentives and subsidies. For the installation of solar panels, wind turbines, energy-efficient appliances, or electric vehicles, these incentives may include tax credits, grants, or refunds. Government initiatives can also aid in lowering the initial cost necessary to switch to renewable energy, making it more accessible to a wider spectrum of individuals.',
         imgURL: './img/image1.jpg',
         imgALT: 'Windmill in Green Field'
     },
     solar: {
         headingbuttonContent: 'Community Solar Initiatives',
         bodyText: 'Community solar initiatives let several people share the advantages of a single solar energy system. Participants can sign up for a shared solar farm or array in their neighbourhood as an alternative to installing solar panels on their own properties. With this strategy, clean energy is made available to those who might not have adequate rooftops or enough money for individual installations. It also does away with the requirement for upfront payments. A participants portion of the solar energy produced by the community system is normally credited against their electricity costs.',
         imgURL: './img/image2.jpg',
         imgALT: 'Solar Panels'
     },
     education: {
         headingbuttonContent: 'Education for Energy Efficiency',
         bodyText: 'Promoting energy efficiency education is crucial to lowering the cost of clean energy. Many consumers are unaware of the substantial cost reductions that can be achieved by making minor modifications to their energy use habits. People can lower their overall energy usage and possibly use the savings to fund renewable energy sources by giving information and resources on energy-saving techniques. Providing accessible financing options, such as low-interest loans or pay-as-you-save plans, can additionally assist people in paying for the upfront costs of clean energy installations while recouping their investment from the money they save on energy prices.',
         imgURL: './img/image3.jpg',
         imgALT: 'Windmill Fan zoomed-in'
     }
 };

 /* 
 Get the reference to your HTML-container
 that will be dynamically loaded from the resource-object. */
 let buttonContent = document.querySelector('.content');

 /* 
 The first button in a NODE LIST of buttons will initially 
 have the id: active-button - this will uniquely style 
 the active button (CSS rule). 

 The first buttonContent from the
 resource-object will be loaded on the page load:
 `<h1>${headingbuttonContent}</h1>
  <img src="${imgUrl}" alt="${imgAlt}">
  <p>${bodyText}</p>` */

 buttonContent.innerHTML = 
        `<h1 class="contentHead">${data.government.headingbuttonContent}</h1>
        <img src="${data.government.imgURL}" alt="${data.government.imgALT}">
        <p>${data.government.bodyText}</p>`;

 /* 
 Start your handleSelection function here. */

 function handleSelection(event) {

     /* 
     Remove the id active-button from the element that
     contains it prior to the click-event. */


     let currentItem = event.target.parentElement;

     /*
     This will require the loop throught the NODE LIST of buttons. 
     Inside the loop, use conditional and the element object method
     hasAttribute() to check if the current button in the loop containes the id.
     If it does, use element-object property removeAttribute()
     to remove the id. */

     for (let i = 0; i < links.length; i++) {
         if (links[i].hasAttribute('id')) {
             links[i].removeAttribute('id')
         }
     }

     /*
     Use the element-object method setAttribute() to set the id active-button 
     to the currently clicked button. */

     currentItem.setAttribute('id', 'active');

     /* 
     Use conditional and event-object to check which button is clicked
     and based on that, create HTML with the data inside the backticks:
     `<h1>${headingbuttonContent}</h1>
      <img src="${imgUrl}" alt="${imgAlt}">
      <p>${bodyText}</p>`
     Assign this buttonContent to to your HTML-container that will 
     be dynamically loaded (you already got the reference to 
     this container before you started the function handleSelection) */

     console.log(event.target.classList);
     let buttonClicked = event.target.classList;
     
     if (links[0].hasAttribute('id')) {
         buttonContent.innerHTML = `<h1 class="contentHead">${data.government.headingbuttonContent}</h1>
            <img src="${data.government.imgURL}" alt="${data.government.imgALT}">
            <p>${data.government.bodyText}</p>`;
     } else if (links[1].hasAttribute('id')) {
         buttonContent.innerHTML = `<h1 class="contentHead">${data.solar.headingbuttonContent}</h1>
            <img src="${data.solar.imgURL}" alt="${data.solar.imgALT}">
            <p>${data.solar.bodyText}</p>`;
     } else if (links[2].hasAttribute('id')) {
         buttonContent.innerHTML = `<h1 class="contentHead">${data.education.headingbuttonContent}</h1>
            <img src="${data.education.imgURL}" alt="${data.education.imgALT}">
            <p>${data.education.bodyText}</p>`;
     } 

     /* 
     Close your handleSelection function here. */
 }
 /* 
 Register all buttons to click event. The event-handler handleSelection will listen 
 for this event to happen. */
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleSelection);
}
