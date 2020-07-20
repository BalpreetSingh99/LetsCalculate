var a=document.querySelectorAll('button');
document.querySelector('.on').addEventListener('click',start);
function start()
{
    document.querySelector('.text').textContent="0";
    var s1=0,s2=0,b,c,s3,s4,f=0,g=0;
    a.forEach(function(cur)
    {
        cur.addEventListener('click',function(e)
        {
            b=e.target.id;
            if(b=='on'||b=='ce')
            {
                start();
            }
            else
            {
                b=parseInt(e.target.id);
                if(!isNaN(b))
                {
                    if(b===0 && f!==1)
                    {
                        s1*=10;
                        document.querySelector('.text').textContent=s1;
                    }
                    else if(b===100 && f!==1)
                    {
                        s1*=100;
                        document.querySelector('.text').textContent=s1;
                    }
                    else if(b===1000 || f===1)
                    {
                        if(f===0)
                        {
                            f=1;
                            s1=s1+'.'
                            document.querySelector('.text').textContent=s1;
                        }
                        else
                        {
                            b=e.target.id;
                            s1=s1+b;
                            document.querySelector('.text').textContent=s1;
                            
                        }    
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
                    s1=parseFloat(s1);
                    f=0;
                    b=e.target.id;
                    if(s2!==0 || g===1)
                    {
                        if(g===1)
                        {
                            g=0;
                            s2=s3;
                            c=e.target.id;
                            if(b=='?')
                            {
                                s2=Math.sqrt(s2);
                                s2=round(s2);
                                document.querySelector('.text').textContent=s2;
                            }
                        }
                        else{
                        console.log("i");
                        b=e.target.id;
                        if(c=='+')
                        {
                            s2+=s1;
                        }
                        else if(c=='*')
                        {
                            s2*=s1;
                        }
                        else if(c=='/')
                        {
                            s2/=s1;
                        }
                        else if(c=='-')
                        {
                            s2-=s1;
                        }
                        else if(c=='%')
                        {
                            s2%=s1;
                        }
                        else
                        {
                           console.log('x');
                        }
                        s2=round(s2);
                        if(b=='=')
                        {
                            g=1;
                            document.querySelector('.text').textContent='Ans='+s2;
                            console.log('y');
                            s3=s2;
                            s2=0;
                            s1=0;
                        }
                        else
                        {
                            document.querySelector('.text').textContent=s2;
                            c=(e.target.id);
                            console.log('z');
                            s1=0;
                        }
                    }
                    }
                    else
                    {
                        if(b=='?')
                        {
                            s1=Math.sqrt(s1);
                            s1=round(s1);
                            document.querySelector('.text').textContent=s1;
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
            }
        })
    });
} 
function round(x)
{
    x=Math.round(x*1000000000)/1000000000;
    return x;
}