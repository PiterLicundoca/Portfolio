window.mostrar = ScrollReveal({reset:true})

/* function header(){
    let header=document.getElementById('header')
    if (header.style.top="0") {
        header.style.backgroundColor="white"
    }
} */


/*  EVENTO DO SCROL QUANDO O HEADER CHEGA ATÉ AO TOPO*/
  window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 0) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    }); 

  /*    let sobr = document.getElementById('sobr').onclick= function () {
         sob=document.getElementById('sobre');
        sob.classList.add('transicao'); 
        
    }  */
   
    

mostrar.reveal( '.cir',{
 duration:2000,
 distance:'8rem',
 delay: 100,
 origin:'left'

})

mostrar.reveal( '.h1',{
    duration:1500,
    distance:'5rem',
    delay: 100
   })


   mostrar.reveal('#sugestao',{
   duration:2000,
   distance:'3rem',
   delay:50,
   origin:'right'

   })

   mostrar.reveal('#rodape',{
    duration:2000,
    distance:'3rem',
    delay:90,
    origin:'left'
 
    })


    mostrar.reveal('.phero1',{
        duration:3000,
        distance:'10rem',
        origin:'bottom',
        delay:200
    })

    mostrar.reveal('.phero2',{
        duration:4000,
        distance:'10rem',
        origin:'bottom',
        delay:300
    })

    mostrar.reveal('.phero3',{
        duration:5000,
        distance:'10rem',
        origin:'bottom',
        delay:400
    })

    /* SLAIDE */

    mostrar.reveal('.servicos',{
       duration:1300,
       distance:'50rem',
       origin:'left',
       delay:200
    })/* FIM SLAIDE */


    /* CARDS */
    mostrar.reveal('.card1',{
        duration:1300,
        distance:'30rem',
        origin:'bottom',
        delay:50
     })

     mostrar.reveal('.card2',{
        duration:1300,
        distance:'30rem',
        origin:'left',
        delay:350
     })
     mostrar.reveal('.card3',{
        duration:1300,
        distance:'30rem',
        origin:'bottom',
        delay:700
     })
     mostrar.reveal('.card4',{
        duration:1300,
        distance:'30rem',
        origin:'bottom',
        delay:1000
     })
     mostrar.reveal('.card5',{
        duration:1300,
        distance:'30rem',
        origin:'left',
        delay:50
     })
     mostrar.reveal('.card6',{
        duration:1300,
        distance:'30rem',
        origin:'left',
        delay:200
     })
     mostrar.reveal('.card7',{
        duration:1300,
        distance:'30rem',
        origin:'left',
        delay:350
     })
     mostrar.reveal('.card8',{
        duration:1300,
        distance:'30rem',
        origin:'left',
        delay:500
     })
     mostrar.reveal('.card9',{
        duration:1300,
        distance:'10rem',
        origin:'left',
        delay:50
     })


     /* LOCALIZAÇÃO */
     mostrar.reveal('.angola',{
        duration:1000,
        distance:'10rem',
        origin:'bottom',
        delay: 50
        })
     mostrar.reveal('.samba',{
        duration:2000,
        distance:'10rem',
        origin:'bottom',
        delay: 150
        })
     mostrar.reveal('.cv',{
        duration:3000,
        distance:'10rem',
        origin:'left',
        delay: 300
        })/* FIM LOCALIZACAO */


     /* CONTACTO */

     mostrar.reveal('.nome1',{
     duration:1000,
     distance:'10rem',
     origin:'bottom',
     delay: 50
     })
     mostrar.reveal('.email',{
     duration:2000,
     distance:'10rem',
     origin:'bottom',
     delay: 150
     })
     mostrar.reveal('.tel',{
     duration:3000,
     distance:'8rem',
     origin:'bottom',
     delay: 350
     })
     mostrar.reveal('.area',{
     duration:3000,
     distance:'8rem',
     origin:'left',
     delay: 150
     })
     mostrar.reveal('.enviar',{
     duration:2000,
     distance:'3rem',
     origin:'right',
     delay: 50
     })

     /* RODAPÉ */

     mostrar.reveal('.rua',{
        duration:1000,
        distance:'12rem',
        origin:'left',
        delay: 50
        })
     mostrar.reveal('.rua1',{
        duration:2000,
        distance:'12rem',
        origin:'left',
        delay: 100
        })
     mostrar.reveal('.rua2',{
        duration:3000,
        distance:'12rem',
        origin:'top',
        delay: 150
        })

        /* REDES SOCIAIS */
     mostrar.reveal('.red1',{
        duration:2000,
        distance:'12rem',
        origin:'bottom',
        delay: 150
        })
     mostrar.reveal('.red2',{
        duration:3000,
        distance:'12rem',
        origin:'bottom',
        delay: 100
        })
     mostrar.reveal('.red3',{
        duration:4000,
        distance:'12rem',
        origin:'bottom',
        delay: 100
        })
     mostrar.reveal('.red4',{
        duration:5000,
        distance:'12rem',
        origin:'bottom',
        delay: 100
        })
/* MENU DO RODAPÉ */
        

        mostrar.reveal('.linfoot1',{
            duration:1000,
            distance:'12rem',
            origin:'top',
            delay: 100
            })
        mostrar.reveal('.linfoot2',{
            duration:2000,
            distance:'12rem',
            origin:'left',
            delay: 100
            })
        mostrar.reveal('.linfoot3',{
            duration:2000,
            distance:'12rem',
            origin:'top',
            delay: 100
            })
        mostrar.reveal('.linfoot4',{
            duration:3000,
            distance:'12rem',
            origin:'left',
            delay: 100
            })
        mostrar.reveal('.linfoot5',{
            duration:4000,
            distance:'12rem',
            origin:'bottom',
            delay: 100
            })

           

            mostrar.reveal('.inputfooter',{
                duration:3000,
                distance:'12rem',
                origin:'left',
                delay: 100
                })
            mostrar.reveal('.enviarfooter',{
                duration:3000,
                distance:'1rem',
                origin:'right',
                delay: 100
                })

                /* SOBRE MIM */

                mostrar.reveal('.p1',{
                    duration:3000,
                    distance:'10rem',
                    origin:'bottom',
                    delay: 100
                    })

                    mostrar.reveal('.p2',{
                        duration:4000,
                        distance:'1orem',
                        origin:'bottom',
                        delay: 100
                        })

                        mostrar.reveal('.p3',{
                            duration:5000,
                            distance:'1rem',
                            origin:'right',
                            delay: 100
                            })

                            mostrar.reveal('.p4',{
                                duration:7000,
                                distance:'10rem',
                                origin:'bottom',
                                delay: 100
                                })

                                mostrar.reveal('.p5',{
                                    duration:8000,
                                    distance:'7rem',
                                    origin:'left',
                                    delay: 100
                                    })




 
        /* CARROSSEL */

           let slaideIndex=0
          carousel()

          function carousel() {

            let i;
            let x = document.getElementsByClassName("slid-servicos")
            for ( i = 0 ; i < x.length; i++){
                x[i].style.display = "none"
            }

            slaideIndex++; 

            if (slaideIndex > x.length) {slaideIndex = 1}

                x[slaideIndex-1].style.display = "block"
                setTimeout(carousel,4000)
          }

         function mobil() {
             let nave=document.getElementById('menu-mobile0')
             let over=document.getElementById('overlay-menu') 
             nave.classList.add('abrir-menu')
             over.style.display="block"
           
         }

         function fechar2(){
             let nave=document.getElementById('menu-mobile0')
             nave.classList.remove('abrir-menu')
             let over=document.getElementById('overlay-menu')
             over.style.display='none'
         }

         
         
         function fechar3(){
             let nave=document.getElementById('menu-mobile0')
             nave.classList.remove('abrir-menu')
             let over=document.getElementById('overlay-menu')
             over.style.display='none'
         }
                   
              
             
          

             /*  lista.style.display="block" */
             /*  nave.style.display='flex' */
             
             
             /*  let x1=document.getElementById('x')
             x1.style.display='block' */
        
      /*   function x(){
            let nave=document.getElementById('nav')
            nave.style.display='none'
             let mob=document.getElementById("menum") 
             mob.style.display='block'
        }
     */


        function fechar(){
            let nave=document.getElementById('menu-mobile0')
            let over=document.getElementById('overlay-menu')
            let mob=document.getElementById("menum") 
           nave.classList.remove('abrir-menu') 
            over.style.display='none'
        }

      
        function desabilitar() {
            
            let ver=document.getElementById("versite")
                ver.classList.add('desabi')
        }
      
    
