window.onload=function(){
    setTimeout(function(){
        console.log($(".bianji"));
    /*var bianji=document.getElementsByClassName("bianji");
        console.log(bianji.length)
        for(var i=0;i<bianji.length;i++){
            bianji[i].onclick=function(){
               // alert(1);
              // console.log("fuck you ")
                console.log(this);
                $(this).toggleClass("wancheng");
                if($(this).hasClass("wancheng")){
                    $(".shuru").css("display","none");
                     $(this).html("编辑");
                }else{
                    $(".shuru").css("display","flex");
                    $(this).html("完成");
                }
            }
        }*/
        /*$(".bianji").click(function(){
            $(this).toggleClass("wancheng");
            if($(this).hasClass("wancheng")){
                $(".shuru").css("display","none");
                 $(this).html("编辑");
            }else{
                $(".shuru").css("display","flex");
                $(this).html("完成");
            }
        })*/
    },300);
   
    
}