let t1 = new TimelineMax({repeat: -1});
let t2 = new TimelineMax({repeat: -1});
let t3 = new TimelineMax({repeat: -1});
let t4 = new TimelineMax({repeat: -1});
let t5 = new TimelineMax({repeat: -1});
let t6 = new TimelineMax({repeat: -1});
let t7 = new TimelineMax({repeat: -1});
let t7a = new TimelineMax({repeat: -1});
let t8 = new TimelineMax({repeat: -1});
let t9 = new TimelineMax({repeat: -1});
let t10 = new TimelineMax({repeat: -1});
let t10a = new TimelineMax({repeat: -1});
let t11 = new TimelineMax({repeat: -1});
let t12 = new TimelineMax({repeat: -1});
let t13 = new TimelineMax({repeat: -1});
let t14 = new TimelineMax({repeat: -1});
let t15 = new TimelineMax({repeat: -1});
let t16 = new TimelineMax({repeat: -1});
let t17 = new TimelineMax({repeat: -1});
let t18 = new TimelineMax({repeat: -1});
let t19 = new TimelineMax({repeat: -1});
let t20 = new TimelineMax({repeat: -1});
let t21 = new TimelineMax({repeat: -1});
let t22 = new TimelineMax({repeat: -1});
let t23 = new TimelineMax({repeat: -1});
let t24 = new TimelineMax({repeat: -1});
let t25 = new TimelineMax({repeat: -1});
let t26 = new TimelineMax({repeat: -1});
let t27 = new TimelineMax({repeat: -1});
let t28 = new TimelineMax({repeat: -1});
let t29 = new TimelineMax({repeat: -1});
let t29a = new TimelineMax({repeat: -1});
let t30 = new TimelineMax({repeat: -1});
let t31 = new TimelineMax({repeat: -1});
let t32 = new TimelineMax({repeat: -1});
let t33 = new TimelineMax({repeat: -1});
let t33a = new TimelineMax({repeat: -1});
let t34 = new TimelineMax({repeat: -1});
let t34a = new TimelineMax({repeat: -1});
let t35 = new TimelineMax({repeat: -1});
let t36 = new TimelineMax({repeat: -1});
let t37 = new TimelineMax({repeat: -1});
let t38 = new TimelineMax({repeat: -1});
let t39 = new TimelineMax({repeat: -1});
let t40 = new TimelineMax({repeat: -1});
let t41 = new TimelineMax({repeat: -1});
let t42 = new TimelineMax({repeat: -1});
let t43 = new TimelineMax({repeat: -1});
let t44 = new TimelineMax({repeat: -1});
let t45 = new TimelineMax({repeat: -1});
let t46 = new TimelineMax({repeat: -1});
let t47 = new TimelineMax({repeat: -1});
let t48 = new TimelineMax({repeat: -1});
let t49 = new TimelineMax({repeat: -1});
let t50 = new TimelineMax({repeat: -1});

t1
    .fromTo($("#dot0"), 0.4, {y:90}, {y:140, ease:Power2.easeIn})
    .fromTo($("#dot0"), 0.4, {y:140},{y:90, ease:Power2.easeOut},);

t2  
    .fromTo($("#dot1"), 0.4, {y:90}, {y:140, ease:Power2.easeIn},0)
    .fromTo($("#dot1"), 0.4, {y:140},{y:90, ease:Power2.easeOut},0.4)
    .fromTo($("#dot2"), 0.4, {y:90}, {y:140, ease:Power2.easeIn},0.1) 
    .fromTo($("#dot2"), 0.4, {y:140},{y:90, ease:Power2.easeOut},0.5)
    .fromTo($("#dot3"), 0.4, {y:90}, {y:140, ease:Power2.easeIn},0.2)
    .fromTo($("#dot3"), 0.4, {y:140},{y:90, ease:Power2.easeOut},0.6); 
t3  
    .fromTo($("#dot4"), 1, {rotation:0, transformOrigin:"100% 300%"}, {rotation:360, ease:Power2.easeIn},0)
    .fromTo($("#dot5"), 1, {rotation:0, transformOrigin:"100% 300%"}, {rotation:360, ease:Power2.easeIn},0.2) 
    .fromTo($("#dot6"), 1, {rotation:0, transformOrigin:"100% 300%"}, {rotation:360, ease:Power2.easeIn},0.4);
t4
    .fromTo($("#dot7"), 0.4, {x:210},{x:10, ease:Power2.easeOut},0)
    .fromTo($("#dot7"), 0.6, {x:10}, {x:-10},0.4) 
    .fromTo($("#dot7"), 0.4, {x:-10},{x:-210, ease:Power2.easeIn},1) 
    .fromTo($("#dot8"), 0.4, {x:210},{x:10, ease:Power2.easeOut},0.5)
    .fromTo($("#dot8"), 0.6, {x:10}, {x:-10},0.9) 
    .fromTo($("#dot8"), 0.4, {x:-10},{x:-210, ease:Power2.easeIn},1.5) 
    .fromTo($("#dot9"), 0.4, {x:210},{x:10, ease:Power2.easeOut},1)
    .fromTo($("#dot9"), 0.6, {x:10}, {x:-10},1.4) 
    .fromTo($("#dot9"), 0.4, {x:-10},{x:-210, ease:Power2.easeIn},2);
t5  
    .fromTo($("#dot10"), 0.4, {autoAlpha:0},{autoAlpha:1},0)
    .fromTo($("#dot11"), 0.4, {autoAlpha:0},{autoAlpha:1},0.2)
    .fromTo($("#dot12"), 0.4, {autoAlpha:0},{autoAlpha:1},0.4)
    .to($("#dot10"), 0.4, {autoAlpha:0},0.4)
    .to($("#dot11"), 0.4, {autoAlpha:0},0.6)
    .to($("#dot12"), 0.4, {autoAlpha:0},0.8);
t6
    .fromTo($("#dot13"), 0.6, {x:60}, {x:140},0)
    .fromTo($("#dot13"), 0.6, {x:140},{x:60},0.6) 
    .fromTo($("#dot14"), 0.6, {x:60, autoAlpha:0.7}, {x:140},0.1)
    .fromTo($("#dot14"), 0.6, {x:140},{x:60},0.7) 
    .fromTo($("#dot15"), 0.6, {x:60, autoAlpha:0.5}, {x:140},0.2)
    .fromTo($("#dot15"), 0.6, {x:140},{x:60},0.8);
t7
    .fromTo($("#dot62"), 0.4, {y:20}, {y:90, ease:Power2.easeIn},0)
    .fromTo($("#dot62"), 0.4, {y:90},{y:20, ease:Power2.easeOut},)
t7a
    .fromTo($("#square78"), 0.8, {x:-40,y:-40,ease:Power0.easeNone}, {x:0,y:0,ease:Power0.easeNone},0)
    .fromTo($("#square79"), 0.8, {x:0,y:0,ease:Power0.easeNone}, {x:40,y:40,ease:Power0.easeNone},0)
    .fromTo($("#square80"), 0.8, {x:40,y:40,ease:Power0.easeNone}, {x:80,y:80,ease:Power0.easeNone},0)
    .fromTo($("#square81"), 0.8, {x:80,y:80,ease:Power0.easeNone}, {x:120,y:120,ease:Power0.easeNone},0)
    .fromTo($("#square82"), 0.8, {x:120,y:120,ease:Power0.easeNone}, {x:160,y:160,ease:Power0.easeNone},0)
    .fromTo($("#square83"), 0.8, {x:160,y:160,ease:Power0.easeNone}, {x:200,y:200,ease:Power0.easeNone},0)
t8
    .fromTo($("#dot19"), 0.5, {transformOrigin:"center", scaleX:1,scaleY:1}, {scaleX:1.5,scaleY:1.5},0)
    .fromTo($("#dot19"), 0.5, {scaleX:1.5,scaleY:1.5}, {scaleX:1,scaleY:1},0.5)
    .fromTo($("#dot20"), 0.5, {transformOrigin:"center", scaleX:1,scaleY:1}, {scaleX:1.5,scaleY:1.5},0.3) 
    .fromTo($("#dot20"), 0.5, {scaleX:1.5,scaleY:1.5}, {scaleX:1,scaleY:1},0.9)
    .fromTo($("#dot21"), 0.5, {transformOrigin:"center", scaleX:1,scaleY:1}, {scaleX:1.5,scaleY:1.5},0.6)
    .fromTo($("#dot21"), 0.5, {scaleX:1.5,scaleY:1.5}, {scaleX:1,scaleY:1},1.2);
t9  
    .fromTo($("#dot22"), 0.5, {rotation: 0 , transformOrigin:"100% -500%"}, {rotation: 40, ease:Power2.easeOut},0)
    .fromTo($("#dot22"), 0.5, {rotation: 40, transformOrigin:"100% -500%"}, {rotation: 0 , ease:Power2.easeIn},0.5)
    .fromTo($("#dot24"), 0.5, {rotation: 0 , transformOrigin:"100% -500%"}, {rotation:-40, ease:Power2.easeOut},1) 
    .fromTo($("#dot24"), 0.5, {rotation:-40, transformOrigin:"100% -500%"}, {rotation: 0 , ease:Power2.easeIn},1.5);
t10
   .fromTo($("#dot55"),1,{rotationY:0,ease:Power0.easeNone},{rotationY:360,ease:Power0.easeNone},0)
   .fromTo($("#dot56"),1,{rotationY:0,ease:Power0.easeNone},{rotationY:360,ease:Power0.easeNone},0)
   .fromTo($("#dot58"),1,{rotationY:0,ease:Power0.easeNone},{rotationY:360,ease:Power0.easeNone},0)
t10a
    .fromTo($("#dot57"), 0.4, {y:-120}, {y:-3, ease:Power2.easeIn},0)
    .fromTo($("#dot57"), 0.4, {y:-3},{y:-120, ease:Power2.easeOut});
t11
    .fromTo($("#dot59"), 1, {rotation:0, transformOrigin:"100% 300%"}, {rotation:360,ease:Power0.easeNone},0)
    .fromTo($("#dot60"), 1, {rotation:0, transformOrigin:"100% 300%"}, {rotation:360,ease:Power0.easeNone},0.2) 
    .fromTo($("#dot61"), 1, {rotation:0, transformOrigin:"100% 300%"}, {rotation:360,ease:Power0.easeNone},0.4);
t12  
    .fromTo($("#square50"), 1, {rotation:72,  transformOrigin:"100% 0%"}, {rotation:432,transformOrigin:"100% 300%"},0)
    .fromTo($("#square51"), 1, {rotation:144, transformOrigin:"100% 0%"}, {rotation:504,transformOrigin:"100% 300%"},0) 
    .fromTo($("#square52"), 1, {rotation:216, transformOrigin:"100% 0%"}, {rotation:576,transformOrigin:"100% 300%"},0)
    .fromTo($("#square53"), 1, {rotation:288, transformOrigin:"100% 0%"}, {rotation:648,transformOrigin:"100% 300%"},0) 
    .fromTo($("#square54"), 1, {rotation:360, transformOrigin:"100% 0%"}, {rotation:720,transformOrigin:"100% 300%"},0);

t13
    .fromTo($("#square6"), 2, {x:-170, ease: SteppedEase.config(12) }, {x:100, ease: SteppedEase.config(12)},0)
    .fromTo($("#square7"), 2, {x:-170, ease: SteppedEase.config(12) }, {x:100, ease: SteppedEase.config(12)},0)
    .fromTo($("#square8"), 2, {x:-170, ease: SteppedEase.config(12) }, {x:100, ease: SteppedEase.config(12)},0);
t14  
    .fromTo($("#square9"), 0.6, {rotationY:0,  transformOrigin:"right"},    {rotationY:180,transformOrigin:"right", })
    .fromTo($("#square9"), 0.6, {rotationX:0,  transformOrigin:"100% 100%"},{rotationX:180,transformOrigin:"100% 100%"})
    .fromTo($("#square9"), 0.6, {rotationY:180,transformOrigin:"100% 100%"},{rotationY:0,  transformOrigin:"100% 100%",})
    .fromTo($("#square9"), 0.6, {rotationX:180,transformOrigin:"50% 100%"}, {rotationX:0,  transformOrigin:"50% 100%",});
t15  
    .fromTo($("#square10"), 0.6, {y:40,rotationX:40,  transformOrigin:"right"},    {y:0,},0)
    .fromTo($("#square11"), 0.6, {y:40,rotationX:40,  transformOrigin:"right"},    {y:0,},0)
    .fromTo($("#square12"), 0.6, {y:40,rotationX:40,  transformOrigin:"right"},    {y:0,},0)

     .fromTo($("#square12"),0.2, {y:0,rotationX:40,  transformOrigin:"right"},     {y:40,},0.6)
    .fromTo($("#square11"), 0.25, {y:0,rotationX:40,  transformOrigin:"right"},    {y:40,},0.65)
    .fromTo($("#square10"), 0.3, {y:0,rotationX:40,  transformOrigin:"right"},     {y:40,},0.7);
t16  
    .fromTo($("#dot27"), 2, {rotation:0, transformOrigin:"center", ease:Power0.easeNone}, {rotation:360,ease:Power0.easeNone},0)
    .fromTo($("#dot28"), 2, {rotation:360, transformOrigin:"center", ease:Power0.easeNone}, {rotation:0,ease:Power0.easeNone},0)
    .fromTo($("#dot29"), 2, {rotation:0, transformOrigin:"center", ease:Power0.easeNone}, {rotation:360,ease:Power0.easeNone},0);
t17  
    .fromTo($("#dot26"), 2, {rotation:0, transformOrigin:"center", ease:Power0.easeNone}, {rotation:360,ease:Power0.easeNone});

t18  
    .fromTo($("#square24"), 10, {scaleX:1},{scaleX:10});
t19  
    .fromTo($("#square25"), 2, {x:-100,ease:Power0.easeNone},{x:200,ease:Power0.easeNone});
t20
    .fromTo($("#square26"), 0.5, {scaleY:-1,ease:Power0.easeNone},{scaleY:-5,ease:Power0.easeNone},0)
    .fromTo($("#square27"), 0.5, {scaleY:-1,ease:Power0.easeNone},{scaleY:-5,ease:Power0.easeNone},0.2)
    .fromTo($("#square28"), 0.5, {scaleY:-1,ease:Power0.easeNone},{scaleY:-5,ease:Power0.easeNone},0.4)
    .fromTo($("#square29"), 0.5, {scaleY:-1,ease:Power0.easeNone},{scaleY:-5,ease:Power0.easeNone},0.6)
    .fromTo($("#square30"), 0.5, {scaleY:-1,ease:Power0.easeNone},{scaleY:-5,ease:Power0.easeNone},0.8)
    .fromTo($("#square26"), 0.5, {scaleY:-5,ease:Power0.easeNone},{scaleY:-1,ease:Power0.easeNone},0.5)
    .fromTo($("#square27"), 0.5, {scaleY:-5,ease:Power0.easeNone},{scaleY:-1,ease:Power0.easeNone},0.7)
    .fromTo($("#square28"), 0.5, {scaleY:-5,ease:Power0.easeNone},{scaleY:-1,ease:Power0.easeNone},0.9)
    .fromTo($("#square29"), 0.5, {scaleY:-5,ease:Power0.easeNone},{scaleY:-1,ease:Power0.easeNone},1.1)
    .fromTo($("#square30"), 0.5, {scaleY:-5,ease:Power0.easeNone},{scaleY:-1,ease:Power0.easeNone},1.3);
t21
    .fromTo($("#square31"), 2, {rotationY:0, transformOrigin:"200% 100%"}, {rotationY:360},0)
    .fromTo($("#square32"), 2, {rotationY:0, transformOrigin:"200% 100%"}, {rotationY:360},0.2)
    .fromTo($("#square33"), 2, {rotationY:0, transformOrigin:"200% 100%"}, {rotationY:360},0.4); 
t22
    .fromTo($("#square22"), 0.4, {x:40,ease:Power2.easeIn}, {x:80,ease:Power2.In},0)
    .fromTo($("#square23"), 0.4, {x:120}, {x:80},0)
    .fromTo($("#square23"), 0.4, {scaleX:1,scaleY:1,transformOrigin:"center",}, {scaleX:2,scaleY:2},0.2)
    .fromTo($("#square23"), 0.4, {scaleX:2,scaleY:2}, {scaleX:1,scaleY:1},)
    .fromTo($("#square22"), 0.4, {scaleX:1,scaleY:1,transformOrigin:"center",}, {scaleX:2,scaleY:2},0.2)
    .fromTo($("#square22"), 0.4, {scaleX:2,scaleY:2}, {scaleX:1,scaleY:1},)
    .fromTo($("#square22"), 0.4, {x:80}, {x:40},1.2)
    .fromTo($("#square23"), 0.4, {x:80}, {x:120},1.2);
t23  
    .fromTo($("#dot30"), 1, {rotation:72,  transformOrigin:"100% 50%"}, {rotation:432,transformOrigin:"100% 150%"},0)
    .fromTo($("#dot31"), 1, {rotation:144, transformOrigin:"100% 50%"}, {rotation:504,transformOrigin:"100% 150%"},0) 
    .fromTo($("#dot32"), 1, {rotation:216, transformOrigin:"100% 50%"}, {rotation:576,transformOrigin:"100% 150%"},0)
    .fromTo($("#dot33"), 1, {rotation:288, transformOrigin:"100% 50%"}, {rotation:648,transformOrigin:"100% 150%"},0) 
    .fromTo($("#dot34"), 1, {rotation:360, transformOrigin:"100% 50%"}, {rotation:720,transformOrigin:"100% 150%"},0);
t24 
    .fromTo($("#dot35"), 0.4, {rotation:72, autoAlpha:0.3, transformOrigin:"100% 200%"}, {rotation:72,   autoAlpha:1},0)
    .fromTo($("#dot35"), 0.4, {rotation:72, autoAlpha:1, transformOrigin:"100% 200%"}, {rotation:72,   autoAlpha:0.3},0.4)
    .fromTo($("#dot36"), 0.4, {rotation:144,autoAlpha:0.3, transformOrigin:"100% 200%"}, {rotation:144,  autoAlpha:1},0.2) 
    .fromTo($("#dot36"), 0.4, {rotation:144,autoAlpha:1, transformOrigin:"100% 200%"}, {rotation:144,  autoAlpha:0.3},0.6)
    .fromTo($("#dot37"), 0.4, {rotation:216,autoAlpha:0.3, transformOrigin:"100% 200%"}, {rotation:216,  autoAlpha:1},0.4)
    .fromTo($("#dot37"), 0.4, {rotation:216,autoAlpha:1, transformOrigin:"100% 200%"}, {rotation:216,  autoAlpha:0.3},0.8)
    .fromTo($("#dot38"), 0.4, {rotation:288,autoAlpha:0.3, transformOrigin:"100% 200%"}, {rotation:288,  autoAlpha:1},0.6) 
    .fromTo($("#dot38"), 0.4, {rotation:288,autoAlpha:1, transformOrigin:"100% 200%"}, {rotation:288,  autoAlpha:0.3},1)
    .fromTo($("#dot39"), 0.4, {rotation:360,autoAlpha:0.3, transformOrigin:"100% 200%"}, {rotation:360,  autoAlpha:1},0.8)
    .fromTo($("#dot39"), 0.4, {rotation:360,autoAlpha:1, transformOrigin:"100% 200%"}, {rotation:360,  autoAlpha:0.3},1.2);
t25 
    .fromTo($("#square13"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.2)
            .fromTo($("#square13"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.6)        
    .fromTo($("#square14"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.3)
            .fromTo($("#square14"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.7)
    .fromTo($("#square15"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.4)        
            .fromTo($("#square15"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.8)
    .fromTo($("#square16"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.1)
            .fromTo($("#square16"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.5)
    .fromTo($("#square17"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.2) 
            .fromTo($("#square17"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.6)
    .fromTo($("#square18"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.3)   
            .fromTo($("#square18"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.7)
    .fromTo($("#square19"), 0.4, {autoAlpha:0}, {autoAlpha:1},0)
            .fromTo($("#square19"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.4)
    .fromTo($("#square20"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.1) 
            .fromTo($("#square20"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.5)
    .fromTo($("#square21"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.2)
            .fromTo($("#square21"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.6);
t26 
    .fromTo($("#dot40"), 0.3, {y:50}, {y:70,ease:Power1.easeIn},0)
    .fromTo($("#dot40"), 0.3, {y:70}, {y:60,ease:Power1.easeIn},0.3)
        .fromTo($("#square34"), 0.3, {rotation:0,   transformOrigin:"center"}, {rotation:90},0)
    .fromTo($("#dot40"), 0.3, {y:60}, {y:80, ease:Power1.easeOut},0.6)
    .fromTo($("#dot40"), 0.3, {y:80}, {y:50, ease:Power1.easeOut},0.9)
        .fromTo($("#square34"), 0.3, {rotation:90,  transformOrigin:"center"}, {rotation:180},0.6)
    .fromTo($("#dot40"), 0.3, {y:50}, {y:70,ease:Power1.easeIn},1.2)
    .fromTo($("#dot40"), 0.3, {y:70}, {y:60,ease:Power1.easeIn},1.5)
        .fromTo($("#square34"), 0.3, {rotation:180, transformOrigin:"center"}, {rotation:270},1.2)
    .fromTo($("#dot40"), 0.3, {y:60}, {y:80, ease:Power1.easeOut},1.8)
    .fromTo($("#dot40"), 0.3, {y:80}, {y:50, ease:Power1.easeOut},2.1)
        .fromTo($("#square34"), 0.3, {rotation:270, transformOrigin:"center"}, {rotation:360},1.8);
t27
    .fromTo($("#square35"), 10, {rotation:0,   transformOrigin:"0% 0%"}, {rotation:360})
    .fromTo($("#square35"), 10, {rotation:0,   transformOrigin:"0% 0%"}, {rotation:360})
    .fromTo($("#square35"), 10, {rotation:0,   transformOrigin:"0% 0%"}, {rotation:360});
t28 
    .fromTo($("#square36"), 0.4, {autoAlpha:0}, {autoAlpha:1},0)
            .fromTo($("#square36"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.4)        
    .fromTo($("#square37"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.1)
            .fromTo($("#square37"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.5)
    .fromTo($("#square38"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.2)        
            .fromTo($("#square38"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.6)
    .fromTo($("#square39"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.3)
            .fromTo($("#square39"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.7)        
    .fromTo($("#square40"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.4)
            .fromTo($("#square40"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.8)
    .fromTo($("#square41"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.5)        
            .fromTo($("#square41"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.9); 
t29 
        .fromTo($("#dot42"), 1, {y:70, x:60}, {y:70,x:130,ease:Power4.easeIn},0)
        .fromTo($("#dot42"), 1, {y:70, x:130}, {y:70,x:60,ease:Power4.easeIn},);
t29a
        .fromTo($("#box4"), 1, {rotation:-30, transformOrigin:"center"}, {rotation:30},0)
        .fromTo($("#box4"), 1, {rotation:30, transformOrigin:"center"}, {rotation:-30},)
t30
    .fromTo($("#dot43"), 0.7, {rotation:-60, transformOrigin:"100% 300%",ease:Power0.easeNone}, {rotation:90,ease:Power0.easeNone},)
    .fromTo($("#dot43"), 0.7, {rotation:90, transformOrigin:"100% 300%",ease:Power0.easeNone}, {rotation:-60,ease:Power0.easeNone},);
t31
    .fromTo($("#dot44"), 2, {transformOrigin:"center",autoAlpha:1,scalX:1,scalY:1}, {autoAlpha:0,scaleX:5,scaleY:5},)
t32
    .fromTo($("#dot45"), 4, {ease:Power0.easeNone,transformOrigin:"center",rotation:0}, {ease:Power0.easeNone,rotation:360},)
t33
    .fromTo($("#dot46"), 0.3, {x:-70,y:35}, {x:-5,y:70, ease:Power0.easeNone},)
    .fromTo($("#dot46"), 0.3, {x:-5,y:70}, {x:60,y:35, ease:Power0.easeNone},)
    .fromTo($("#dot46"), 0.3, {x:60,y:35}, {x:-5,y:0, ease:Power0.easeNone},)
    .fromTo($("#dot46"), 0.3, {x:-5,y:0}, {x:-70,y:35, ease:Power0.easeNone},)
t33a
    .fromTo($("#square45"), 0.3, {y:70}, {y:10},0)
    .fromTo($("#square45"), 0.3, {y:10}, {y:70})
    .fromTo($("#square46"), 0.3, {y:10}, {y:70},)
    .fromTo($("#square46"), 0.3, {y:70}, {y:10});
t34
    .fromTo($("#dot47"), 0.3, {transformOrigin:"center",rotation:180,ease:Power0.easeNone}, {rotation:135, ease:Power0.easeNone},0)
    .fromTo($("#dot47"), 0.3, {transformOrigin:"center",rotation:135,ease:Power0.easeNone}, {rotation:180, ease:Power0.easeNone},0.3)
    .fromTo($("#dot48"), 0.3, {transformOrigin:"center",rotation:0,ease:Power0.easeNone}, {rotation:45, ease:Power0.easeNone},0)
    .fromTo($("#dot48"), 0.3, {transformOrigin:"center",rotation:45,ease:Power0.easeNone}, {rotation:0, ease:Power0.easeNone},0.3);
t34a
    .fromTo($("#dot49"), 0.6, {x:210}, {x:70});
t35
    .fromTo($("#square48"), 0.5, {y:-90,ease:Power0.easeNone}, {y:110,ease:Power0.easeNone});
t36  
    .fromTo($("#dot50"), 4, {rotation:0, transformOrigin:"center",strokeDashoffset:"400",strokDasharray:"200"}, {rotation:360,strokeDashoffset:"0",strokeDasharray:"200"});
t37 
    .fromTo($("#dot51"), 4, {strokeDashoffset:"200", ease:Power0.easeNone,strokDasharray:"100"},{ease:Power0.easeNone,strokeDashoffset:"0",strokeDasharray:"100"});
t38    
    .fromTo($("#dot54"), 10, {strokeDashoffset:"300", ease:Power0.easeNone,strokDasharray:"150"},{ease:Power0.easeNone,strokeDashoffset:"0",strokeDasharray:"150"});
t39
    .fromTo($("#dot25"), 1, {scaleX:1,scaleY:1, transformOrigin:"center"}, {scaleX:2,scaleY:2},0)
    .fromTo($("#dot25"), 1, {scaleX:2,scaleY:2}, {scaleX:1,scaleY:1},1);

t40
    .fromTo($("#square1"), 0.4, {autoAlpha:0}, {autoAlpha:1},1)
    .fromTo($("#square1"), 0.4, {autoAlpha:1}, {autoAlpha:0},0.8)
    .fromTo($("#square2"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.4)
    .fromTo($("#square2"), 0.4, {autoAlpha:1}, {autoAlpha:0},1.2)
    .fromTo($("#square4"), 0.4, {autoAlpha:0}, {autoAlpha:1},0.8)
    .fromTo($("#square4"), 0.4, {autoAlpha:1}, {autoAlpha:0},1.6)
    .fromTo($("#square3"), 0.4, {autoAlpha:0}, {autoAlpha:1},1.2)
    .fromTo($("#square3"), 0.4, {autoAlpha:1}, {autoAlpha:0},2);
t41  
    .fromTo($("#square5"), 0.4, {y:90, transformOrigin:"center"}, {rotation:270,y:140, ease:Power2.easeIn},0)
    .fromTo($("#square5"), 0.4, {y:140,}, {y:90, ease:Power2.easeOut});

t42  
    .fromTo($("#square55"), 0.6, {autoAlpha:1,y:40,rotationX:40,  transformOrigin:"right"},    {y:40,autoAlpha:1},0)
    .fromTo($("#square66"), 0.6, {autoAlpha:0,y:0,rotationX:40,  transformOrigin:"right"},    {y:40,autoAlpha:1},0.1)
    .fromTo($("#square77"), 0.6, {autoAlpha:0,y:0,rotationX:40,  transformOrigin:"right"},    {y:40,autoAlpha:1},0.2)
    .fromTo($("#square55"), 0.6, {autoAlpha:1,y:40,rotationX:40,  transformOrigin:"right"},    {y:80,autoAlpha:0},1)
    .fromTo($("#square66"), 0.6, {autoAlpha:1,y:40,rotationX:40,  transformOrigin:"right"},    {y:80,autoAlpha:0},1.1)
    .fromTo($("#square77"), 0.6, {autoAlpha:1,y:40,rotationX:40,  transformOrigin:"right"},    {y:80,autoAlpha:0},1.2);
t43  
    .fromTo($("#dot16"), 0.4, {autoAlpha:0}, {autoAlpha:1},'+=0.5')
    .fromTo($("#dot17"), 0.4, {autoAlpha:0}, {autoAlpha:1}) 
    .fromTo($("#dot18"), 0.4, {autoAlpha:0}, {autoAlpha:1});