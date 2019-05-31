
  var zjList = $('.zjList li .kaiguan');
  // console.log(zjList);
  for (var i = 0; i < zjList.length; i++) {
    // console.log(zjList[i].innerHTML);
    $('.zjList li .baud')[i].value = zjList[i].innerHTML
  }


// 控制输入框两数字之间有空格
  $('.cmd').on('keyup mouseout input',function(){
   var $this = $(this),
    v = $this.val();
   /\S{3}/.test(v) && $this.val(v.replace(/\s/g,'').replace(/(.{2})/g, "$1 "));
  });

  $('.delPng').click(function () {
    location.replace('http://192.168.2.1:88/login.html');
  })

  // 气象select
  $('.weatherSelect').change(function(){
    var usrid= $(this).val();
    // console.log(data);
    $.ajax({
      url: './php/weatherstation-select.php',
      type: 'POST',
      data:{
        usrid:usrid
      },
      dataType: 'json',
      success:function(msg){
        var str = "";
        var json = eval(msg);
        // console.log(json);
        $.each(json, function (index, item) {  
                //循环获取数据    
                str += '<tr>' +
                    '<td>' + json[index].num + '</td>' +  
                    '<td>' + json[index].usrid + '</td>' +  
                    '<td>' + json[index].deviceid + '</td>' + 
                    '<td>' + json[index].winddirection + '</td>' +
                    '<td>' + json[index].windspeed + '</td>' +
                    '<td>' + json[index].temperature + '</td>' +
                    '<td>' + json[index].humidity + '</td>' +
                    '<td>' + json[index].pressure + '</td>' +  
                    '<td>' + json[index].rainfall + '</td>' +  
                    '<td>' + json[index].lux + '</td>' + 
                    '<td>' + json[index].daily_radiation + '</td>' +
                    '<td>' + json[index].radiation_power + '</td>' +
                    '<td>' + json[index].uv + '</td>' +
                    '<td>' + json[index].time + '</td>' +
                    '</tr>';   
            }); 
          $(".weatherTbody").html(str);
      }
    })
  });

  // 土壤select
  $('.soilSelect').change(function(){
    var usrid= $(this).val();
    // console.log(data);
    $.ajax({
      url: './php/soilstation-select.php',
      type: 'POST',
      data:{
        usrid:usrid
      },
      dataType: 'json',
      success:function(msg){
        var str = "";
        var json = eval(msg);
        // console.log(json);
        $.each(json, function (index, item) {  
                //循环获取数据    
                str += '<tr>' +
                    '<td>' + json[index].num + '</td>' +  
                    '<td>' + json[index].usrid + '</td>' +  
                    '<td>' + json[index].deviceid + '</td>' + 
                    '<td>' + json[index].humidity + '</td>' +
                    '<td>' + json[index].temperature + '</td>' +
                    '<td>' + json[index].conductivity + '</td>' +
                    '<td>' + json[index].salinity + '</td>' +
                    '<td>' + json[index].tds + '</td>' +  
                    '<td>' + json[index].epsilon + '</td>' +  
                    '<td>' + json[index].time + '</td>' + 
                    '</tr>';   
            }); 
          $(".soilTbody").html(str);
      }
    })
  });

  // 水阀select
  $('.waterSelect').change(function(){
    var usrid= $(this).val();
    // console.log(data);
    $.ajax({
      url: './php/waterstation-select.php',
      type: 'POST',
      data:{
        usrid:usrid
      },
      dataType: 'json',
      success:function(msg){
        var str = "";
        var json = eval(msg);
        // console.log(json);
        $.each(json, function (index, item) {  
                //循环获取数据    
                str += '<tr>' +
                    '<td>' + json[index].num + '</td>' +  
                    '<td>' + json[index].usrid + '</td>' +  
                    '<td>' + json[index].deviceid + '</td>' + 
                    '<td>' + json[index].status + '</td>' +
                    '<td>' + json[index].flow + '</td>' +
                    '<td>' + json[index].time + '</td>' +
                    '</tr>';   
            }); 
          $(".waterTbody").html(str);
      }
    })
  });

  //气象分页
  var qxPage = $('.qxPage').text();
  var qx = Math.round(qxPage/5)
  // console.log(qx);
  $(".QXzxf_pagediv").createPage({
    pageNum: qx,
    current: 1,
    backfun: function(e) {
      var page = e.current  //当前点击的页
      $.ajax({
        url: './php/weatherstation-page.php',
        type: 'POST',
        data:{
          page:page
        },
        dataType: 'json',
        success:function(msg){
          var str = "";
          var json = eval(msg);
          // console.log(json);
          $.each(json, function (index, item) {  
                  //循环获取数据    
                  str += '<tr>' +
                      '<td>' + json[index].num + '</td>' +  
                      '<td>' + json[index].usrid + '</td>' +  
                      '<td>' + json[index].deviceid + '</td>' + 
                      '<td>' + json[index].winddirection + '</td>' +
                      '<td>' + json[index].windspeed + '</td>' +
                      '<td>' + json[index].temperature + '</td>' +
                      '<td>' + json[index].humidity + '</td>' +
                      '<td>' + json[index].pressure + '</td>' +  
                      '<td>' + json[index].rainfall + '</td>' +  
                      '<td>' + json[index].lux + '</td>' + 
                      '<td>' + json[index].daily_radiation + '</td>' +
                      '<td>' + json[index].radiation_power + '</td>' +
                      '<td>' + json[index].uv + '</td>' +
                      '<td>' + json[index].time + '</td>' +
                      '</tr>';   
              }); 
            $(".weatherTbody").html(str);
        }
      })
    }
  });
  //土壤分页
  var trPage = $('.trPage').text();
  var tr = Math.round(trPage/5)
  // console.log(tr);
  $(".TRzxf_pagediv").createPage({
    pageNum: tr,
    current: 1,
    backfun: function(e) {
      var page = e.current  //当前点击的页
      $.ajax({
        url: './php/soilstation-page.php',
        type: 'POST',
        data:{
          page:page
        },
        dataType: 'json',
        success:function(msg){
          var str = "";
          var json = eval(msg);
          // console.log(json);
          $.each(json, function (index, item) {  
                  //循环获取数据    
                  str += '<tr>' +
                      '<td>' + json[index].num + '</td>' +  
                      '<td>' + json[index].usrid + '</td>' +  
                      '<td>' + json[index].deviceid + '</td>' + 
                      '<td>' + json[index].humidity + '</td>' +
                      '<td>' + json[index].temperature + '</td>' +
                      '<td>' + json[index].conductivity + '</td>' +
                      '<td>' + json[index].salinity + '</td>' +
                      '<td>' + json[index].tds + '</td>' +  
                      '<td>' + json[index].epsilon + '</td>' +  
                      '<td>' + json[index].time + '</td>' + 
                      '</tr>';  
              }); 
            $(".soilTbody").html(str);
        }
      })
    }
  });

  //水阀分页
  var sfPage = $('.sfPage').text();
  var sf = Math.round(sfPage/5)
  // console.log(sf);
  $(".SFzxf_pagediv").createPage({
    pageNum: sf,
    current: 1,
    backfun: function(e) {
      var page = e.current  //当前点击的页
      $.ajax({
        url: './php/waterstation-page.php',
        type: 'POST',
        data:{
          page:page
        },
        dataType: 'json',
        success:function(msg){
          var str = "";
          var json = eval(msg);
          // console.log(json);
          $.each(json, function (index, item) {  
                  //循环获取数据    
                  str += '<tr>' +
                      '<td>' + json[index].num + '</td>' +  
                      '<td>' + json[index].usrid + '</td>' +  
                      '<td>' + json[index].deviceid + '</td>' + 
                      '<td>' + json[index].status + '</td>' +
                      '<td>' + json[index].flow + '</td>' +
                      '<td>' + json[index].time + '</td>' +
                      '</tr>';   
              }); 
            $(".waterTbody").html(str);
        }
      })
    }
  });

// 基础配置保存按钮点击
$('.basicBaocun').click(function () {
  // 获取到当前行的id
  var Mode = $('.Mode').val();
  var IdNum = $('.IdNum').val();
  var Gap = $('.Gap').val();
  var ReportTime = $('.ReportTime').val();
  var PollingTime = $('.PollingTime').val();
  var ModbusTime = $('.ModbusTime').val();
  // 发送请求
    $.ajax({
      url: './php/xiugaiBaseConf.php',
      type: 'POST',
      data:{
        Mode:Mode,
        IdNum:IdNum,
        Gap:Gap,
        ReportTime:ReportTime,
        PollingTime:PollingTime,
        ModbusTime:ModbusTime
      },
      dataType: 'json',
      success:function(msg){
        //console.log(msg);
        if(msg == "1"){
        window.alert("修改成功");
        location.reload();
        }else if(msg == "2"){
        window.alert("修改失败");
        }
      }
    })
})


// 设备列表串口配置保存点击
$('.chuankouBC').click(function () {
  var baud = $('.baud').val();
  var DataBit = $('.DataBit').val();
  var CheckBit = $('.CheckBit').val();
  var StopBit = $('.StopBit').val();
  var usrid = $('.sheibeiID').text();
  // 发送请求
    $.ajax({
      url: './php/xiugaiDevice.php',
      type: 'POST',
      data:{
        baud:baud,
        DataBit:DataBit,
        CheckBit:CheckBit,
        StopBit:StopBit,
        usrid:usrid
      },
      dataType: 'json',
      success:function(msg){
        //console.log(msg);
        if(msg == "1"){
        window.alert("修改成功");
        // location.reload();
        }else if(msg == "2"){
        window.alert("修改失败");
        }
      }
    })
})

$('.zjBC').click(function () {

})

// 设备列表modbus模式命令保存点击
$('.modbusBC').click(function () {
  var cmd = $('.cmd').val();
  var usrid = $('.sheibeiID').text();
  // 发送请求
    $.ajax({
      url: './php/insertModbus.php',
      type: 'POST',
      data:{
        cmd:cmd,
        usrid:usrid
      },
      dataType: 'json',
      success:function(msg){
        // console.log(msg);
        if(msg == "1"){
          window.alert("添加成功");
          // location.reload();
        } else if(msg == "2"){
          window.alert("添加失败");
        } else if (msg == "3") {
          window.alert("修改成功");
        } else if (msg == "4") {
          window.alert("修改失败");
        }
      }
    })
})


// 添加设备点击提交
$('.weatherSub').click(function () {
  // 获取当前行的id
  var weatherId =   $('.weatherId').val()
  var weatherSele = $('.show-tick').val()

  // 发送请求
  $.ajax({
    url: '../php/station_addUser.php',
    type: 'POST',
    data:{
      usrid:weatherId,
      deviceid:weatherSele,
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


// 设备列表删除设备
$('.del').click(function(){
  // 获取到当前行的id
  var usrid = $(this).attr("data-id");
  var deviceid = $(this).attr("data-deviceid");
  //console.log(usrid);
  // 发送请求
    $.ajax({
      url: '../php/shebeiList_delData.php',
      type: 'POST',
      data:{
        usrid:usrid,
        deviceid:deviceid
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


// 中继保存
$('.zjBC').click(function () {
  // 发送请求
    $.ajax({
      url: '../php/zj-onfiguration.php',
      type: 'POST',
      data:{

      },
      dataType: 'json',
      success:function(msg){
        //console.log(msg);
        if(msg == "1"){
        window.alert("保存数据成功");
        location.reload();
        }else if(msg == "2"){
        window.alert("保存数据失败");
        }
      }
    })
})

// 系统设置保存
$('.wlBc').click(function () {
  // 发送请求
    $.ajax({
      url: '../php/xt-setting.php',
      type: 'POST',
      data:{

      },
      dataType: 'json',
      success:function(msg){
        //console.log(msg);
        if(msg == "1"){
        window.alert("保存数据成功");
        location.reload();
        }else if(msg == "2"){
        window.alert("保存数据失败");
        }
      }
    })
})


$.sidebarMenu = function(menu) {
  var animationSpeed = 300;

  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    // console.log($this);
   // console.log($('.divActive input').val());
    // $(this).css('color','#fff').parent().siblings().find('a').css('color','#8aa4af')
    var mmsseg = $this.text();
    console.log(mmsseg);
    // tab切换
    if (mmsseg == '设备管理') {
      $('.equipmentList').css('display','block').siblings('div').css('display','none');
    } else if (mmsseg == '气象监测系统') {
      $('.weatherMonitor').css('display','block').siblings('div').css('display','none');
    } else if (mmsseg == '土壤监测系统') {
      $('.soilMonitor').css('display','block').siblings('div').css('display','none');
    } else if (mmsseg == '水阀监测系统') {
      $('.waterMonitor').css('display','block').siblings('div').css('display','none');
    } else if (mmsseg == '中继配置') {
      $('.relay').css('display','block').siblings('div').css('display','none');
    } else if (mmsseg == '查看设备') {
      $('.check').css('display','block').siblings('div').css('display','none');
    } else if (mmsseg == '系统设置') {
      $('.system').css('display','block').siblings('div').css('display','none');
    }

    var checkElement = $this.next();

    if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }

    //If the menu is not visible
    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      //Get the parent menu
      var parent = $this.parents('ul').first();
      //Close all open menus within the parent
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      //Remove the menu-open class from the parent
      ul.removeClass('menu-open');
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown(animationSpeed, function() {
        //Add the class active to the parent li
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }
  });
}
