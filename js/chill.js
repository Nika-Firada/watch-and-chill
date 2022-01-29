const arrows = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i)=>{
    let counter = 0;
    const itemNumber = movieList[i].querySelectorAll('img').length;
    arrow.addEventListener('click', ()=>{
        const ratio = Math.floor(window.innerWidth/270);
        counter++;
        if(itemNumber - (4 + counter) + (4-ratio) >= 0){
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }else{
            movieList[i].style.transform = 'translateX(0)';
            counter = 0;
        }
        
    });
    
});






const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container, .movie-list-tittle, .navbar-container, .sidebar, .left-menu-icon, .toggle');
ball.addEventListener('click', ()=>{
    items.forEach(item=>{
        item.classList.toggle('active');
    })
    ball.classList.toggle('active');
});