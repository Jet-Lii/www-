<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>科瑞杰云平台</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/sidebar-menu.css">
    <link rel="stylesheet" type="text/css" href="./css/zxf_page.css"/>
  </head>
  <body>
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div style="text-align: center;" class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" style="color:#333" id="myModalLabel">添加设备</h4>
              </div>
              <!-- <div class="modal-body">在这里添加一些文本</div> -->
              <form>
                 <div style="text-align:center;margin-top: 23px;" class="form-group form_one">
                    <label for="exampleInputEmail1">ID</label>
                    <input style="width: 361px;" type="text" class="weatherId id" name="usrid" id="exampleInputEmail1" placeholder="">
                  </div>
                  <div style="text-align:center;" class="form-group">
                    <label for="exampleInputPassword1">类型</label>
                    <select style="width: 361px;" class="selectpicker show-tick" name="deviceid" id="exampleInputPassword1" ><!-- deviceid是设备类型 -->
          							<option value="1">气象站</option>
          							<option value="2">土壤</option>
          							<option value="3">水阀</option>
          					</select>
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default btn-close" data-dismiss="modal">关闭</button>
                  <button type="button" value="提交" id="button1" class="weatherSub sub btn btn-default">提交</button>
                </div>
              </form>
          </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

    <div class="warpBox">
      <!-- header -->
      <div class="header">
        <b>贵州农业本地配置系统</b>
        <div class="hRight">
          <img class="mainPng" src="./img/main.png" alt="">
          <span class="userName">admin</span>
          <img class="delPng" src="./img/del.png" alt="">
        </div>
      </div>
      <!-- 菜单 -->
      <aside class="main-sidebar">
        <section  class="sidebar">
          <!-- nav -->
          <div class="leftNav">
            <div class="headerLogo">
              <img src="./img/logo.png" alt="">
              <b>科瑞杰云平台</b>
            </div>
          </div>
        	<ul class="sidebar-menu">
            <li class="treeview active">
          		<a href="#">
          		  <i class="iconTu gujian"><img src="./img/tu1.png" alt=""></i><span>系统设置</span><i class="fa fa-angle-down pull-right"></i>
          		</a>
          		<ul class="treeview-menu">
          		  <li><a href="#"><i class="fa fa-circle"></i>设备管理</a></li>
                <li><a href="#"><i class="fa fa-circle"></i>中继配置</a></li>
                <li><a href="#"><i class="fa fa-circle"></i>查看设备</a></li>
                <li><a href="#"><i class="fa fa-circle"></i>系统设置</a></li>
          		</ul>
        	  </li>
        	  <li class="treeview">
          		<a href="#">
          		  <i class="iconTu gujian"><img src="./img/tu2.png" alt=""></i><span>系统管理</span><i class="fa fa-angle-down pull-right"></i>
          		</a>
          		<ul class="treeview-menu">
          		  <li><a href="#"><i class="fa fa-circle"></i>气象监测系统</a></li>
                <li><a href="#"><i class="fa fa-circle"></i>土壤监测系统</a></li>
                <li><a href="#"><i class="fa fa-circle"></i>水阀监测系统</a></li>
          		</ul>
        	  </li>
        	</ul>
        </section>
      </aside>
      <!-- countent -->
      <div class="countent">
        <!-- 系统设置 -->
        <!-- 设备管理列表 -->
        <div class="equipmentList">
          <div class="divActive">
            <p class="tabHeader">
              设备列表
              <span class="tianjia">
                <a href="#" class="dropdown-toggle" data-toggle="modal" data-target="#myModal">添加设备</a>
              </span>
            </p>
            <div class="table-a">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <tr style="background:#F5F6FA;height:44px;">
                    <th width="16.666667%">设备ID</th>
                    <th width="16.666667%">设备类型</th>
                    <th width="16.666667%">状态</th>
                    <th width="16.666667%">操作</th>
                  </tr>
                </thead>

                <?php
                  $link = mysql_connect('127.0.0.1', 'root', '123');
                  if (!$link) {
                  die('Not connected : ' . mysql_error());
                  }

                  // make foo the current db
                  $db_selected = mysql_select_db('mytest', $link);

                  $result = mysql_query("select * from device");

                ?>

                <tbody>
            		  <?php while($row = mysql_fetch_assoc($result)){ ?>
                      <tr>
            			      <td><?php echo $row['usrid'] ?></td>
                        <td>
                          <?php
                            if ($row['deviceid']==1) {
                              echo "气象站";
                            } else if ($row['deviceid']==2) {
                              echo "土壤";
                            } else {
                              echo "水阀";
                            }
                          ?>
                        </td>
                        <td><?php echo $row['status']==0?'断开':'连接' ?></td>
                        <td>
                          <button type="button" class="btnDelete del" data-deviceid=<?php echo $row['deviceid'] ?> data-id=<?php echo $row['usrid'] ?>>删除</button>
                        </td>
                      </tr>
            		 <?php }?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- 中继 -->
        <div class="relay">
          <div class="divActive">
            <p class="tabHeader">中继配置</p>
            <form class="" action="index.html" method="post">
              <?php
                $link = mysql_connect('127.0.0.1', 'root', '123');
                if (!$link) {
                die('Not connected : ' . mysql_error());
                }

                // make foo the current db
                $db_selected = mysql_select_db('mytest', $link);

                $result = mysql_query("select * from relay");

              ?>
              <ul class="zjList">
                <?php while($row = mysql_fetch_assoc($result)){ ?>
                  <li>
                    <label for=""><?php echo $row['num'] ?>级中继</label>
                    设备ID
                    <input type="text" name="" value="<?php echo $row['usrid'] ?>">
                    信道
                    <input type="text" name="" value="<?php echo $row['ch'] ?>">
                    操作
                    <span class="kaiguan"><?php echo $row['status'] ?></span>
                    <select class="baud">
                        <option value="1">开</option>
                        <option value="0">关</option>
                    </select>
                  </li>
               <?php }?>
              </ul>
              <p class="footerBoo">
                <button class="zjBC" type="button" name="button">保存</button>
              </p>
            </form>
          </div>
        </div>
        <!-- 查看设备 -->
        <div class="check divActive">
          <form class="" action="index.html" method="post">
            <?php
              $link = mysql_connect('127.0.0.1', 'root', '123');
              if (!$link) {
              die('Not connected : ' . mysql_error());
              }

              // make foo the current db
              $db_selected = mysql_select_db('mytest', $link);

              $sql = mysql_query("select * from network");

            ?>
            <ul class="checkList">

              <?php while($row = mysql_fetch_assoc($sql)){ ?>
                <li>
                  <label for="">产品名称</label><input type="text" name="IdNum" value="KRJ-LW001">
                </li>
                <li>
                  <label for="">MAC地址</label><input type="text" name="Gap" value="<?php echo $row['mac'] ?>">
                </li>
                <li>
                  <label for="">固件版本</label><input type="text" name="ReportTime" value="1.30.13">
                </li>
                <li>
                  <label for="">WAN口IP</label><input type="text" name="PollingTime" value="<?php echo $row['wanip'] ?>">
                </li>
                <li>
                  <label for="">LAN口IP</label><input type="text" name="ModbusTime" value="192.168.2.1">
                </li>
				         <li>
                  <label for="">子网掩码</label><input type="text" name="ModbusTime" value="255.255.255.255">
                </li>
				        <li>
                  <label for="">DNS地址</label><input type="text" name="ModbusTime" value="<?php echo $row['dns'] ?>">
                </li>
				        <li>
                  <label for="">DHCP</label><input type="text" name="ModbusTime" value="开启">
                </li>
				        <li>
                  <label for="">配置保护</label><input type="text" name="ModbusTime" value="开启">
                </li>
				        <li>
                  <label for="">系统时间</label><input type="text" name="ModbusTime" value="<?php echo $row['time'] ?>">
                </li>
				        <li>
                  <label for="">累计运行时间</label><input type="text" name="ModbusTime" value="<?php echo $row['time2'] ?>">
                </li>
				        <li>
                  <label for="">时区</label><input type="text" name="ModbusTime" value="<?php echo $row['zone'] ?>">
                </li>
				        <li>
                  <label for="">4G</label><input type="text" name="ModbusTime" value="<?php echo $row['4gstatus'] ?>">
                </li>
				        <li>
                  <label for="">4G IP</label><input type="text" name="ModbusTime" value="<?php echo $row['4gip'] ?>">
                </li>
				        <li>
                  <label for="">WIFI 状态</label><input type="text" name="ModbusTime" value="开启">
                </li>
              <?php }?>
            </ul>
          </form>
        </div>
        <!-- 系统设置 -->
        <div class="system">
          <div class="divActive">
            <!-- <p class="tabHeader">系统设置</p> -->
            <form>
                <div class="article">
                  <div class="dashedDiv">
                    <p id="index1">用户验证</p>
                    <ul>
                      <li>
                        <label for="">用户名</label><input type="text" name="" value="">
                      </li>
                      <li class="bottomMargin">
                        <label for="">密码</label><input type="text" name="" value="">
                      </li>
                    </ul>
                  </div>
                  <div class="dashedDiv">
                    <p id="index2">基本设置</p>
                    <ul class="basic">
                        <li>
                          <label for="">主机名称</label><input type="text" class="IdNum" name="IdNum" value="">
                        </li>
                    </ul>
                  </div>
                  <div class="dashedDiv">
                    <p id="index5">无线网络连接</p>
                    <ul>
                      <li>
                        <label for="">AP SSID</label><input type="text" name="" value="">
                      </li>
                      <li>
                        <label for="">AP passed</label><input type="text" name="" value="">
                      </li>
                    </ul>
                  </div>
                  <div class="dashedDiv">
                    <p id="3">网络设置</p>
                    <ul>
                      <li>
                        <label for="">4G</label>
                        <select>
                            <option>open</option>
                            <option>close</option>
                            <option>auto</option>
                        </select>
                      </li>
                      <li>
                        <label for="">4G状态</label>
                        <select>
                            <option>online</option>
                            <option>offline</option>
                        </select>
                      </li>
                      <li>
                        <label for="">4G IP</label><input type="text" name="" value="">
                      </li>
                      <li>
                        <label for="">wan2</label>
                        <select>
                            <option>open</option>
                            <option>close</option>
                            <option>auto</option>
                        </select>
                      </li>
                      <li>
                        <label for="">wan2状态</label>
                        <select>
                            <option>online</option>
                            <option>offline</option>
                        </select>
                      </li>
                      <li>
                        <label for="">4G IP</label><input type="text" name="" value="">
                      </li>
                    </ul>
                  </div>
                  <p class="footerBoo">
                    <button class="wlBc basicBaocun" type="button" name="button">保存</button>
                    <!-- <button class="basicChongzhi" type="button" name="button">重置</button> -->
                  </p>
                </div>
            </form>
          </div>
        </div>
        <!-- 系统管理 -->
        <!-- 气象监测系统 -->
        <div class="weatherMonitor">
          <div class="divActive">
            <div class="MonitorTab tabActive">
              <img src="./img/qx-pitch.png" alt="">
              <p>气象监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/tr.png" alt="">
              <p>土壤监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/sf.png" alt="">
              <p>水阀监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/add.png" alt="">
              <p>。。。</p>
            </div>
          </div>
          <div class="divActive">
            <div class="tabTop">
              <span>气象监测数据</span>
              <p>
                <label for="">设备ID</label>
                <select class="weatherSelect" name="">
                <?php
          			   $link = mysql_connect('127.0.0.1', 'root', '123');
                      if (!$link) {
                      die('Not connected : ' . mysql_error());
                      }
                      // make foo the current db
                      $db_selected = mysql_select_db('mytest', $link);
                      if (!$db_selected) {
                      die ('Can\'t use foo : ' . mysql_error());
                      }
          				 $result = mysql_query("select * from device where deviceid=1");
                    while($row = mysql_fetch_array($result))
                    {
                      echo "<option value='$row[usrid]'>$row[usrid]</option>";
                    }
                ?>
                </select>
              </p>
            </div>
            <div class="table-a">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <tr style="background:#F5F6FA;height:44px;">
                    <th>序号</th>
                    <th>设备ID</th>
                    <th>设备类型</th>
                    <th>风向</th>
                    <th>风速</th>
                    <th>温度</th>
                    <th>湿度</th>
                    <th>压力</th>
                    <th>雨量</th>
                    <th>光照</th>
                    <th>日辐射量</th>
                    <th>辐射功率</th>
                    <th>uv辐射</th>
                    <th>时间</th>
                  </tr>
                </thead>
                <tbody class="weatherTbody">
                  <?php include "./php/weatherstation_table.php" ?>
                </tbody>
              </table>
              <p class="qxPage" style="display:none">
                <?php include "./php/weatherstation_count.php" ?>
              </p>
            </div>
            <!--翻页-->
            <div class="zxf_pagediv QXzxf_pagediv"></div>
          </div>
        </div>
        <!-- 土壤监测系统 -->
        <div class="soilMonitor">
          <div class="divActive">
            <div class="MonitorTab">
              <img src="./img/qx.png" alt="">
              <p>气象监测系统</p>
            </div>
            <div class="MonitorTab tabActive">
              <img src="./img/tr-pitch.png" alt="">
              <p>土壤监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/sf.png" alt="">
              <p>水阀监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/add.png" alt="">
              <p>。。。</p>
            </div>
          </div>
          <div class="divActive">
            <div class="tabTop">
              <span>土壤监测数据</span>
              <p>
                <label for="">设备ID</label>
                <select class="soilSelect" name="">
                  <?php
            			   $link = mysql_connect('127.0.0.1', 'root', '123');
                        if (!$link) {
                        die('Not connected : ' . mysql_error());
                        }
                        // make foo the current db
                        $db_selected = mysql_select_db('mytest', $link);
                        if (!$db_selected) {
                        die ('Can\'t use foo : ' . mysql_error());
                        }
            				 $result = mysql_query("select * from device where deviceid=2");
                      while($row = mysql_fetch_array($result))
                      {
                        echo "<option value='$row[usrid]'>$row[usrid]</option>";
                      }
                  ?>
                </select>
              </p>
            </div>
            <div class="table-a">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <tr style="background:#F5F6FA;height:44px;">
                    <th>序号</th>
                    <th>用户ID</th>
                    <th>设备ID</th>
                    <th>湿度</th>
                    <th>温度</th>
                    <th>电导率</th>
                    <th>含盐量</th>
                    <th>总溶解固体</th>
                    <th>介电常数 </th>
                    <th>时间</th>
                  </tr>
                </thead>
                <tbody class="soilTbody">
                  <?php include "./php/soilstation_search_table.php" ?>
                </tbody>
              </table>
              <p class="trPage" style="display:none">
                <?php include "./php/soilstation_count.php" ?>
              </p>
            </div>
            <!--翻页-->
            <div class="zxf_pagediv TRzxf_pagediv"></div>
          </div>
        </div>
        <!-- 水阀监测系统 -->
        <div class="waterMonitor">
          <div class="divActive">
            <div class="MonitorTab">
              <img src="./img/qx.png" alt="">
              <p>气象监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/tr.png" alt="">
              <p>土壤监测系统</p>
            </div>
            <div class="MonitorTab tabActive">
              <img src="./img/sf-pitch.png" alt="">
              <p>水阀监测系统</p>
            </div>
            <div class="MonitorTab">
              <img src="./img/add.png" alt="">
              <p>。。。</p>
            </div>
          </div>
          <div class="divActive">
            <div class="tabTop">
              <span>水阀监测数据</span>
              <p>
                <label for="">设备ID</label>
                <select class="waterSelect" name="">
                  <?php
            			   $link = mysql_connect('127.0.0.1', 'root', '123');
                        if (!$link) {
                        die('Not connected : ' . mysql_error());
                        }
                        // make foo the current db
                        $db_selected = mysql_select_db('mytest', $link);
                        if (!$db_selected) {
                        die ('Can\'t use foo : ' . mysql_error());
                        }
            				 $result = mysql_query("select * from device where deviceid=3");
                      while($row = mysql_fetch_array($result))
                      {
                        echo "<option value='$row[usrid]'>$row[usrid]</option>";
                      }
                  ?>
                </select>
              </p>
            </div>
            <div class="table-a">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <thead>
                  <tr style="background:#F5F6FA;height:44px;">
                    <th>序号</th>
                    <th>用户ID</th>
                    <th>设备ID</th>
                    <th>状态</th>
                    <th>流量</th>
                    <th>时间</th>
                  </tr>
                </thead>
                <tbody class="waterTbody">
                  <?php include "./php/waterstation_search_table.php" ?>
                </tbody>
              </table>
              <p class="sfPage" style="display:none">
                <?php include "./php/waterstation_count.php" ?>
              </p>
            </div>
            <!--翻页-->
            <div class="zxf_pagediv SFzxf_pagediv"></div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <!-- <div class="footer">
        <p>&copy;2017-2019 北京科瑞杰科技发展有限公司 版权所有</p>
      </div> -->
    </div>
  </body>
  <script type="text/javascript" src="./js/jquery.min.js"></script>
  <script src="http://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="./js/bootstrap-paginator.js"></script>
  <script type="text/javascript" src="./js/zxf_page.js"></script>
  <script type="text/javascript" src="./js/sidebar-menu.js"></script>
  <script>
    $.sidebarMenu($('.sidebar-menu'))
  </script>
</html>
