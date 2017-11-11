
    $(function(){
        var flag=1;
        $(".category-floor ul li").click(function(){
            if(flag==1){

                $(".shop-show-wrap").animate({
                    right: "0%"

                },500);
                $("#zzc").css({"display":"block"})
                flag=0;
            }else{
                $(".shop-show-wrap").animate({
                    right: "-80%"

                },200);
                $("#zzc").css({"display":"none"})

                flag=1;
            }

        });
        $("#zzc").click(function(){
            $(".shop-show-wrap").animate({"right":"-80%"},50)
            $("#zzc").css({"display":"none"})
        })
    });
