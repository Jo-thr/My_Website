const cursorwhite = document.querySelector('.cursorwhite');

document.addEventListener('mousemove', e => {
    cursorwhite.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX -20)+"px;" )
})

document.addEventListener('click', () =>{
    cursorwhite.classList.add('expand');

    setTimeout(()=>{
        cursorwhite.classList.remove("expand");
    }, 500);
})
