    const search=document.querySelector('#search')
    const searchForm = document.querySelector('.header__search-form')
    const cross =document.querySelector("#cross")
    const hamburger = document.querySelector('.hamburger')
    const hamburgerList = document.querySelectorAll('.hamburger__span')
    const nav = document.querySelector('.nav')
    const mainMenu = document.querySelectorAll('.main-menu-item')
    const sidebarMenu = document.querySelectorAll('.sidebar__submenu')

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
    
    hamburger.addEventListener('click',()=>{
       hamburgerList.forEach((item,index) =>{
        item.classList.toggle("on")
        nav.classList.toggle("visible")
        
       })
    })

         mainMenu.forEach((item,i)=>{
            mainMenu[i].addEventListener('click',function(event){
                 event.stopPropagation()
                 console.log(i)
                let elem = event.target
                if(sidebarMenu[i].classList.contains('opened'))
                    {sidebarMenu[i].classList.remove('opened')}
                    else{
                    for(var x = 0; x < sidebarMenu.length; x++){
                        if(sidebarMenu[x].classList.contains('opened') ){
                            sidebarMenu[x].classList.remove('opened')
                          
                            
                        }
                    }
                    sidebarMenu[i].classList.add('opened')
                }
                    
               
            })
         })
        
    


  
  
    

    
 

     


    

    

    




