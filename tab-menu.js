const btnTab = document.querySelector('#tab-button')

btnTab.addEventListener('click',function(e) {
    const btnTarget = e.target
    const target = btnTarget.dataset.target
    const divToShow = document.querySelector('#'+target)
    const divElements = document.querySelectorAll('.button-con')
    console.log(btnTarget)


    divElements.forEach(function(el){
        el.hidden = true
    })
        divToShow.hidden = false
})

const btnMenu = document.querySelector('#menu-select')
btnMenu.addEventListener('click',function(e){
    const buttonTarget = e.target
    const menuTarget = buttonTarget.dataset.target
    const menuToShow = document.querySelector('#'+menuTarget)
    const menuElements = document.querySelectorAll('.menu-Con')
    menuElements.forEach(function(elm){

        elm.hidden = true
    })
        menuToShow.hidden = false
})


const menu = document.querySelector('#buttonCon-men')
const appetizer = document.querySelector('#menuCon-appetizer')
const lunch = document.querySelector('#menuCon-lunch')
const dinner = document.querySelector('#menuCon-dinner')
const dessert = document.querySelector('#menuCon-dessert')
const spicy = '<a href="" id ="spicy"><span><img src="images/chili.png"></span></a>'
const allergy = '<a href="#" id ="allergy"> <span class="fa fa-exclamation"></span></a>'
const favorite = '<a href="#" id ="favorite"> <span class="fa fa-star"></span></a>'
const vegan = '<a href="#" id ="vegan"> <span class="fa fa-leaf"></span></a>'

fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
.then((response)=>response.json())
.then(function(data){
    const dnr = data.entrees.map(function(x){

        return ` 
        <div class= "name-price">
            <span class ="name">${x.name}</span> <span class ="dot">................................................................................ </span> <span class ="price"> $${x.price}</span>
        </div
        <div class ="desc-note-din">
            <span class ="desc-din">${x.description}</span> <span id = "note-din"> ${allergy} ${favorite}
             ${spicy} ${vegan} </span>
        </div>
        `
    })
    dinner.innerHTML=dnr.join('')
})

fetch('https://obscure-tundra-54269.herokuapp.com/bar-food')
.then((resp)=> resp.json())
.then(function (data) {
    const appetizers = data.appetizers.map(function(item){
        return `
            <div class= "name-price">
                <span class ="name">${item.name}</span> <span class ="dot">............................................................................... </span> <span class ="price"> $${item.price}</span>
            </div>  
                    
            <div class ="desc-note">
                <span class ="desc">${item.description}</span> <span id = "note"> 
                ${allergy} ${favorite} ${spicy} ${vegan} </span>
            </div>                     ` 
    })
 
    const lunchs = data.entrees.map(function(item){  
        // console.log(item.name)
        return `
                 <div class= "name-price">
                    <span class ="name">${item.name} </span> <span class ="dot">............................................................................... </span> <span class ="price"> $${item.price}</span>
                </div>
                <div class ="desc-note">
                <span class ="desc">${item.description}</span> <span id = "note"> 
                ${allergy} ${favorite} ${spicy} ${vegan} </span>
            </div>                     ` 
    })
    const desserts= data.desserts.map(function(item){
        return `

        <div class= "name-price">
                <span class ="name">${item.name} </span> <span class ="dot">............................................................................... </span> <span class ="price"> $${item.price}</span>
        </div>    
        <div class ="desc-note">
        <span class ="desc">${item.description}</span> <span id = "note"> 
        ${allergy} ${favorite} ${spicy} ${vegan} </span>
    </div>                     ` 
})

    
    appetizer.innerHTML=appetizers.join('') 
    lunch.innerHTML= lunchs.join('')
    dessert.innerHTML=desserts.join('')
})

// const textNote = document.getElementById('.desc-note')

// textNote.addEventListener('mouseover', function(e){
//     debugger
//     alert ('hello')

// })
// const menueSel = document.querySelector('#menu-select')

// menueSel.addEventListener('click',function(e) {
//     const menuTgt = e.target
//     menuTgt.style.borderBottom = '3px solid #ADACAD'
//     if (menuTgt.id = 'menu-appet') {
//         menuTgt
//     }
//     // if menuTgt.id = 'story')

// })