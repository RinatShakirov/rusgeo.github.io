window.addEventListener('load', function(){
    const btn_toggle = document.querySelector('.toggl__btn');
    const nav_show = document.querySelector('.nav_inner');
    
    btn_toggle.addEventListener('click', (e)=>{
        nav_show.classList.add('active');
    })

});