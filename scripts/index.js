const menuItens = document.querySelectorAll('.menu a[href^="#"');

menuItens.forEach(itens => {
        itens.addEventListener('click', scrollIdOnClick)
})

function scrollIdOnClick(event)
{
    event.preventDefault()
    const elemento = event.target;
    const id = elemento.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    console.log(to);

    window.scroll({
        top: to - 55 ,
        behavior: "smooth",

    })
}