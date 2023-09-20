
let work = document.getElementById("work") ;
let Graduation = document.getElementById("Graduation") ;
let hsc = document.getElementById("hsc") ;
let ssc = document.getElementById("ssc") ;


let a = document.getElementById("a") ;
let b = document.getElementById("b") ;
let c = document.getElementById("c") ;
let d = document.getElementById("d") ;


Graduation.addEventListener('click',()=>{
   a.style.display="none"
   c.style.display="none"
   d.style.display="none"

   b.style.display="block"   
   Graduation.style="border-left: 4px solid #48B9A5" 

   hsc.style="border-left: 4px solid #233554" 
   ssc.style="border-left: 4px solid #233554" 
   work.style="border-left: 4px solid #233554" 
});

hsc.addEventListener('click',()=>{
    a.style.display="none"
    b.style.display="none"
    d.style.display="none"
 
    c.style.display="block" 
    hsc.style="border-left: 4px solid #48B9A5" 
    
    Graduation.style="border-left: 4px solid #233554" 
    ssc.style="border-left: 4px solid #233554" 
    work.style="border-left: 4px solid #233554" 
 });

 ssc.addEventListener('click',()=>{
    a.style.display="none"
    b.style.display="none"
    c.style.display="none"
 
    d.style="display:block ; "    
    ssc.style="border-left: 4px solid #48B9A5"

    hsc.style="border-left: 4px solid #233554" 
    Graduation.style="border-left: 4px solid #233554" 
    work.style="border-left: 4px solid #233554" 
 })

 work.addEventListener('click',()=>{
    d.style.display="none"
    b.style.display="none"
    c.style.display="none"
 
    a.style.display="block"  
    work.style="border-left: 4px solid #48B9A5"  

    hsc.style="border-left: 4px solid #233554" 
    ssc.style="border-left: 4px solid #233554" 
    Graduation.style="border-left: 4px solid #233554" 
 })



//  --------------hide more---------------

let show_less_one = document.getElementById("show_less_1") ;
let show_less_two = document.getElementById("show_less_2") ;
let show_less_three = document.getElementById("show_less_3") ;
let show_less_four = document.getElementById("show_less_4") ;




let  data_one = document.getElementById("data_less_1") ;
let  data_two = document.getElementById("data_less_2") ;
let  data_three = document.getElementById("data_less_3") ;

show_less_one.addEventListener('click',()=>{
    data_one.style.display="none" ;
})

show_less_two.addEventListener('click',()=>{
   data_two.style.display="none" ;
})

show_less_three.addEventListener('click',()=>{
   data_three.style.display="none" ;
})

show_less_four.addEventListener('click',()=>{
   data_four.style.display="none" ;
})

// ---------------show more-------------

let show_more_one = document.getElementById("more_one") ;
let show_more_two = document.getElementById("more_two") ;
let show_more_three = document.getElementById("more_three") ;
let show_more_four = document.getElementById("more_four") ;


show_more_one.addEventListener('click',()=>{
    data_one.style.display="block" ;
   })

   show_more_two.addEventListener('click',()=>{
      data_two.style.display="block" ;
 })

 show_more_three.addEventListener('click',()=>{
      data_three.style.display="block" ;
 });

 show_more_four.addEventListener('click',()=>{
   data_four.style.display="block" ;
});

//  --------------animation add-----------------------

let animation_about = document.getElementById("about_a") ;
let animation_work = document.getElementById("work_a") ;
let animation_project = document.getElementById("project_a") ;
let animation_contact = document.getElementById("contact_a") ;

let content_about = document.getElementById("about-nav") ;
let content_work = document.getElementById("work-nav") ;
let content_project = document.getElementById("project-nav") ;
let content_contact = document.getElementById("contact-nav") ;

animation_about.addEventListener('click',()=>{

   content_about.classList.add("animate__fadeIn")
})

animation_work.addEventListener('click',()=>{

   content_work.classList.add("animate__fadeIn")
})

animation_project.addEventListener('click',()=>{

   content_project.classList.add("animate__fadeIn")
})

animation_contact.addEventListener('click',()=>{

   content_contact.classList.add("animate__fadeIn")
})



