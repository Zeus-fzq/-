//第一页的内容
$(".swiper-container").height(screen.height);
$("#bg").height(screen.height);
$("#bg2").height(screen.height);
$("#bg3").height(screen.height);
$("#bg4").height(screen.height);
$("#bg5").height(screen.height);
$("#bg6").height(screen.height);
$("#bg7").height(screen.height);
$("#bg8").height(screen.height);
$("#appear").height(screen.height);
//第二页
$("#bg1").height(screen.height);
var line1 = document.getElementById("line11");
var line2 = document.getElementById("line21");
var line3 = document.getElementById("line31");
var line4 = document.getElementById("line41");
var line5 = document.getElementById("line51");
var line6 = document.getElementById("line61");
var line7 = document.getElementById("line71");
var line8 = document.getElementById("line81");
var point1 = document.getElementById("point11");
var point2 = document.getElementById("point21");
var point3 = document.getElementById("point31");
var point5 = document.getElementById("point51");
var point6 = document.getElementById("point61");
var point7 = document.getElementById("point71");
var point8 = document.getElementById("point81");
//第三页
var line12 = document.getElementById("line12");
var point22 = document.getElementById("point22");
var beautiful2 = document.getElementById("beautiful2");
//第四页
var lined1 = document.getElementById("lined1");
var lined2 = document.getElementById("lined2");
var lined3 = document.getElementById("lined3");
var lined4 = document.getElementById("lined4");
var lined5 = document.getElementById("lined5");
var lined6 = document.getElementById("lined6");
var lined7 = document.getElementById("lined7");
var lined8 = document.getElementById("lined8");
var pointed1 = document.getElementById("pointed1");
var pointed2 = document.getElementById("pointed2");
var pointed3 = document.getElementById("pointed3");
var pointed4 = document.getElementById("pointed4");
var pointed5 = document.getElementById("pointed5");
var pointed6 = document.getElementById("pointed6");
var pointed7 = document.getElementById("pointed7");
var pointed8 = document.getElementById("pointed8");
//第五页
var line122 = document.getElementById("line122");
var point222 = document.getElementById("point222");
var beautiful22 = document.getElementById("beautiful22");
//第六页
var lineder1 = document.getElementById("lineder1");
var lineder2 = document.getElementById("lineder2");
var lineder3 = document.getElementById("lineder3");
var lineder4 = document.getElementById("lineder4");
var lineder5 = document.getElementById("lineder5");
var lineder6 = document.getElementById("lineder6");
var lineder7 = document.getElementById("lineder7");
var pointeder1 = document.getElementById("pointeder1");
var pointeder2 = document.getElementById("pointeder2");
var pointeder3 = document.getElementById("pointeder3");
var pointeder4 = document.getElementById("pointeder4");
var pointeder5 = document.getElementById("pointeder5");
var pointeder6 = document.getElementById("pointeder6");
var pointeder7 = document.getElementById("pointeder7");
//第七页
//获取加载进度的div
var actor7 = document.getElementById("actor7");
var loading = document.getElementById("loading");
var page1 = document.getElementById("page1");
var appear = document.getElementById("appear");
var xx = document.getElementById("xx");
var pages = document.querySelectorAll("#appear div");
var location1 = document.getElementById("location");
//		console.log(pages.length);
//创建一个用来保存加载的图片
var imgs = [];
//创建一个数组用来保存图片路径
var srcs = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg",
	"imgs/5.jpg", "imgs/6.jpg", "imgs/7.jpg",
	"imgs/8.jpg", "imgs/9.jpg", "imgs/10.jpg",
	"imgs/11.jpg", "imgs/12.jpg", "imgs/13.jpg",
	"imgs/14.jpg", "imgs/15.jpg", "imgs/16.jpg"
];
var num = 0;
//第八页
var linedero1 = document.getElementById("linedero1");
var linedero2 = document.getElementById("linedero2");
var linedero3 = document.getElementById("linedero3");
var linedero4 = document.getElementById("linedero4");
var linedero5 = document.getElementById("linedero5");
var linedero6 = document.getElementById("linedero6");
var linedero7 = document.getElementById("linedero7");
var linedero8 = document.getElementById("linedero8");
var pointedero1 = document.getElementById("pointedero1");
var pointedero2 = document.getElementById("pointedero2");
var pointedero3 = document.getElementById("pointedero3");
var pointedero4 = document.getElementById("pointedero4");
var pointedero5 = document.getElementById("pointedero5");
var pointedero6 = document.getElementById("pointedero6");
var pointedero7 = document.getElementById("pointedero7");
//第九页
var video1 = document.getElementById("video1");
video1.style.width = screen.width + "px";
video1.style.height = screen.height * 0.3 + "px";
//加载图片的函数，加载完成再显示图片
function loadingProgress() {
	loading.innerHTML = "加载进度为:" + num / srcs.length * 100 + "%";
	if(num == srcs.length) {
		showImg1();
		showImg2(pages);
	}
}
//滑图的进度条的style
var line = document.createElement("div");
line.style.position = "absolute";
line.style.transformOrigin = "left";
line.style.transform = "rotate(-90deg)";
line.style.width = screen.height * 0.66 + "px";
line.style.height = 2 + "px";
line.style.bottom = 0 + "px";
line.style.left = 0.06 * screen.width + "px";
line.style.backgroundColor = "red";
var bianhua = screen.height * 0.66 / 16;
var bianhua2 = screen.height * 0.7 / 16;
//显示图片1
function showImg1() {
	loading.style.display = "none";
	page1.style.display = "block";
	actor7.appendChild(line);

}
//给div添加class，并且往div中添加img
function showImg2(pages) {
	for(var i = 0; i < imgs.length; i++) {
		pages[i].setAttribute("class", "pages" + (imgs.length - i));
	}
	for(var i = 0; i < imgs.length; i++) {
		pages[i].appendChild(imgs[i]);
	}
}

//		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//此处为获取到滑动的角度和距离的函数，可以判断手指的方向和距离
var startx, starty, middlex, middley, middlez;
//获得角度
function getAngle(angx, angy) {
	return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
	var angx = endx - startx;
	var angy = endy - starty;
	var result = 0;

	//如果滑动距离太短
	if(Math.abs(angx) < 2 && Math.abs(angy) < 2) {
		return result;
	}

	var angle = getAngle(angx, angy);
	if(angle >= -135 && angle <= -45) {
		result = 1;
	} else if(angle > 45 && angle < 135) {
		result = 2;
	} else if((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
		result = 3;
	} else if(angle >= -45 && angle <= 45) {
		result = 4;
	}

	return result;
}

function movestart(obj) {
	//手指接触屏幕
	obj.addEventListener("touchstart", function(event) {
		var ev = event || window.event;
		startx = ev.touches[0].clientX;
		starty = ev.touches[0].clientY;
	}, false);
	//手指在屏幕上滑动
	obj.addEventListener("touchmove", function(event) {
		var ev = event || window.event;
		middlex = ev.touches[0].clientX;
		middley = ev.touches[0].clientY;
		middlez = startx - middlex;
		ev.cancelBubble = true;
		ev.preventDefault();
		//  		console.log(middlez);
		//往左滑
		if(middlez >= 0) {
			//					for(var k=1;k<3;k++){
			obj.style.transformOrigin = "bottom";
			obj.style.transform = "rotate(" + (-middlez / 5) + "deg)";
			//						pages[this.num-1].style.transform="rotate("+(-middlez/10)+"deg)";
			//					}
		}
		//往右滑
		if(middlez <= 0) {
			//					for(var k=1;k<3;k++){
			obj.style.transformOrigin = "bottom";
			obj.style.transform = "rotate(" + (-middlez / 50) + "deg)";
			//						pages[this.num-1].style.transform="rotate("+(-middlez/100)+"deg)";
			//					}
		}
	}, false);
	//手指离开屏幕
	obj.addEventListener("touchend", function(event) {
		var endx, endy;
		var ev = event || window.event;
		endx = ev.changedTouches[0].clientX;
		endy = ev.changedTouches[0].clientY;
		obj.style.transformOrigin = "bottom";
		//      obj.style.transformOrigin="bottom";

		var direction = getDirection(startx, starty, endx, endy);
		switch(direction) {
			case 0:
				//              alert("未滑动！");
				break;
			case 3:
				//              alert("向左！")
				//          		console.log(1);
				if(startx - endx >= 100 && imgs.length > 1) {
					//						console.log(1);
					imgs.pop();
					console.log(imgs.length);
					//清空appear的div里的子级
					for(var i = 0; i < imgs.length + 1; i++) {

						appear.innerHTML = "";
					}
					//重新给appear的div赋予子级
					for(var i = 0; i < imgs.length; i++) {
						var div11 = document.createElement("div");
						appear.appendChild(div11);
					}
					var pages = document.querySelectorAll("#appear div");
					showImg2(pages);
					//进度条的长短控制
					line.style.width = bianhua * (imgs.length - 1) + "px";
					//						console.log(this.num);
					//location为系统关键字不能随便用，所以我用了location1;
					location1.style.top = (0.3 * screen.height + bianhua2 * (17 - imgs.length)) + "px";
					//回调函数，重新给appear的子级赋予点击事件
					for(var i = 0; i < pages.length; i++) {
						pages[i].num = i;

						movestart(pages[i]);
					}
				} else {
					//手指滑动的距离不够就返回原位置
					obj.style.transform = "rotate(" + 0 + "deg)";
				}

				break;
			case 4:
				//              alert("向右！")
				if(startx - endx <= -100 && imgs.length < 16) {
					//						console.log(2);
					var img = document.createElement("img");
					//						if(this.num<15){
					img.src = srcs[this.num + 1];
					imgs.push(img);
					//						}
					console.log(imgs.length);
					//清空appear的div里的子级
					for(var i = 0; i < imgs.length + 1; i++) {

						appear.innerHTML = "";
					}
					//重新给appear的div赋予子级
					for(var i = 0; i < imgs.length; i++) {
						var div11 = document.createElement("div");
						appear.appendChild(div11);
					}
					var pages = document.querySelectorAll("#appear div");
					showImg2(pages);
					//进度条的长短控制
					line.style.width = bianhua * (imgs.length - 1) + "px";
					//						console.log(this.num);
					//location为系统关键字不能随便用，所以我用了location1;
					location1.style.top = (0.3 * screen.height + bianhua2 * (17 - imgs.length)) + "px";
					//回调函数，重新给appear的子级赋予点击事件
					for(var i = 0; i < pages.length; i++) {
						pages[i].num = i;

						movestart(pages[i]);
					}
				} else {
					//手指滑动的距离不够就返回原位置
					obj.style.transform = "rotate(" + 0 + "deg)";
				}

				break;
			default:
		}
	}, false);
}
//给每一个appear的子级赋予点击事件
for(var i = 0; i < pages.length; i++) {
	pages[i].num = i;
	movestart(pages[i]);

}

//		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//xx的点击事件，点击退出图集
xx.addEventListener("touchend", function(event) {
	var ev = event || window.event;
	appear.style.display = "none";
	page1.style.display = "block";
	xx.style.display = "none";
}, false);
//图片1点击进入图集
page1.addEventListener("touchstart", function(event) {
	var ev = event || window.event;
	page1.style.display = "none";
	appear.style.display = "block";
	xx.style.display = "block";
}, false);
//第三页的点击效果
beautiful2.addEventListener("touchstart", function(event) {
	var ev = event || window.event;
	beautiful2.style.width = screen.width + "px";
	beautiful2.style.top = 0.15 * screen.width + "px";
	beautiful2.style.left = 0 + "px";
}, false);
beautiful2.addEventListener("touchend", function(event) {
	var ev = event || window.event;
	ev.preventDefault();
	beautiful2.style.width = 0.8 * screen.width + "px";
	beautiful2.style.top = 0.2 * screen.width + "px";
	beautiful2.style.left = 0.1 * screen.width + "px";
}, false);
beautiful22.addEventListener("touchstart", function(event) {
	var ev = event || window.event;
	beautiful22.style.width = screen.width + "px";
	beautiful22.style.top = 0.15 * screen.width + "px";
	beautiful22.style.left = 0 + "px";
}, false);
//第五页的点击效果
beautiful22.addEventListener("touchend", function(event) {
	var ev = event || window.event;
	ev.preventDefault();
	beautiful22.style.width = 0.8 * screen.width + "px";
	beautiful22.style.top = 0.2 * screen.width + "px";
	beautiful22.style.left = 0.1 * screen.width + "px";
}, false);
var mySwiper = new Swiper('.swiper-container', {
	effect: 'cube',
	direction: 'vertical',
	cube: {
		slideShadows: false,
		shadow: false,
		shadowOffset: 0,
		shadowScale: 0,

	},
	//控制换页再执行动画效果
	onTransitionEnd: function(swiper) {
		//swiper自带的记录页数的属性，可以解决换页动画的问题【】【】【】【】【】
		//记住点击事件不能放在这里面，不然会重复加载
		//      	console.log(swiper.activeIndex);
		switch(swiper.activeIndex) {
			case 1:
				//添加类名，进行动画
				line1.setAttribute("class", "line1");
				line2.setAttribute("class", "line2");
				line3.setAttribute("class", "line3");
				line4.setAttribute("class", "line4");
				line5.setAttribute("class", "line5");
				line6.setAttribute("class", "line6");
				line7.setAttribute("class", "line7");
				line8.setAttribute("class", "line8");
				point1.setAttribute("class", "point1");
				point2.setAttribute("class", "point2");
				point3.setAttribute("class", "point3");
				point5.setAttribute("class", "point5");
				point6.setAttribute("class", "point6");
				point7.setAttribute("class", "point7");
				point8.setAttribute("class", "point8");
				break;
			case 2:
				//添加类名，进行动画
				line12.setAttribute("class", "line12");
				point22.setAttribute("class", "point22");
				break;
			case 3:
				//添加类名，进行动画
				lined1.setAttribute("class", "lined1");
				lined2.setAttribute("class", "lined2");
				lined3.setAttribute("class", "lined3");
				lined4.setAttribute("class", "lined4");
				lined5.setAttribute("class", "lined5");
				lined6.setAttribute("class", "lined6");
				lined7.setAttribute("class", "lined7");
				lined8.setAttribute("class", "lined8");
				pointed1.setAttribute("class", "pointed1");
				pointed2.setAttribute("class", "pointed2");
				pointed3.setAttribute("class", "pointed3");
				pointed4.setAttribute("class", "pointed4");
				pointed5.setAttribute("class", "pointed5");
				pointed6.setAttribute("class", "pointed6");
				pointed7.setAttribute("class", "pointed7");
				pointed8.setAttribute("class", "pointed8");
				break;
			case 4:
				//添加类名，进行动画
				line122.setAttribute("class", "line122");
				point222.setAttribute("class", "point222");
				break;
			case 5:
				//添加类名，进行动画
				lineder1.setAttribute("class", "lineder1");
				lineder2.setAttribute("class", "lineder2");
				lineder3.setAttribute("class", "lineder3");
				lineder4.setAttribute("class", "lineder4");
				lineder5.setAttribute("class", "lineder5");
				lineder6.setAttribute("class", "lineder6");
				lineder7.setAttribute("class", "lineder7");
				pointeder1.setAttribute("class", "pointeder1");
				pointeder2.setAttribute("class", "pointeder2");
				pointeder3.setAttribute("class", "pointeder3");
				pointeder4.setAttribute("class", "pointeder4");
				pointeder5.setAttribute("class", "pointeder5");
				pointeder6.setAttribute("class", "pointeder6");
				pointeder7.setAttribute("class", "pointeder7");
				video1.style.display = "none";
				break;
			case 6:
				//滑到此页，开始加载图片，赋予图片src，调用loadingProgress()函数
				if(imgs.length == 0) {
					for(var i = 0; i < srcs.length; i++) {
						//创建图片
						var img = document.createElement("img");
						img.src = srcs[i];
						imgs.push(img);
						img.onload = function() {
							num++;
							loadingProgress();
						}
					}
				}

				//					console.log(imgs);
				video1.style.display = "none";
				break;
			case 7:
				//添加类名，进行动画
				linedero1.setAttribute("class", "linedero1");
				linedero2.setAttribute("class", "linedero2");
				linedero3.setAttribute("class", "linedero3");
				linedero4.setAttribute("class", "linedero4");
				linedero5.setAttribute("class", "linedero5");
				linedero6.setAttribute("class", "linedero6");
				linedero7.setAttribute("class", "linedero7");
				linedero8.setAttribute("class", "linedero8");
				pointedero1.setAttribute("class", "pointedero1");
				pointedero2.setAttribute("class", "pointedero2");
				pointedero3.setAttribute("class", "pointedero3");
				pointedero4.setAttribute("class", "pointedero4");
				pointedero5.setAttribute("class", "pointedero5");
				pointedero6.setAttribute("class", "pointedero6");
				pointedero7.setAttribute("class", "pointedero7");
				video1.style.display = "none";
				break;
			case 8:
				video1.style.display = "block";
				video1.controls = "controls";
				break;
			default:
				break;
		}
	}
})