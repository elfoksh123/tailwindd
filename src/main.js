let darkbtn = document.getElementById('btnDark');
localStorage.setItem('mode', 'dark');

darkbtn.addEventListener('click', function(){
    
    if(localStorage.getItem('mode') == 'dark'){
        localStorage.setItem('mode', ' ');
    } else {
        localStorage.setItem('mode', 'dark');
    }

    console.log(localStorage.getItem('mode').trim().length === 0 );
    
    localStorage.getItem('mode').trim().length === 0 ?document.documentElement.classList.remove('dark'):
    document.documentElement.classList.add(localStorage.getItem('mode'));

});

// carsoul logic
let main_img = document.getElementById('main_img');
let btnRight = document.querySelector('#btnRight');
let btnLeft = document.querySelector('#btnLeft');

let max = 4;
let min = 1;
let current = main_img.getAttribute('src').charAt(7);


btnLeft.addEventListener('click', () => {
    if(current > min){
        --current;
    } else {
        current = 4;
    }
    main_img.setAttribute('src', `images/${current}.jpg`)
})

btnRight.addEventListener('click', () => {
    if(current < max){
        ++current;
    } else {
        current = 1;
    }
    main_img.setAttribute('src', `images/${current}.jpg`)
})

