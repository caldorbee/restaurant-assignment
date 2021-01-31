const btnTab = document.querySelector('#tab-button')

btnTab.addEventListener('click',function(e) {
    const btnTarget = e.target
    const target = btnTarget.dataset.target
    const divToShow = document.querySelector('#'+target)
    const divElements = document.querySelectorAll('.button-con')
    console.log(btnTarget)

    // if (btnTarget.style.borderBottom = '0px') {
    //     btnTarget.style.borderBottom = '3px solid #ADACAD'
    // } else 

    divElements.forEach(function(el){
        el.hidden = true
    })
        divToShow.hidden = false
})

const btnMenu = document.querySelector('#menu-select')
btnMenu.addEventListener('click',function(e){
    const buttonTarget = e.target
    // console.log(buttonTarget)
    const menuTarget = buttonTarget.dataset.target
    const menuToShow = document.querySelector('#'+menuTarget)
    const menuElements = document.querySelectorAll('.menu-Con')
// console.log(menuElements)
    menuElements.forEach(function(elm){
        elm.hidden = true
        // console.log(elm)
    })
        menuToShow.hidden = false
})


const menu = document.querySelector('#buttonCon-men')
const appetizer = document.querySelector('#menuCon-appetizer')
const lunch = document.querySelector('#menuCon-lunch')
const dinner = document.querySelector('#menuCon-dinner')
const dessert = document.querySelector('#menuCon-dessert')

fetch('https://obscure-tundra-54269.herokuapp.com/casual-dining')
.then((response)=>response.json())
.then(function(data){
    const dnr = data.entrees.map(function(x){

        return ` 
        <div class= "name-price">
            <span class ="name">${x.name}</span> <span class ="dot">................................................................................ </span> <span class ="price"> $${x.price}</span>
        </div
        <span class ="desc-din">${x.description}</span>  `
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
                        <span class ="desc">${item.description}</span> <span>
                    
                     `
    })

    const lunchs = data.entrees.map(function(item){ 
        // console.log(item.name)
        return `
                 <div class= "name-price">
                    <span class ="name">${item.name} </span> <span class ="dot">............................................................................... </span> <span class ="price"> $${item.price}</span>
                </div>
                <p class="desc">${item.description}</p>  `
    })
    const desserts= data.desserts.map(function(item){
        return `

        <div class= "name-price">
                <span class ="name">${item.name} </span> <span class ="dot">............................................................................... </span> <span class ="price"> $${item.price}</span>
        </div>    
                <p class = "desc">${item.description}</p>  `
    })

    
    appetizer.innerHTML=appetizers.join('') 
    lunch.innerHTML= lunchs.join('')
    dessert.innerHTML=desserts.join('')
})


// const menueSel = document.querySelector('#menu-select')

// menueSel.addEventListener('click',function(e) {
//     const menuTgt = e.target
//     menuTgt.style.borderBottom = '3px solid #ADACAD'
//     if (menuTgt.id = 'menu-appet') {
//         menuTgt
//     }
//     // if menuTgt.id = 'story')

// })