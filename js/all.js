// make the navbar keep fix after scroll after the origin position.
$.fn.followTo = function (signal) {
    var $this = this,
        $window = $(window),
        pos = $('#header').css('padding-top').replace(/[^-\d\.]/g, '');
    $window.scroll(function (e) {
        $('.navbar').onePageNav({
            currentClass:'nowp',
            scrollOffset: 50
        });
        if ($window.scrollTop() > pos) {
            $('#nav').css({
                position: 'fixed',
                top: 0
            });
        } else {
            $('#nav').css({
                position: 'relative',
                top: 0
            });
        }
    });
};
$('div#nav').followTo(1);
// mytrace show 
//$('#myt').click(function(){
//    $('#mytrace').css({display:'block'});
//    $('#cover').css({display:'block'});
//});
//// mytrace hide
//$('#cover,#mytrace').click(function(){
//    $('#mytrace').css({display:'none'});
//    $('#cover').css({display:'none'});
//});
// make the vw re-calculate after resizing the window
causeRepaintsOn = $("h4,li,div#title1,button,h1, h2, h3, p");
$(window).resize(function() {
    causeRepaintsOn.css("z-index", 1);
});
// The hover effect of port's span
//$('#allports> li').hover(function(){
//    $(this).find('.hovf').toggle('slow');
//});
// navigation of the portfolio
var shownu = $('#allports>li').length,
    $pli = $('#allports>li'),
    visinu = $('#allports>li:visible').length
$('#next').click(function(){
    var starti = $pli.index($('#allports>li:visible').first());
    if((starti+visinu)<shownu){
        for(var i=starti;i < visinu+starti;i++){
            $pli.eq(i).hide('fast');
            $pli.eq(i+visinu).delay(500).show('slow');
        };
    }else{
        $('#tipsword1').show('slow');
        $('#tipsword1').delay(1000).hide('slow');
    };
    });
$('#pre').click(function(){
    var starti = $pli.index($('#allports>li:visible').first());
    if((starti!=0)){
        for(var i=starti;i > starti-visinu;i--){
            $pli.eq(i+visinu-1).hide('fast');
            $pli.eq(i-1).delay(500).show('slow');
        };
    };
});
// 
$('input').on('click',function(){
    if($(this).attr('id') != "submit-btn"){
        $(this).val('');    
    }
})

$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('journal'));
    var myChart2 = echarts.init(document.getElementById('mytrace'));
    var option = {
        backgroundColor:'#EDE0CC',
        title : {
            text: "Gary's Footprint!",
            subtext: 'Record where I have been to and where I have not. One day, I will travel the world!',
                        // sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
                        x:'center',
                        y:'top'
            },
            tooltip : {
                trigger: 'item',
                formatter: '{b}'
            },
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                data:['Visited','Must Visit','Can be Wait']
            },
            series : [
            {
                name: '世界地图',
                scaleLimit:1,
                type: 'map',
                mapType: 'world',
                roam: false,
                mapLocation: {
                    y : 60
                },
                selectedMode : 'single',
                itemStyle:{
                    normal:{borderColor:'#fff',color:"#333300",label:{show:false}},
                    emphasis:{label:{show:true}}
                },
                data:[]
            },
            {
                name: 'Visited',
                type: 'map',
                mapType: 'world',
                itemStyle: {
                    normal: {
                        borderWidth:1,
                        borderColor:'lightgreen',
                        color:"red",
                        label:{
                            show:true,
                            textStyle: {
                                color: '#333'
                            }
                        }
                    }
                },
                data:[
                {"name":"China"},
                {"name":"New Zealand"},
                {"name":"United States of America"},
                {"name":"Australia"}
                ]
            },
            {
                name: 'Must Visit',
                type: 'map',
                mapType: 'world',
                itemStyle: {
                    normal: {
                        borderWidth:1,
                        borderColor:'lightgreen',
                        color:"green"
                    }
                },
                data:[
                {name : 'Sweden'},
                {name : 'Poland'},
                {name : 'Ireland'},
                {name : 'Italy'},
                {name : 'India'},
                {name : 'France'},
                {name : 'United Kingdom'},
                {name : 'Haiti'},
                {name : 'Norway'},
                {name : 'South Africa'},
                {name : 'Canada'},
                {name : 'Switzerland'},
                {name : 'Romania'},
                {name : 'Russia'},
                {name : 'Egypt'},
                {name : 'Finland'},
                {name : 'Republic of the Congo'}
                ]
            },
            {
                name: 'Can be Wait',
                type: 'map',
                mapType: 'world',
                itemStyle:{
                    normal:{borderColor:'#fff',color:"#333300",label:{show:false}},
                    emphasis:{label:{show:true}}
                },
                data:[]
            }
            ]
        };
    var option2 = {
        backgroundColor:'#EDE0CC',
        title : {
            text: "Gary's Footprint in China!",
            subtext: 'One day, I will travel the world!',
                        // sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
                        x:'center',
                        y:'top'
            },
            tooltip : {
                trigger: 'item',
                formatter: '{b}'
            },
            legend: {
                orient: 'horizontal',
                x:'center',
                y:'bottom',
                data:['Visited','Must Visit','Can be Wait']
            },
            series : [
            {
                name: 'China',
                type: 'map',
                mapType: 'china',
                roam: false,
                mapLocation: {
                    y : 40
                },
                selectedMode : 'single',
                itemStyle:{
                    normal:{borderColor:'#fff',color:"#333300",label:{show:false}},
                    emphasis:{label:{show:true}}
                },
                data:[]
            },
            {
                name: 'Visited',
                type: 'map',
                mapType: 'china',
                itemStyle: {
                    normal: {
                        borderWidth:1,
                        borderColor:'lightgreen',
                        color:"red",
                        label:{
                            show:true,
                            textStyle: {color: '#333'}
                        }
                    }
                },
                data:[
                {"name":"北京"},
                {"name":"甘肃"},
                {"name":"宁夏"},
                {"name":"山东"},
                {"name":"黑龙江"},
                {"name":"内蒙古"},
                {"name":"西藏"},
                {"name":"青海"},
                {"name":"四川"},
                {"name":"广东"},
                {"name":"上海"},
                {"name":"浙江"},
                {"name":"河南"},
                {"name":"山东"},
                {"name":"河北"},
                {"name":"天津"},
                {"name":"澳门"},
                {"name":"香港"}
                ]
            },
            {
                name: 'Must Visit',
                type: 'map',
                mapType: 'china',
                itemStyle: {
                    normal: {
                        borderWidth:1,
                        borderColor:'lightgreen',
                        color:"green",
                        label:{
                            show:false
                        }
                    }
                },
                data:[
                {name : '海南'},
                {name : '台湾'},
                {name : '新疆'},
                {name : '云南'},
                {name : '湖南'},
                {name : '南海诸岛'}
                ]
            },
            {
                name: 'Can be Wait',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{borderColor:'#fff',color:"#333300",label:{show:false}},
                    emphasis:{label:{show:true}}
                },
                data:[]
            }
            ]
        };
    var ecConfig = echarts.config.EVENT;
    function eConsole(param) {
        if(param.name=="China"){
            $('div#mytrace').show();
            $('div#journal').hide();
            myChart2.resize();
        }
    }
    function eConsole2(param) {
        //if($(window).width()>568){
            $('div#mytrace').hide();
            $('div#journal').show();
            myChart.resize();
        //}
    }
    $(window).resize(function(){
        myChart.resize();
        myChart2.resize();
    });
    myChart.setOption(option);
    myChart2.setOption(option2);
    window.onresize = myChart.resize;
    window.onresize = myChart2.resize;
    myChart.on(ecConfig.CLICK, eConsole);
    myChart2.on(ecConfig.CLICK, eConsole2);

    // Load latest blog
    $.getJSON('http://taoalpha.me/blog/api/latest.json',function(data){
      var template = '<div class="singleline"></div><div class="blogc"><div class="imgbox"><img src="images/blogicon.png" alt="blogicon"></div><div class="alltext"><a href="http://taoalpha.me/blog__B_LINK__" class="blogtitle">__B_TITLE__</a><h6 class="blogdate">__B_DATE__</h6><a href="http://taoalpha.me/blog__B_LINK__" class="blogsummary"><p>__B_SUMMARY__</p></a></div></div>'
      var sumtext = '<h5><a href="http://taoalpha.me/blog">Tao\'s blog</a></h5>'
      $.each(data,function(i,v){
        sumtext += template.replace(/__B_LINK__/g,v.url).replace(/__B_TITLE__/g,v.title).replace(/__B_DATE__/g,v.date.split(' ')[0]).replace(/__B_SUMMARY__/g,v.summary)
      })
      $('div.blognews').html(sumtext);
    })
});
