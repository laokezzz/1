<?php
	//获取GET参数city
    $city= $_GET ["city"];    //$city=（1）["city"];      
    $data = array(
        0 => array(
            "name" => "北京",
            //0-20之间的随机数
            "min" => rand(0,20)."℃",    // "min" => （2）."℃",
            //20-40之间的随机数
            "max" => rand(20,40)."℃",    // "max" => （2）."℃",
            "weather" => "多云转阴"
        ),
        1 => array(
            "name" => "上海",
            "min" => rand(0,20)."℃",
            "max" => rand(20,40)."℃",
            "weather" => "晴"
        ),
        2 => array(
            "name" => "广州",
            "min" => rand(0,20)."℃",
            "max" => rand(20,40)."℃",
            "weather" => "小雨转晴"
        ),
        3 => array(
            "name" => "深圳",
            "min" => rand(0,20)."℃",
            "max" => rand(20,40)."℃",
            "weather" => "晴"
        ),
        4 => array(
            "name" => "武汉",
            "min" => rand(0,20)."℃",
            "max" => rand(20,40)."℃",
            "weather" => "晴"
        )
    );
	
    if($city == "北京"){
    	//返回json格式数据
		echo json_encode($data[0]);    //echo（3）($data[0]);
    }else if($city == "上海"){
		echo json_encode($data[1]);
    }else if($city == "广州"){
		echo json_encode($data[2]);
    }else if($city == "深圳"){
		echo json_encode($data[3]);
    }else{
    	echo json_encode($data[4]);
	}
?>