// 设置鼠标移入事件
$('.glyphicon-user').mouseenter(function(){
    // console.log('鼠标移入');
    // 鼠标移入，显示用户信息框
    // $('.user').css("opacity","1")
    $('.user').slideDown()
})
$('.user').mouseleave(function(){
    // 鼠标移出，用户信息框消失
    // $('.user').css("opacity","0")
    $('.user').slideUp()
})
$('.glyphicon-off').click(function(){
	$.ajax({
		url:'../php/logout.php',
		type:'GET',
		dataType: 'json',
		success:function(msg){
			if(msg == 1){
				// 点击注销跳转到登录页
				window.location.href="../login.html";
			}
		}
	})
})
var len = $('table tr').length;
for(var i = 1;i<len;i++){
    $('table tr:eq('+i+') td:first').text(i);
}
function check() {
    var name=$('.newname').val();
    var newname = $('.renewname').val();
    // console.log(123);
    // console.log($('.newname').val()+$('.renewname').val())
    // 确认密码输入框失去焦点之后，判断新密码和确认密码之间是否相等
    if (name !== newname) {
        window.alert('两次密码输入不一致，请重新输入！');
    }
}
$('.del').click(function(){
// 获取到当前行的id
var usrid = $(this).attr("data-id");
//console.log(usrid);
// 发送请求
	$.ajax({
		url: '../php/weatherstation_delData.php',
		type: 'POST',
		data:{
			usrid:usrid
		},
		dataType: 'json',
		success:function(msg){
			//console.log(msg);
			if(msg == "1"){
			window.alert("删除数据成功");
			location.reload();
			}else if(msg == "2"){
			window.alert("删除数据失败");
			}
		}
	})
})
$('.search').click(function(){
	var val = $('.search_name').val();
	//console.log(val);
	$.ajax({
	url: '../php/weatherstation_search_table.php',
	type:'POST',
	data:{
		txt:val
	},
	dataType: 'json',
	success:function(msg){
		console.log(msg);
		}
	})
})
$('.back').click(function(){
	// 点击跳转到主信息也main
	window.navigate("../button.html");
})

$('.device').click(function(){
window.location.href='../php/weatherstation_device.php';
})
// 点击执行删除操作
$('.del_device').click(function(){
// 获取当前行的id
var id = $(this).attr("data-deviceId");
// 发送请求
$.ajax({
url: '../php/delDevice.php',
type: 'POST',
data:{
deviceid:id
},
dataType: 'json',
success:function(msg){
// console.log(msg);
if(msg == "1"){
window.alert("删除数据成功");
location.reload();
}else if(msg == "2"){
window.alert("删除数据失败");
}
}
})
})
//////分页

//修改密码操作
$('.updatePWD').click(function(){
	console.log('修改密码');
//点击提交，获取输入的密码
var old = $('.old').val();
var new_one = $('.newname').val();
var new_two = $('.renewname').val();
$.ajax({
url: '../php/updatePWD.php',
type: 'POST',
data: {
old:old,
new_one:new_one,
new_two:new_two
},
dataType:'json',
success:function(msg){
 console.log(msg);
if(msg == 1){
window.alert('修改密码成功！');
window.location.href="../login.html";
}else{
window.alert('修改密码失败！');
}
}
})
})
//恢复密码操作
$('.backup').click(function(){
$.ajax({
url: '../php/backup.php',
type: 'POST',
dataType:'json',
success:function(msg){
// conosle.log(msg);
if(msg == '1'){
window.alert('初始化密码成功！');
window.location.href="../login.html";
}else{
window.alert('初始化密码失败！');
}
}
})
})
// 页面DOM数结构加载完成之后执行的事件

document.addEventListener('DOMContentLoaded',function(){
      $.ajax({
		  url: '../php/device_count.php',
		  type: 'POST',
		  dataType: 'json',
		  success:function(msg){

var option = {
	currentPage: 1,
	totalPages: 1,
	size:"normal",
	bootstrapMajorVersion: 3,
	alignment:"right",
	numberOfPages:14,
	itemTexts: function (type, page, current) {
		switch (type) {
		case "first": return "首页";
		case "prev": return "上一页";
		case "next": return "下一页";
		case "last": return "末页";
		case "page": return page;
	}
},
onPageClicked: function (event, originalEvent, type, page) { //给每个页眉绑定一个事件，其实就是ajax请求
// 跳转到点击的页面

			window.location.href="../php/search_device.php?page="+page;
			window.localStorage.setItem('page',page);
}
};
			  option.totalPages = Math.ceil(msg/14);
			  if(option.totalPages == 0)
			  {
				  option.totalPages = 1;
			  }

			var current_page = window.localStorage.getItem('page');
			if( (current_page == null) || (current_page == ""))
			{
				current_page = 1;
			}
			if(current_page > option.totalPages)
			{
				current_page = 1;
			}

			  option.currentPage = current_page;
			  //console.log(current);
			 // option.currentPage = current;
			 //console.log(option.currentPage);
			$('#pageLimit').bootstrapPaginator(option);
		  }
	  })

});
var trigger = $('.hamburger'),
overlay = $('.overlay'),
isClosed = false;

trigger.click(function () {
hamburger_cross();
});

function hamburger_cross() {

if (isClosed == true) {
  overlay.hide();
  trigger.removeClass('is-open');
  trigger.addClass('is-closed');
  isClosed = false;
} else {
  overlay.show();
  trigger.removeClass('is-closed');
  trigger.addClass('is-open');
  isClosed = true;
}
}

$('[data-toggle="offcanvas"]').click(function () {
  $('#wrapper').toggleClass('toggled');
});

$(".weath").on("click","li",function(){
		// 获取点击内容
	var weath = $(this).attr('data-weath');
	document.cookie="usrid-temp="+weath;
	window.localStorage.setItem('page','1');
	window.location.href="../php/weatherstation_search_table.php?page=1";
});
// 点击执行断开操作
$('.break_a').click(function(){
	//console.log('123456');
	// 点击获取到当前行的状态码
	var status = $(this).attr("data-status");
	var usrid  = $(this).attr("data-usrid");
	// 发送请求
	if(status==0)
	{
		window.alert("设备已断开");
	}
	else
	{
		$.ajax({
		url: '../php/deal.php',
		type: 'POST',
		data:{
		status:status,
		usrid:usrid
		},
		dataType: 'json',
		success:function(msg){
			if(msg == -1)
			{
				window.alert("操作失败");
			}
			else{
				//window.location.href="../php/search_device.php?page=1";
				//window.location.reload();
			}
		}
		})
	}

});
// 点击执行连接操作
$('.break_b').click(function(){
	//console.log('123456');
	// 点击获取到当前行的状态码
	var status = $(this).attr("data-status");
	var usrid  = $(this).attr("data-usrid");
	if(status==1)
	{
		window.alert("设备已连接");
	}
	else
	{
		$.ajax({
		url: '../php/deal.php',
		type: 'POST',
		data:{
		status:status,
		usrid:usrid
		},
		dataType: 'json',
		success:function(msg){
			if(msg == -1)
			{
				window.alert("操作失败");
			}
			else{
				window.alert('设备连接成功')
				//window.location.href="../php/search_device.php?page=1";
				window.location.reload();
			}
		}
		})
	}
	// 发送请求
});


// 添加设备点击提交
$('.weatherSub').click(function () {
  // 获取当前行的id
  var weatherId = $('.weatherId').val()
  var weatherSele = $('.show-tick').val()

  // 发送请求
  $.ajax({
    url: '../php/weatherstation_addUser.php',
    type: 'POST',
    data:{
      usrid:weatherId,
      $deviceid:weatherSele
    },
    dataType: 'json',
    success:function(msg){
      if(msg == "1"){
        window.alert("设备已被添加，无须重复添加！");
        location.reload();
      }else if(msg == "2"){
        window.alert("添加成功！");
        location.reload();
      }
    }
  })
})
