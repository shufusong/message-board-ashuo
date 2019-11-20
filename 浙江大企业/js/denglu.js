window.onload=function(){
    var input1=document.getElementById("input1")
    var input2=document.getElementById("input2")
    var btn=document.getElementById("btn");
    var span2=document.getElementById("span2")

    btn.onclick=function(e){
        if(input1.value==""||input2.value==""){
            alert("账号或密码不能为空")
            e.preventDefault();
        }else{
            location.href="首页.html"
            input1.value="";
            input2.value="";
        }
    }
    span2.onclick=function(){
        location.href="密码重置.html"
    }
}