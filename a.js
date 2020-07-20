document.querySelector('.on').addEventListener('click',start);
function start(){
    document.querySelector('.text').textContent="0";
    globalController.init();
}
// var databaseController= (function(){
// })();
// var displayController=(function(){
// })();
var globalController=(function(dbCtrl,dpCtrl){
    function setupEventListeners(){
        var a=document.querySelectorAll(".butt");
        var s1=0,s2=0,c,b;
        //.addEventListener('click',function(){
            //document.querySelector('.text').textContent="2";
            a.forEach(function(cur){
                cur.addEventListener('click',function(e){
                    b=(e.target.id);
                   if(b=='on'||b=='ce'){
                      start();
                      //document.querySelector('.text').textContent="0";
                      // s1=0,s2=0;
                   }
                   else{
                    b=parseInt(e.target.id);
                    console.log(b);
                    if(!isNaN(b))
                    {
                        if(b===0)
                        {
                            s1*=10;
                            document.querySelector('.text').textContent=s1;
                        }
                        else if(b===100)
                        {
                            s1*=100;
                            document.querySelector('.text').textContent=s1;
                        }
                        else
                        {
                            s1=s1*10+b;
                            console.log("h");
                            document.querySelector('.text').textContent=s1;
                        }
                    }
                    else
                    {
                        b=e.target.id;
                        
                        if(s2!==0)
                        {
                            console.log("i");
                            b=e.target.id;
                            if(c=='+')
                            {s2+=s1;}
                            else if(c=='*')
                            {s2*=s1;}
                            else if(c=='/')
                            {s2/=s1;}
                            else if(c=='-')
                            {s2-=s1;}
                            else if(c=='%')
                            {s2%=s1;}
                            // else if(b=='=')
                            // s2%=s1;
                            else{
                                console.log('x');
                            }
                            document.querySelector('.text').textContent=s2;
                            if(b=='=')
                            {
                                document.querySelector('.text').textContent='Ans='+s2;
                                console.log('y');
                                s2=0;
                                s1=0;
                                
                            }
                            else
                            {
                                c=(e.target.id);
                                console.log('z');
                                s1=0;
                            }    
                        }
                        else
                        {
                            console.log("j");
                        c=(e.target.id);
                        //document.querySelector('.text').textContent=".";
                        s2=s1;
                        s1=0;
                        }
                    } 
                   }       
                })     
            });
        //})
    }

    
    
    
    return{
        init: function(){
            setupEventListeners();    
        }
    }                
})();