
$(function() {

    //MainImg 슬라이드
    $('#bgImgSliding').slick({
        slidesToShow: 1,
        slidesToScroll: 1,	
           pauseOnHover : true,
        autoplay: true,
        autoplaySpeed: 1500,
        // fade: true,
        arrows: false
    });

    //게하 선택하면 게하 제목을 LocalStorage 저장
    $(".content").on("click", function(){

        let key = $(this).find("h2.ghName").attr("class");
        let value = $(this).find("h2.ghName").attr("value");

        localStorage.setItem( key, value);

        location.href = "./reservation.html";
    });
    
    $(".content").hover(function(){
        $(this).addClass("shadow");
    },
    function(){
        $(this).removeClass("shadow")
    });

     
/*제주도 지도*/
    
    //모달 띄우기
    $("#textAreaNm").on("click", function (){
        $("#hotel_zone").css("display","block");
        $("#hotel_zone").fadeIn();
    });

    // 지역 선택
    $(".quick_mapArea").on("click", ".cls-1", function() {

        if ($(this).hasClass("off")) {
            changeOn.call(this);  
        } 
        else if ($(this).hasClass("on")) { //DOM에 올릴 때는 없고 추후 생성됨 -> 이벤트 위임 필요
            changeOff.call(this); 
        }
        else return;

        let selectedAreas = []; 
        selectedAreas= $("g[class=on]").map(function( idx, value) {
            return $(this).data("areanm");
        });
        let areasStr = selectedAreas.get();

        $(".serachBorder #textAreaNm").text(areasStr).css("color", "rgb(255, 153, 0)");
        
    });

    let locArr = [	"EA","JE","WE","SE","WS","ES"];
    $("#apply_btn").on("click",function(){

        let selectedArr = $(".serachBorder #textAreaNm").text().trim().split(',');

        //이전 검색 기록 초기화
        $.each(locArr, function(index, iteam){
            $("." +iteam).css("display","flex");
        });		

        if((selectedArr.length == 1 && selectedArr[0]=="") || (selectedArr.length ==1 && selectedArr[0] == '제주도' )){
            alert("지역을 하나 이상 선택해주세요");
            $("#textAreaNm").text("제주도").css("color", "gray");
            return;
        } 

        for(let i =0; i <locArr.length; i++){
            let areaName = $(".serachBorder g[id=" + locArr[i]).data("areanm");
            
            if( selectedArr.indexOf(areaName) == -1){
                console.log("없는 지역 " + $("g[data-areanm='" +areaName + "'").val);

                $(".content[data-areanm='" +areaName + "']"  ).css("display","none");
            }	
        }

        // 모달 사라지기
        $(this).parents('#hotel_zone').fadeOut();
    });	 
    
});

function changeOff() {
    $(this).css("fill", "#e9e9e9");
    $(this).parent().attr("class", "off");
    $(this).attr("class", "cls-1 off"); // on 상태에서 off로 전환
}

function changeOn() {
    $(this).css("fill", "rgb(255, 153, 0)");
    $(this).parent().attr("class", "on");
    $(this).attr("class", "cls-1 on"); // off 상태에서 on으로 전환
}