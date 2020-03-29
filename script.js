/*const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {

MENU.querySelectorAll('.name_button_menu').forEach(el => el.classList.remove('active'));
event.target.classList.add('active');
})*/
                                              


//                                                          Slider

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled= true;

function changeCurrentItem(n) {
    currentItem = (n+items.length)% items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });

}

function showItem(direction) {
    
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });

}

function previousItem(n) {
hideItem('to-right');
changeCurrentItem(n-1);
showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
    }

document.querySelector('.control.left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

    
    document.querySelector('.control.right').addEventListener('click', function() {
        if (isEnabled) {
            nextItem(currentItem);
        }
    });
    let check = true;

    //                                                 Phone's screens 


    const OnOff1 = () => {
    
        if (check) {
            document.querySelector('.screenOff1').classList.add('disactive1');
            check = false;
        }
        else {
            document.querySelector('.screenOff1').classList.remove('disactive1');
            check = true;
        }
    }
    document.querySelector('.switch1').addEventListener('click', OnOff1);

    let check2=true;

    const OnnOff2 = () => {
        if(check2) { 

            document.querySelector('.screenOff2').classList.add('disactive2');
            check2 = false;

        }
        else {
            document.querySelector('.screenOff2').classList.remove('disactive2');
            check2 = true;
        }
    }
    document.querySelector('.switch2').addEventListener('click', OnnOff2);

    //                                              Portfolio 
    /////

let bott = document.querySelector('.navigationPortfolio>div>ul');
let pic = document.querySelector('.mainPage2');
bott.addEventListener('click', function(event) {
if (event.target.tagName==='LI'){
    document.querySelectorAll('.navigationPortfolio .portMenu').forEach(function(item){
    item.classList.remove('activeBut');
    event.target.classList.add('activeBut');
    pic.insertBefore(pic.firstChild,pic.lastChild);
    pic.insertBefore(pic.childNodes[1],pic.childNodes[2]);
    
}); }

})

let imgboxes = document.querySelector('.mainPage2');
imgboxes.addEventListener('click', function(event){
    if (event.target.tagName==='IMG') {
        document.querySelectorAll('.imgbox>img').forEach(function(item){
            item.classList.remove('activePic');
        });
        event.target.classList.add('activePic');
    }

});



let form = document.getElementById('button');
form.addEventListener('click',function(){
    let nameVar = document.getElementById('name'); 
    let nameText=nameVar.value;
    
    let emailVar = document.getElementById('email'); 
    let emailText=emailVar.value;

    let subjectVar = document.getElementById('subject');
    let subjectText = subjectVar.value;

    let projectVar=document.getElementById('project_detail');
    let projectText=projectVar.value;

    if (nameText.length>0&&emailText.length>0&&emailVar.validity.valid){
    document.querySelector('.infoWindow').classList.add('activeWindow');
    if (subjectText.length>0) {
    document.getElementById('div2').textContent=`Тема: ${subjectText}`;
    }
    else {
        document.getElementById('div2').textContent='Без темы';
    }
    if(projectText.length>0){
    document.getElementById('div3').textContent=`Описание: ${projectText}`;
    }
    else {
        document.getElementById('div3').textContent='Нет описания';
    }
    }
});

let resetBut=document.getElementById('resetBut');
resetBut.addEventListener('click', function(){
document.querySelector('.infoWindow').classList.remove('activeWindow');

});