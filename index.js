let darkMode=document.querySelector('.darkcheck');



darkMode.addEventListener('change',()=>{
    // document.body.classList.toggle('dark-theme');
    let currentTheme=document.body.getAttribute('data-bs-theme');
    document.body.setAttribute('data-bs-theme',currentTheme =='dark'? 'light':'dark')
});




function scrollRight(){
     document.querySelector('#imgcards').scrollBy({left:300, behavior:"smooth"});
}

  function scrolLeft() {
    document.querySelector('#imgcards')
      .scrollBy({ left: -300, behavior: "smooth" });
          //add overflow-x:auto or scroll class

  }


fetch('api.json').then(
    res=>res.json()
).then(data=> {
    const container=  document.querySelector('#imgcards');
    
    data.forEach(recipe => {
        const card=document.createElement('div');
        card.className='col-md-6 col-lg-3 col-12  ';

        card.innerHTML=`
            <img src="${recipe.image}" alt="${recipe.title}" height="80%" width="90%" class='rounded-3 border-color'>

        `
        container.appendChild(card);
    });
}).catch(error=>console.log(error));