function goPage(pno, psize) {
				var message = document.getElementById("message");
				var lis = message.querySelectorAll("li");
				var num = lis.length;
				var totalPage = 0; //总页数
				var pageSize = psize; //每页显示行数
				var str = "<div id='yeshu'>";
				//总共分几页
				if (num / pageSize > parseInt(num / pageSize)) {
					totalPage = parseInt(num / pageSize) + 1;
				} else {
					totalPage = parseInt(num / pageSize);
				}
				var currentPage = pno; //当前页数
				var startRow = (currentPage - 1) * pageSize + 1; //开始显示的行 31
				var endRow = currentPage * pageSize; //结束显示的行  40
				endRow = (endRow > num) ? num : endRow; //40
				//遍历显示数据实现分页
				for (var i = 1; i < (num + 1); i++) {
					var irow = lis[i - 1];
					if (i >= startRow && i <= endRow) {
						irow.style.display = "block";
					} else {
						irow.style.display = "none";
					}
				}
				var tempStr = "共" + num + "条记录 分" + totalPage + "页 当前第" + currentPage + "页";
				if (currentPage > 1) {
					tempStr += "<a href=\"#\" onClick=\"goPage(" + (1) + "," + psize + ")\">首页</a>";
					tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize + ")\"><上一页</a>"
				} else {
					tempStr += "首页";
					tempStr += "<上一页";
				}
				if (currentPage < totalPage) {
					tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize + ")\">下一页></a>";
					tempStr += "<a href=\"#\" onClick=\"goPage(" + (totalPage) + "," + psize + ")\">尾页</a>";
				} else {
					tempStr += "下一页>";
					tempStr += "尾页";
				}
				if (totalPage > 5 && currentPage <= 3) {
					currentPage = 3;
				}
				if (totalPage - currentPage < 2) {

					currentPage = totalPage - 2;
				}
				for (var k = currentPage - 2; k <= currentPage + 2; k++) {

					if (k <= 0) {
						continue;
					}
					str += "<input type='button' value=" + k + ">";
				}
				if (totalPage <= 5) {
					str = "";
					for (var k = 1; k <= totalPage; k++) {
						str += "<input type='button' value=" + k + ">";
					}
				}
				str += "</div>";
				document.getElementById("barcon").innerHTML = tempStr +
					"<input autocomplete=off id=t1 type=text>页<input type=button id=bt2 value=点击跳转>" + str;
				var bt2 = document.getElementById("bt2");
				var yeshu = document.getElementById("yeshu");
				bt2.onclick = function() {
					if (document.getElementById("t1").value > totalPage) {
						alert("请输入正确页数");
					} else {
						goPage(document.getElementById("t1").value, psize);
					}

				}
// 				var bts = document.getElementById("yeshu").getElementsByTagName("input");
// 				for (var i = 0; i < bts.length; i++) {
// 					bts[i].onclick = function() {
// 						var b = Number(this.value);
// 						goPage(b, psize);
// 					}
// 				}
// 
			}