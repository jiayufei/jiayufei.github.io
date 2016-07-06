


// 初始化函数
function init()
{
	$("#tuijianTop div").click(function(){
  		$("#tuijianTop div").removeClass("tuijian_top");
  		$(this).addClass("tuijian_top");
  		divChange($(this));
  	});
  	//var tx=["无手续费"，"含手续费：费率0.5%，￥0.29×3期","含手续费：费率0.5%，￥0.29×6期","含手续费：费率0.5%，￥0.29×12期","含手续费：费率0.5%，￥0.29×24期"];
  	baitiaolihover();
  	baitiaoliout();
  	baitiaoClick();
  	$("#tuijianbottom div ul li").click(function(event) {
  		/* Act on the event */
  		redfont(event);
  		tuijianChange($(this));
  	});
  	tonghover();
  	$('#chanpin-r-top>ul>li').click(selectChanpin);
//给商品介绍 规格参数 包装清单 商品评价 售后添加监听事件
	var top1=$('#chanpin-left>div:first-child').offset().top;
	$(window).scroll(function(event) {
		/* Act on the event */
		//console.log(event);
		bodyscroll(top1);
	});

	//评价选项卡
	$("#pingjia2 ul li").click(function(event) {
		/* Act on the event */
		$("#pingjia2 ul li").removeClass('chanpin-r-t-s');
		$(this).addClass('chanpin-r-t-s');
	});
	//咨询选项卡
	$("#zixuntop ul li").click(function(event) {
		/* Act on the event */
		$("#zixuntop ul li").removeClass('chanpin-r-t-s');
		$(this).addClass('chanpin-r-t-s');
	});
	$("#wangyou ul li").click(function(event) {
		/* Act on the event */
		$("#wangyou ul li").removeClass('chanpin-r-t-s');
		$(this).addClass('chanpin-r-t-s');
	});
 /* 	document.querySelector("#zixuntop input:nth-child(2)").oninput=function()
	{
		if ($(this).val()=="") {
			$(this).val("请输入关键字").css('color', '#ddd');
		}else{
			$(this).val()==$(this).val()[0];
			$(this).css('color', '#666');
		}
	};*/

}
var moveCount=0;
//设置移动的次数

//给所有的img所在的LI加上onclick监听
var lilist=document.querySelectorAll("#main_detail_one li");
for (var i = lilist.length - 1; i >= 0; i--) 
{
	lilist[i].onclick=function()
	{
		for (var i = lilist.length - 1; i >= 0; i--)
		 {
			if(lilist[i].className=="selectedLi")
			{
				lilist[i].removeAttribute('class');
			}
		}
		this.className ="selectedLi";
		var img=this.children;
		changeMandL(img[0].src);
	}
}

//根据鼠标点击缩略图变换相应的中图 函数
function changeMandL(thisImgSrc)
{
	var index=thisImgSrc.lastIndexOf('.');
	var begin = thisImgSrc.substring(0,index);
	var m=thisImgSrc.substring(index);
	var mediumImgSrc=begin+'-m'+m;
	var mimg=document.querySelector("#main_detail_one>img");
	var limg=document.querySelector("#screen>img");
	mimg.src=mediumImgSrc;
	limg.src=begin+'-l'+m;

	//mimg.src=mediumImgSrc;
}

//当鼠标按下向左和向右的两个箭头
var mousedown=document.querySelectorAll('#main_detail_one>span');
mousedown[1].onmousedown=
function()
{
	if(moveCount!=3)
	{
		this.className="forword_down";
	}	
}
mousedown[1].onmouseup=
function()
{
	if(moveCount==lilist.length-6)
	{
		moveCount++;
		this.className='forword_Disabled';
		return 1;
	} else if (moveCount==lilist.length-5) { return 1;}
	this.className="forword"
	moveCount++;
	mousedown[0].className="back";
}


//向左↓
mousedown[0].onmousedown=
function()
{
	if (moveCount!=0) 
	{
	this.className="back_down";
	}	
}
mousedown[0].onmouseup=
function()
{
	if(moveCount==1)
	{
		moveCount--;
		this.className='back_Disabled';
		return 1;
	}
	else if (moveCount==0) {return 1;}
	this.className="back"
	moveCount--;
	mousedown[1].className="forword";
}




//UL的左移和右移
function moveright()
{
	var ul=document.querySelector("#main_detail_one ul");
	ul.style.left=(-62*moveCount)+'px';
}
function moveleft()
{
	moveright();
}
//设置放大镜效果函数
function makeBigDisplay()
{
	document.getElementById('makeBig').style.display='block';
	document.querySelector("#screen").style.display="block";
	document.querySelector("#screen").style.borderColor="#ddd";

} 
function makeBigNoDisplay()
{
	document.getElementById('makeBig').style.display='none';
	document.querySelector("#screen").style.display="none";
	document.querySelector("#screen").style.borderColor="transparent";
}
var makeBigTop=document.getElementById('makeBigTop');
var makeBig=document.getElementById('makeBig');
var pimg=document.querySelector("#screen");
makeBigTop.onmousemove=
function(e){
	var x=e.offsetX;
	var y=e.offsetY;
	var top=y>=87?y-87:0;
	var left=x>=87?x-87:0;
	top=top<175?top:175;
	left=left<175?left:175;
	makeBig.style.left=left+'px';
	makeBig.style.top=top+'px';
	pimg.firstElementChild.style.left=-left*(pimg.firstElementChild.width/makeBig.previousElementSibling.width)+'px';
	pimg.firstElementChild.style.top=-top*(pimg.firstElementChild.width/makeBig.previousElementSibling.height)+'px';
}
pimg.firstElementChild.onload=function(){
	//pimg.clientWidth=(this.clientWidth/2);
	//console.log(typeof this.clientWidth);
	//pimg.clientHeight=this.clientHeight/2;
	pimg.style.width=this.width/2+'px';
	pimg.style.height=this.height/2+'px';
}
//显示地址下拉菜单
function hiddenAddShow()
{
	//var $a=$("div");
	var $haddenAdd=$("#hiddenAddress");
	$haddenAdd.css("display","block");
	$("#addressCheck").css("borderBottomColor","transparent")
}

//选择函数 选择薰衣草和索菲亚玫瑰
function select(s)
{
	var d=$("#xuanchanpin div b");
	d.removeClass("selected");
	d.parents().css("border-color","#ddd");
	if ($(s).css("border-color")=="red") {
		return;
	}
	else{
		$(s).css("border-color","red");
		var vs=$(s).children()[0];
		$(vs).addClass("selected");
	}
}
function baitiaoClick()
{
	$("#baitiao>ul>li").click(function(){
  		var $lilist=$("#baitiao>ul>li");
  		$lilist.css({
  			border: '1px solid #ddd',
  			padding: '1px 5px'
  		});
  		$(this).css({border:"2px solid red",padding:"0px 4px"})
  	});
}
function baitiaolihover()
{	
	var tx=["无手续费","含手续费：费率0.5%，￥0.29×3期","含手续费：费率0.5%，￥0.29×6期","含手续费：费率0.5%，￥0.29×12期","含手续费：费率0.5%，￥0.29×24期"];
	$("#baitiao>ul>li").mouseover(function(event) {
		/* Act on the event */
		var str=tx[$("#baitiao>ul>li").index($(this))];
		var s=$("<div class='baitiaolihover'></div>");
		s.html(str);
		s.css({
			backgroundCorlor:'rgb(254,255,247)',
			color: '#666'
		});
		$(this).append(s);
	});
}
function baitiaoliout()
{
	$("#baitiao>ul>li").mouseout(function(event) {
		/* Act on the event */
		$("#baitiao>ul>li>div").remove();
	});
}
//字体变红函数 加类
function redfont()
{
	$("#tuijianbottom li").removeClass('redfont');
	$(event.target).addClass('redfont');
}
function tuijianChange($d)
{
	var lilist=$("#tuijianbottom div ul li");
	var ind=lilist.index($d[0]);
	var idlist=["jingxuan","quchong","zhipin","yiwu","jiating"];
	$("#jingxuan,#quchong,#zhipin,#yiwu,#jiating").css({
		display: 'none',
	});
	$("#"+idlist[ind]).css({
		display: 'block',
	});

}
function divChange($d)
{
	$("#tuijianbottom,#tuijianbottom-2,#tuijianbottom-3").css({
		display: 'none'
	});
	if ($d.text()=="推荐配件") 
	{
		$("#tuijianbottom").css({
			display: 'block'
		});
	}else if ($d.text()=="优惠套装") 
	{
		$("#tuijianbottom-2").css({
			display: 'block'
		});
	}else if ($d.text()=="人气单品")
	{
	 	$("#tuijianbottom-3").css({
			display: 'block'
	    });
    }
}
//同价位 同品牌  同类别hover
function tonghover(){}
{
	var $span=$("#yiwuqj>div:nth-child(2) span");
	$span.mouseover(function(event) {
		/* Act on the event */
		$span.removeClass('redbold');
		$(this).addClass('redbold');
		var ind=$span.index($(this));
		$("#yiwuqj>div:last-child>div").css({
			display: 'none',
		});
		$("#yiwuqj>div:last-child>div")[ind].style.display="block";
	});
}
// chanpin-r-t  选项卡
function selectChanpin()
{
	var $lis=$("#chanpin-r-top>ul>li");
	$lis.removeClass('chanpin-r-t-s');
	$(this).addClass('chanpin-r-t-s');
	var inde=$lis.index($(this));
	if (inde==3) {
		$('#chanpin-r-bottom6').css('display', 'none');
		$('body').scrollTop($("#chanpin-r-top").offset().top);
		//console.log($("#yiwuqj>div:first-child").scrollTop());
	}else{
		$('#chanpin-r-bottom6').css('display', 'block');;
	}
	var $divs=$("#chanpin-r-bottom1,#chanpin-r-bottom2,#chanpin-r-bottom3,#chanpin-r-bottomk,#chanpin-r-bottom5");
	$divs.css('display', 'none');
	$divs[inde].style.display="block";
}

//元素跟随body滑动函数
function bodyscroll(top1)
{
	if ($('body').scrollTop()>=top1 && $('#chanpin-left>div:first-child').css('position')!='fixed') {
		$('#chanpin-left>div:first-child').css({
			'position': 'fixed',
			'top': '-12px',
			'left':'75px'
		});
		$('#chanpin-r-top').css({
			'position': 'fixed',
			'top': '-11px',
			'left':'293px',
			'z-index':'5',
			'width':'982px'
		});
	}else if ($('body').scrollTop()<=top1 && $('#chanpin-left>div:first-child').css('position')=='fixed') {
		$('#chanpin-left>div:first-child').css('position', 'static');
		$('#chanpin-r-top').css('position', 'static');
	}
}