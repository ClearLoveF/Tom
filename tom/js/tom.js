//计时器
var timer;
//获取音乐标签
var music=document.getElementById("music");
//封装函数,处理图片名称是否带0的问题
//函数的结构:function 名称(传值){处理结果}
function imgIndex(index){
	if(index < 10){
		return "0"+index;
	}else{
		return index;
	}
}

//封装函数,拼接图片路径
function imgSrc(name,index){
//	img/Animations/angry/angry_00.jpg
    return "img/Animations/"+name+"/"+name+"_"+imgIndex(index)+".jpg";
   	
}
//封装函数,切换图片路径,开始动画
//start(动画名称,图片总数)
function start(name,count){
//	清空计时器
clearInterval(timer);
	var index=0;
//	获取元素
    var cat=document.getElementById("cat");
    
//  设置计时器
   timer = setInterval(function(){
   	if(++index < count){
// 		切换路径
    cat.src=imgSrc(name,index);
   	}else{
// 		清除计时器
   clearInterval(timer);
   	}
   },80);
}
//点击事件
var cymbal=document.getElementById("cymbal");
cymbal.onclick=function(){
	start("cymbal",13);
//	给音乐标签传音乐路径
	music.src="mp3/mp3/pia.mp3";
//	播放音乐 play()audio自带的播放音乐方法
   music.play();
}
var drink=document.getElementById("drink");
drink.onclick=function(){
	start("drink",81);
}
var eat=document.getElementById("eat");
eat.onclick=function(){
	start("eat",40);
}
var fart=document.getElementById("fart");
fart.onclick=function(){
	start("fart",28);
	music.src="mp3/mp3/pi.wav";
	music.play();
}
var pie=document.getElementById("pie");
pie.onclick=function(){
	start("pie",24);
}
var scratch=document.getElementById("scratch");
scratch.onclick=function(){
	
	start("scratch",56);
}
var stomach=document.getElementById("stomach");
stomach.onclick=function(){
	start("stomach",34);
	music.src="mp3/mp3/tomaiyou.mp3";
	music.play();
}
var knockout=document.getElementById("knockout");
knockout.onclick=function(){
	start("knockout",81);
}
var angry=document.getElementById("angry");
angry.onclick=function(){
	start("angry",26);
}
var footLeft=document.getElementById("footLeft");
footLeft.onclick=function(){
	start("footLeft",30);
	music.src="mp3/mp3/tomaiyou.mp3";
	music.play();
}
var footRight=document.getElementById("footRight");
footRight.onclick=function(){
	start("footRight",30);
	music.src="mp3/mp3/tomaiyou.mp3";
	music.play();
}
