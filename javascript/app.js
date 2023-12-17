    const search=document.querySelector('#search')
    const searchForm = document.querySelector('.header__search-form')
    const cross =document.querySelector("#cross")
    const hamburger = document.querySelector('.hamburger')
    const hamburgerList = document.querySelectorAll('.hamburger__span')
    const nav = document.querySelector('.nav')
    const mainMenu = document.querySelectorAll('.main-menu-item')
    const sidebarMenu = document.querySelectorAll('.sidebar__submenu')
    const categories = document.querySelector('.categories')
    const slideinner = document.querySelector('.info-slider__inner')
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
       sidebarMenu.forEach((item,i)=>{
        sidebarMenu[i].classList.remove('opened')
       })
       categories.classList.toggle('off') 
        slideinner.classList.toggle('off')
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

        $(".info-slider__inner").slick({
            slidesToShow:1,
            autoplay:true,
            slidesToScroll:1,
            arrows:true,
            // nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>',
            // prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>',
          
          
           
            
           
        })
        // $(document).ready(function(){
        //     $('.info-slider__inner').slick({
        //       setting-name: setting-value
        //     });
        //   });
        
        // $(document).ready(function(){
        //     alert(jQuery.fn.jquery);
        //     });


  
  
    

    
 

     


    

    

    




