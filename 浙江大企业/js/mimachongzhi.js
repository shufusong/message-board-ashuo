window.onload=function(){
    var input1=document.getElementById("input1");
    var input2=document.getElementById("input2");
    var btn1=document.getElementById("btn1");

    btn1.onclick=function(e){
        if(input1.value==""||input2.value==""){
            alert("请填写密码")
            e.preventDefault();
        }else if(input1.value!==input2.value){
            alert("两次密码不一致");
            e.preventDefault();
            input1.value="";
            input2.value="";
        }else{
            alert("您将密码重置为:"+input2.value)
            location.href="登陆界面.html";
        }
    }
}