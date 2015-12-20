window.onload = function(){
    var img = document.getElementsByClassName('img'),
        btn = document.getElementsByClassName('btn'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        homeSlider = document.getElementById('nv');
    var currentimg = img[0],
        currentbtn  = btn[0],
        kaiguan = true,
        timerId;

    var fn = (function(){
        var i = 1;
        var Limit = img.length;
        return function(){
            currentimg.setAttribute('class','img');
            img[i].setAttribute('class','img show');
            currentimg = img[i];
            currentbtn.setAttribute('class','btn');
            btn[i].setAttribute('class','btn active');
            currentbtn = btn[i];
            i += 1; if( i == Limit){ i = 0; }
        };
    })();
    timerId = setInterval(fn,2000);
    homeSlider.onmouseover = function(){
        clearInterval(timerId);
    };
    homeSlider.onmouseout = function(){
        if(kaiguan){
            clearInterval(timerId);
            timerId = setInterval(fn,2000);
        }
    };
    for ( var i = 0;  i < btn.length;  i++){
        btn[i].onclick = function(){
            clearInterval(timerId);
            kaiguan  = false;

            currentimg.setAttribute('class','img');
            var index = this.getAttribute('index');
            img[index].setAttribute('class','img show');
            currentimg = img[index];

            currentbtn.setAttribute('class','btn');
            this.setAttribute('class','btn active');
            currentbtn = this;

            return false;
        };
    }
    next.onclick = function(){
        clearInterval(timerId);
        kaiguan = false;
        currentimg.setAttribute('class','img');
        var next = (currentimg.nextElementSibling)?currentimg.nextElementSibling:img[0];
        next.setAttribute('class','img show');
        currentimg = next;
        currentbtn.setAttribute('class','btn');
        var nextl = (currentbtn.nextElementSibling)?currentbtn.nextElementSibling:btn[0];
        nextl.setAttribute('class','btn active');
        currentbtn = nextl;
    };
    prev.onclick = function(){
        clearInterval(timerId);
        kaiguan = false;
        currentimg.setAttribute('class','img');
        var pre = (currentimg.previousElementSibling)?currentimg.previousElementSibling:img[5];
        pre.setAttribute('class','img show');
        currentimg = pre;
        currentbtn.setAttribute('class','btn');
        var prel = (currentbtn.previousElementSibling)?currentbtn.previousElementSibling:btn[5];
        prel.setAttribute('class','btn active');
        currentbtn = prel;
    };


















}
