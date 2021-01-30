const btnTab = document.querySelector('#tab-button')

btnTab.addEventListener('click',function(e) {
    const btnTarget = e.target
    const target = btnTarget.dataset.target
    const divToShow = document.querySelector('#'+target)
    const divElements = document.querySelectorAll('.button-con')


    divElements.forEach(function(el){
        el.hidden = true

    })
        divToShow.hidden = false
})


const menu = document.querySelector('#buttonCon-men')
fetch('https://obscure-tundra-54269.herokuapp.com/bar-food')
.then((resp)=> resp.json())
.then(function (data) {
    console.log(data.entrees)
    const entrees = data.entrees.map(function(item){
        return `<p> -- ENTREES --- </p>
                <p>${item.name} ....................... ${item.price}</p>
                    <p>${item.description}</p>  `
    })
    menu.innerHTML=entrees.join('')
})
