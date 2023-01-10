$('#page').fullpage({
    autoScrolling:true,
    scrollHorizontally:true,
    navigation:true,
    anchors:['1page' , '2page' ,'3page' ,'4page','5page'],
    menu:'#menu',
    afterLoad:function(o,destination, d ,trigger){
 
        if(destination.anchor == "1page"){
            $('.gnb').hide();
        }else{
            $('.gnb').show();
        }
    }
});

$('.gnb li').click(function(){
   
    if($(this).attr('data-menuanchor')== "1page"){
        location.href="#1page";
    }else if($(this).attr('data-menuanchor')== "2page"){
        location.href="#2page";
    }else if($(this).attr('data-menuanchor')== "3page"){
        location.href="#3page";
    }else if($(this).attr('data-menuanchor')== "4page"){
        location.href="#4page";
    }else if($(this).attr('data-menuanchor')== "5page"){
        location.href="#5page";
    }

});
$('.gnb').hide();