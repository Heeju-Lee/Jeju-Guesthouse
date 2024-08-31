
$(function() {

    let ratePerNight;

    //localstorage 변경에 따라 숙소명 변경
    function updateName() {
        const name = localStorage.getItem("ghName");
        $('#guesthouseName').text(name);	
        // 이미지 업데이트 함수 호출
        updateContent(name);
    };//updateName

    //페이지 로드시default Price 설정
    function defaultP(){
        $('#night-rate').text(`₩${ratePerNight.toLocaleString()} x 1 night`);
        $('#total-amount').text(`total : ₩${ratePerNight.toLocaleString()}`);
    }

    //이름에 따라 data 변경
    function updateContent(name) {
        if (name == '제주 마실 게스트 하우스') {
            $('#thumbnail').attr('src', './image/GH1.jpg');
            $('#desc').html(name+"<br><br>성산일출봉에서 가까운 숙소<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0960411748974!2d126.51361839999998!3d33.4988783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb5b6711d801%3A0x2db66db8e14df16f!2z7KCc7KO866eI7IukIOqyjOyKpO2KuO2VmOyasOyKpA!5e0!3m2!1sko!2skr!4v1724508343422!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 39000;
                defaultP()
            }
        }
        if (name == '제주 주니비니 하우스') {
            $('#thumbnail').attr('src', './image/GH2.jpg');
            $('#desc').html(name+"<br><br>제주공항에서 10분거리/ 무지개해안도로에 위치<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8497114972984!2d126.25307369999999!3d33.4010849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350c6085ee7eff75%3A0xb4afc51ea7c3b8e4!2z7KCc7KO8IOyjvOuLiOu5hOuLiCDtlZjsmrDsiqQ!5e0!3m2!1sko!2skr!4v1724510938831!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 60000;
                defaultP()
            }
        }
        if (name == '애월 조끄띠') {
            $('#thumbnail').attr('src', './image/GH3.jpg');
            $('#desc').html(name+"<br><br>제주공항에서 10분거리/ 무지개해안도로에 위치<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106562.58381652145!2d126.29132135820316!3d33.421139200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cf74012aaf16b%3A0xba9774ec1832b6a1!2z7Iqk7YWM7J20IOqzgSjslaDsm5Qg7KGw64GE652g66-867CVKQ!5e0!3m2!1sko!2skr!4v1724512678980!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 70000;
                defaultP()
            }
        }
        if (name == '아길라 오시아노') {
            $('#thumbnail').attr('src', './image/GH4.jpg');
            $('#desc').html(name+"<br><br>제주공항에서 10분거리/ 무지개해안도로에 위치<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8941745185507!2d126.24951959999999!3d33.39992499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350c608fb41b597f%3A0xbd79b80ca62c65db!2z7Zi47YWUIOyVhOq4uOudvA!5e0!3m2!1sko!2skr!4v1724512783313!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 56000;
                defaultP()
            }
        }
        if (name == '하이티 게스트 하우스') {
            $('#thumbnail').attr('src', './image/GH5.jpg');
            $('#desc').html(name+"<br><br>제주버스터미널 도보 1분/공항차량7분<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106689.83758972144!2d126.14877766978255!3d33.3173141631833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350c661b44a33781%3A0xcf9739ca118ae1d6!2z7ISc67aA7KeA!5e0!3m2!1sko!2skr!4v1724513400352!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 56000;
                defaultP()
            }
        }
        if (name == '솔게스트 하우스') {
            $('#thumbnail').attr('src', './image/GH6.jpg');
            $('#desc').html(name+"<br><br>탑동해안의 중심/바다풍경<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37668.9693595767!2d126.88905768668741!3d33.43633087203438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d137fb05d8f1f%3A0xdebfc68b49169905!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOyEnOq3gO2PrOyLnCDshLHsgrDsnY0g6rOg7ISx7Jik7KGw66Gc!5e0!3m2!1sko!2skr!4v1724513218277!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 96000;
                defaultP()
            }
        }
        if (name == '해뜨는 집') {
            $('#thumbnail').attr('src', './image/GH7.jpg');
            $('#desc').html(name+"<br><br>성산일출봉/일출을 방안에서<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53379.5761708456!2d126.59849397910153!3d33.26064039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350dab15010a0605%3A0xeb9c2cdb5e484efe!2z7ZW065yo64qUIOynkQ!5e0!3m2!1sko!2skr!4v1724512939409!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 52000;
                defaultP()
            }
        }
        if (name == '동복바롯') {
            $('#thumbnail').attr('src', './image/GH8.jpg');
            $('#desc').html(name+"<br><br>제주버스터미널 도보 5분<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26606.637400718195!2d126.72011125!3d33.531813750000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d1918e3d71b85%3A0x6c9fb7e033d2e976!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDqtazsoozsnY0g64-Z67O166as!5e0!3m2!1sko!2skr!4v1724512977671!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 33000;
                defaultP()
            }
        }
        if (name == '섬데이제주') {
            $('#thumbnail').attr('src', './image/GH9.jpg');
            $('#desc').html(name+"<br><br>제주공항5분/함덕해수욕장근처<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106426.54960287278!2d126.72011125!3d33.531813750000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d17bd11a20c31%3A0xac5783c401266ec2!2sSomeday%20Jeju!5e0!3m2!1sko!2skr!4v1724513003307!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 56000;
                defaultP()
            }
        }
        if (name == '해변게스트 하우스') {
            $('#thumbnail').attr('src', './image/GH10.jpg');
            $('#desc').html(name+"<br><br>하도리해수용장 10분거리<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22376.878494534845!2d126.88705775608643!3d33.51846959102785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d15c5d289b6c1%3A0xf6cb96ce1469e5b0!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDqtazsoozsnY0g7ZWY64-E66as!5e0!3m2!1sko!2skr!4v1724513077907!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 52000;
                defaultP()
            }
        }
        if (name == '곽지집') {
            $('#thumbnail').attr('src', './image/GH11.jpg');
            $('#desc').html(name+"<br><br>공항 20분 거리/에메랄드빛 바다 뷰<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26631.51023210839!2d126.3057298!3d33.45090149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cf599b2209d13%3A0xc875cf308c500820!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDslaDsm5TsnY0g6rO97KeA66as!5e0!3m2!1sko!2skr!4v1724513105969!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 46000;
                defaultP()
            }
        }
        if (name == '별빛 두방울') {
            $('#thumbnail').attr('src', './image/GH12.jpg');
            $('#desc').html(name+"<br><br>서건도 바다뷰/공항차량7분<br><br>재방문율 압도적 1위, 리뷰수 7500++<br>365일 매일 진행되는 게스트하우스 파티<br>사람과 젊음을 즐길 준비 되었나요?<br><br>제주도 게스트하우스파티 <br>많은 사랑을 받고있는 이유입니다!<br><br>제주도게스트하우스파티 NO.1<br>힐링을 누리고 가세요...")
            $('#iframeMap').attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.059951018047!2d126.24809849999998!3d33.39560009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350c60916d209bcf%3A0xcbfb2ea1f2299846!2z67OE67mb65GQ67Cp7Jq466-867CV!5e0!3m2!1sko!2skr!4v1724513123993!5m2!1sko!2skr");
            if ($("#roomSel option:selected").val() === "101") {
                ratePerNight = 86000;
                defaultP()
            }
        }
    }

    updateName();

    function updateRoomCharge(){
        var roomNum = $("#roomSel option:selected").val();

        // 기존 방 가격 업데이트를 호출
        updateContent($('#guesthouseName').text());

        if(roomNum=="102"){
            ratePerNight = 40000;
        }
        if(roomNum=="103"){
            ratePerNight = 45000;
        }

        updateTotal()

    }

    function updateTotal() {
        //date 가져오기
        const today = new Date();
        const checkInDate = new Date($('#check-in').val());
        const checkOutDate = new Date($('#check-out').val());
        //date 차이 계산
        const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
        const nightDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        const personCount = parseInt($('#person').val(), 10) || 1;

        if (checkInDate && checkOutDate && checkOutDate > checkInDate) {
        
            const totalAmount = ratePerNight * nightDifference * personCount;

            //변경사항 적용
            $('#total-amount').text(`total : ₩${totalAmount.toLocaleString()}`);
            $('#night-rate').text(`₩${ratePerNight.toLocaleString()} x ${nightDifference} night(s)`);
        } else if (checkOutDate <= checkInDate){
            alert('체크아웃 날짜는 체크인 날짜보다 늦어야 합니다.');
        } else if (checkInDate<today || checkOutDate<today){
            alert('체크인 & 체크아웃 날짜는 오늘 이후로 설정해야 합니다.');
            $('#check-in').val('');
            $('#check-out').val('');
        } else {
            defaultP()
        }
    }

    //이벤트 발생 시 
    $('#roomSel').on('change', updateRoomCharge);
    $('#check-in').on('change', updateTotal);
    $('#check-out').on('change', updateTotal);
    $('#person').on('change', updateTotal);


    //MainImg 슬라이드
    $('#mainImg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots : true, 	
        pauseOnHover : true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
    
    $("#reserve").click(reserve);
    //reserv button click event
    function reserve() {
        alert("예약이 완료됐습니다.");
    }//reserve

    //chart-js(평점 bar chart)
    var ctx = document.getElementById('rating-chart');
    let ratings = ['5점','4점','3점','2점','1점'];

    let ratingData = {
            label: '이용객별 평점',
            data:[25,10,2,1,1],
            backgroundColor: 'orange',
    };
    let config = {
            type:'bar',
            data:{
                labels: ratings,
                datasets: [ratingData]
            },
            options: {
                maxBarThickness: 10,
                responsive: false,
                maintainAspectRatio: false,
                tooltipTemplate: "<%= label %> - <%= value %>",

                scales:{
                    x:{
                        grid: {       
                            display: false, 
                        },
                    },
                    y:{
                        grid: {        
                            display: false,      
                        },
                        ticks: {
                        display: false, // y축 숫자 숨기기
                        },
                        max: 30, // y축 최대 값 설정,
                        border: {
                            display: false // Y축 테두리 숨기기
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                } 
            }
    };
    var myChart = new Chart(ctx, config);

    
    //chart-js(평점 bar chart)
    var ctx2 = document.getElementById('pie-chart').getContext('2d');

    // 원본 데이터
    let ratings2 = ['20대', '30대', '40대', '50대', '60대'];
    let data2 = [20, 10, 5, 2, 1];
    
    // 데이터 전처리
    let threshold2 = 2; // '기타'로 묶을 기준값
    let otherSum2 = 0;
    let labels2 = [];
    let values2 = [];
    let backgroundColors2 = [
        'rgba(255, 178, 102, 1)',  // 밝은 오렌지
        'rgba(255, 87, 34, 1)',    // 진한 주황
        'rgba(0, 150, 136, 1)',    // 민트 그린
        'rgba(158, 158, 158, 1)',  // 밝은 회색
        'rgba(33, 150, 243, 1)'    // 파란색
    ];

    for (let i = 0; i < data2.length; i++) {
        if (data2[i] <= threshold2) {
            otherSum2 += data2[i];
        } else {
            labels2.push(ratings2[i]);
            values2.push(data2[i]);
            backgroundColors2.push(backgroundColors2[i]);
        }
    }

    if (otherSum2 > 0) {
        labels2.push('기타');
        values2.push(otherSum2);
    }

    let ratingData2 = {
        label: '이용객별 평점',
        data: values2,
        backgroundColor: backgroundColors2.slice(0, values2.length),
    };

    let config2 = {
        type: 'pie',
        data: {
            labels: labels2,
            datasets: [ratingData2]
        },
        options: {
            maintainAspectRatio: false,
            responsive: false,
            plugins: {
                legend: {
                    display: true
                },
                datalabels: {
                    color: '#000',
                    formatter: function(value, context) {
                        return `${value}`;
                    },
                    anchor: 'end',
                    align: 'end',
                    offset: 4,
                    font: {
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            let value = context.raw || '';
                            return `${label}: ${value}`;
                        }
                    }
                }
            }
        }
    };

    var myPieChart2 = new Chart(ctx2, config2);

});
