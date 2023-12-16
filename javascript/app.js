    const search=document.querySelector('#search')
    const searchForm = document.querySelector('.header__search-form')
    const cross =document.querySelector("#cross")
    
    search.addEventListener('click',()=>{
        console.log("sadasda")
        searchForm.classList.add('active')
        search.classList.add('hide')
        cross.classList.add('active')
    })

    cross.addEventListener('click',()=>{
        searchForm.classList.remove('active')
        search.classList.remove('hide')
        cross.classList.remove('active')
    })


    window.addEventListener('scroll',()=>{
        const header = document.querySelector('.header__top-inner')
        header.classList.toggle("sticky",window.scrollY>0)
        if(searchForm.classList.contains('active'))
        searchForm.classList.remove('active')
        search.classList.remove('hide')
        cross.classList.remove('active')

    })
