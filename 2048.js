// 1.初始状态或者重启状态，随机选两个格子，格子数里面数字为2/4

// 页面加载时
window.onload = function () {
	// var temp = tempGrid(2);
	giveNumber(2, 2);
	newGameBotton();
	getReady();
	backgroundColorToNumber();
	scaleWidth();
	touch();
}


// 宽高比例1:!
function scaleWidth() {
	// 获取格子的宽度
	var grid = document.getElementsByClassName("grid"),
		width = window.getComputedStyle(grid[0], null)["width"];
		// width = grid[0].style.width;
	//给格子高度赋值
	for (var i = 0; i < 16; i++) {
		grid[i].style.height = width;
	}	
}

// 创建一个临时的格子
function createTempGrid(num) {
		var temp = document.createElement("div");
		temp.innerHTML = "<span>" + num + "</span>";	
		temp.style.position = "absolute";
		temp.style.backgroundColor = "#fff8dc";
		temp.style.width = "87.5px";
		temp.style.height = "87.5px";
		temp.style.lineHeight = "87.5px";
		temp.style.fontWeight = "bold";
		temp.style.fontSize = "48px";
		temp.style.borderRadius = "5px";
		temp.style.top = "0";
		temp.style.left = "0";
		// temp.style.display = "none";
		// console.log(temp);
		temp.classList.add("temp-grid");
		return temp;
	};

// 删除临时格子
function deleteTempGrid() {
	var temp = document.getElementsByClassName("temp-grid");
	for (var i = 0; i < temp.length; i ++) {
		temp[i].remove();
	}
	var newGrid = document.getElementsByClassName("new-grid");
		// console.log(newGrid);
	if (newGrid) {
		// console.log(newGrid.length);
		for (var i = 0; i < newGrid.length; i ++) {
			newGrid[i].classList.remove("new-grid");
			// console.log(newGrid.length);
		}
	}
}

// giveNumber：随机在一个生成gridNum个空格子，每个空格子里面放一个数字num
function giveNumber(num, gridNum) {
	// console.log("give!!!!");
	var x, y, newGrid, tempGrid;
	
	tempGrid = createTempGrid(2);
	
	while (true) {
		// if (tempGrid && tempGrid.parentElement) {
		// 	tempGrid.parentElement.removeChild(tempGrid);
		// }
		x = Math.floor(Math.random() * 4) + 1;
		y = Math.floor(Math.random() * 4) + 1;
		newGrid = document.getElementsByClassName("grid-" + x + y)[0];
		
		// newGrid.style.backgroundColor = "#b0c4de";
		if (newGrid.innerHTML == "<span></span>") {
			newGrid.classList.add("new-grid");
			newGrid.innerHTML = "<span>" + num + "</span>";
			gridNum -= 1;
			newGrid.appendChild(tempGrid);
			break;
		}
	}
	// return blankGrid;
}

// giveNumber：随机在一个生成gridNum个空格子，每个空格子里面放一个数字num
function missgiveNumber(num, gridNum) {
	var x, y, newGrid, tempGrid;
	function createTempGrid() {
		var temp = document.createElement("div");  // 生成一个临时的格子
		temp.innerHTML = "<span>" + num + "</span>";
		temp.classList.add("grid");
		temp.style.position = "absolute";
		temp.style.backgroundColor = "#fff8dc";
		temp.classList.add("temp-grid");
		return temp;
	};
	// tempGrid = createTempGrid();
	// if (tempGrid.parentElement) {
	// 	tempGrid.parentElement.removeChild(tempGrid);
	// }
	while (gridNum) {
		x = Math.floor(Math.random() * 4) + 1,
		y = Math.floor(Math.random() * 4) + 1;
		newGrid = document.getElementsByClassName("grid-" + x + y)[0];
		if (newGrid.innerHTML == "<span></span>") {
			newGrid.innerHTML = "<span>" + num + "</span>";
			// newGrid.appendChild(tempGrid);
			gridNum -= 1;
		}
	}

	// return blankGrid;
}

// clearGrid：清空格子及分数归零
function clearGrid() {
	var grid = document.getElementsByClassName("grid"),
		score = document.getElementsByClassName("score")[0].children[2];
	score.innerText = "0";
	for (var i = 0; i < grid.length; i ++) {
		grid[i].innerHTML = "<span></span>";
		// grid[i].style.backgroundColor = "#b0c4de";
	}
	backgroundColorToNumber();
}

// 重新开始一次游戏
function newGame() {
	clearGrid();
	giveNumber(2,2);
	backgroundColorToNumber();
	return true;
}
// 触发新一次游戏的按钮
function newGameBotton() {
	var newGameBtn = document.getElementsByClassName("new-game")[0];
	newGameBtn.addEventListener("click", function () {
		newGame();
	}, false); 
	newGameBtn.addEventListener("touchend", function () {
		newGame();
	}, false); 
}

// backgroundColorToNumber：数字跟背景颜色/大小对应
function backgroundColorToNumber() {
	var gridNum,
		// child,
		grid = document.getElementsByClassName("grid");
	for (var i = 0; i < grid.length; i ++) {
		gridNum = getGridNum(grid[i]);
		// child = grid[i].children[0];
		grid[i].style.fontSize = "48px";
		// if ((" " + grid[i].className + " ").indexOf(" " + "new-grid" + " ") == -1) {
			switch (gridNum) {
				case 2:
					grid[i].style.backgroundColor = "#fff8dc";
					// grid[i].children[0].style.color = "#fff";   // 崩溃！！
					break;
				case 4:
					grid[i].style.backgroundColor = "#e9967a";
					// grid[i].children[0].style.color = "#8f7a66";	
					break;
				case 8:
					grid[i].style.backgroundColor = "#FFA07A";
					break;
				case 16:
					grid[i].style.backgroundColor = "#F4A460";
					break;
				case 32:
					grid[i].style.backgroundColor = "#FA8072";
					break;
				case 64:
					grid[i].style.backgroundColor = "#ff7f50";
					break;
				case 128:
					grid[i].style.backgroundColor = "#FF6347";
					grid[i].style.fontSize = "40px";
					break;
				case 256:
					grid[i].style.backgroundColor = "#FF8800";
					grid[i].style.fontSize = "40px";
					break;
				case 512:
					grid[i].style.backgroundColor = "#FF6600";
					grid[i].style.fontSize = "40px";
					break;
				case 1024:
					grid[i].style.backgroundColor = "#F53";
					grid[i].style.fontSize = "32px";
					break;
				case 2048:
					grid[i].style.backgroundColor = "#F40";
					grid[i].style.fontSize = "32px";
					break;
				default:
					grid[i].style.backgroundColor = "#b0c4de";

					// grid[i].children[0].style.color = "#fff";											
			}
		// }

	} 
}

// 2.按下方向键后，判断格子是否可以运动，并且随机在空格子里填一个数字2
// 游戏主入口
function getReady() {

	window.onkeydown = function(e) {
		deleteTempGrid();  // 在其他位置
		keyDown(e.keyCode);
		// backgroundColorToNumber();
	}
}

// getGridNum(ele)：传入div元素，返回格子里面的数字
function getGridNum(ele) {
	return parseInt(ele.children[0].innerText);  // 空格返回NaN
}

// 各个方向的prevGrid
function getPrevGrid(ele, direction) {
	var prevEle,
		count = 0;
	// 各个方向
	if (direction == "left") {
		return ele.previousElementSibling || null;
	} else if (direction == "right") {
		return ele.nextElementSibling || null;
	} else if (direction == "up") {
		for (var i = 0; i < 4; i ++) {
			ele = ele.previousElementSibling;
			if (!ele) {
				return null;
			}
		}
		return ele;
	} else if (direction == 'down') {
		for (var i = 0; i < 4; i ++) {
			ele = ele.nextElementSibling;
			if (!ele) {
				return null;
			}
		}
		return ele;
	}
}

// #滑块移动#
// 桌面版通过监听方向键来控制滑块移动方向
function keyDown(keyCode) {
	var dir,
		arr,
		go,
		count = 0,   // 用于叠加每次运动得到的分数
		signal = 0;  // 用于判断格子是否运动

	switch (keyCode) {
		case 37:
			dir = "left";
			break;
		case 38:
			dir = "up";
			break;
		case 39:
			dir = "right";
			break;
		case 40:
			dir = "down";
			break;
	}
	
	for (var i = 1; i < 5; i ++) {
		if (dir == "up" || dir == "down") {
			arr = document.getElementsByClassName("col" + i);
		}else if (dir == "left" || dir == "right") {
			arr = document.getElementsByClassName("row" + i);
		}
		if (dir == "up" || dir == "left") {
			for (var j = 1; j <= 3; j ++) {
				// console.log(col[j]);
				max = j;
				go = howToGo(arr[j], dir, max); // 叠加返回得分

				// console.log("go2:" + go);
				signal += go;
				if (go > 1) {
					count += go;   // 累计每一次运动的得分
				}
			}
		} else if (dir == "down" || dir == "right") {
			for (var j = 2; j >= 0; j --) {
				max = 3 - j;
				go = howToGo(arr[j], dir, max);
				// gridMove(arr[j], dir, 1);
				// console.log("go:" + go);
				signal += go;
				if (go > 1) {
					count += go;   // 累计每一次运动的得分
				}
			}
		}
		
	}
	// 格子有运动signal > 0
	if (signal > 0) {
		// console.log("signal:" + signal);
		giveNumber(2, 1);
		backgroundColorToNumber();
		testGameOver();
	}
	// 格子移动，且得分＞0
	if (count > 0) {
		addScore(count);
	}
	return count;
}

// 移动端使用touch事件来监听滑块移动
function touch() {
	var gameBoard = document.getElementsByClassName("game-board")[0];
	
	// // a标签添加跳转功能
	// var githubBtn = document.getElementsByClassName("source-link")[0];
	
	// githubBtn.addEventListener("touchstart", function (e) {
	// 	alert("haha");
	// 	window.location.href = "https://github.com/Yuan-Yiming/2048-online-game";
	// });

	// githubBtn.addEventListener("click", function (e) {
	// 	alert("haha");
	// 	window.location.href = "https://github.com/Yuan-Yiming/2048-online-game";
	// });
	
	gameBoard.addEventListener("touchstart",function (e) {
		
		// e.preventDefault();
		startX = e.changedTouches[0].pageX;
	    startY = e.changedTouches[0].pageY;
	},false);

	gameBoard.addEventListener('touchend',function(e){
		
		e.preventDefault();  // 阻止浏览器的默认行为，例如滚动、跳转等!!
		//获取滑动屏幕时的X,Y
		endX = e.changedTouches[0].pageX,
		endY = e.changedTouches[0].pageY;
		//获取滑动距离
		distanceX = endX-startX;
		distanceY = endY-startY;
		//判断滑动方向，滑动角度大于15°
		if(Math.abs(distanceX) / Math.abs(distanceY) > 1.73 && distanceX > 0){
		    deleteTempGrid();
		    keyDown(39);
		}else if(Math.abs(distanceX) / Math.abs(distanceY) > 1.73 && distanceX < 0){
		    deleteTempGrid();
		    keyDown(37);
		}else if(Math.abs(distanceY) / Math.abs(distanceX) > 1.73 && distanceY < 0){
		    deleteTempGrid();
		    keyDown(38);
		}else if(Math.abs(distanceY) / Math.abs(distanceX) > 1.73 && distanceY > 0){
		    deleteTempGrid();
		    keyDown(40);
		}else{
		    console.log('点击未滑动');
		}
	});
}

// 3.记录分数，分数会增加，
function addScore(score) {
	var span = document.getElementsByClassName("number"),
		currentScore = parseInt(span[0].innerText),
		bestScore = parseInt(span[1].innerText);
	span[0].innerText = score + currentScore;
	scoreUpAnimaton("score", score);
	if (span[0].innerText > bestScore) {
		scoreUpAnimaton("best", score);
		span[1].innerText = span[0].innerText;
	}
}




// howToGoLeft(ele, direction, max)：该函数判断单个格子怎么移动
function howToGo(ele, direction, max, testMode) {
	var prevGrid,
		prevGridNum,
		gridNum = 0,
		go,
		addNum,
		numLen,
		doubleNumGrid;
		// console.log(prevGrid);

	// 各个方向
	prevGrid = getPrevGrid(ele, direction);
	gridNum = getGridNum(ele);
	if (prevGrid) {
		prevGridNum = getGridNum(prevGrid);
	} else {
		prevGridNum = "null";
	}
	// 前面是空格，要继续判断。。。。。。。。。。。。。。。。。。。。。
	if (gridNum && !prevGridNum) {
		prevGrid.innerHTML = ele.innerHTML;
		ele.children[0].innerText = "";
		max -= 1;
		// gridMove(ele, direction, 1);
		if (max) {
			go = howToGo(prevGrid, direction, max);
			// 0、double、continue
		}
		// 返回1
		// console.log("go:" + (go || 1));
		// if (max == 0) {
		// 	console.log("before:" + typeof(go));
		// 	go = 1;
		// 	console.log("after" + typeof(go));
		// }

		return go || 1; 
		// 若go = 0，返回1；go = double，返回double，go = underfied，返回1

	// 和前面数字相同
	} else if (gridNum == prevGridNum) {
		if (!testMode) {
			gridNum *= 2;
			// addScore(gridNum);
			// gridMove(ele, direction, 1);
			prevGrid.children[0].innerText = gridNum + "";
			
			// 在这里添加数字变大的动画：
			// numLen = (gridNum + "").length;

			ele.children[0].innerText = "";
			// console.log('gridNum：' + gridNum)
			if (gridNum == 2048) {
				popup("win");
			}
			// 如果数字叠加，就返回得分，且得分≥4
		}
		// console.log("gridNum:  " + gridNum);
		return gridNum;
	} else {
		// 格子没动，返回0
		return 0;
	}
}


// 4.怎么判断game over，或者达到2048为winner
// test geme over
function testGameOver() {
	var content,
		leftTest,
		rightTest,
		upTest,
		downTest,
		count = 0;
		grid = document.getElementsByClassName("grid");
	for (var i = 0; i < grid.length; i ++) {
		content = grid[i].innerHTML;
		if (content != "<span></span>") {
			count += 1;
		}
	}
	// console.log("count：" + count);
	if (count == 16) {
		if (getGridNum(grid[3]) == getGridNum(grid[4])) {
			count -= 2;
		}
		if (getGridNum(grid[7]) == getGridNum(grid[8])) {
			count -= 2;
		}
		if (getGridNum(grid[11]) == getGridNum(grid[12])) {
			count -= 2;
		}
		for (var i = 0; i < grid.length; i ++) {
			if(!howToGo(grid[i], "left", 1, true) && !howToGo(grid[i], "right", 1, true) && !howToGo(grid[i], "up", 1, true) && !howToGo(grid[i], "down", 1, true)) {
				count --;
				if (count == 0) {
					popup("game-over");
					return true;
				}
			}
		}
	}
	return false;
}

// game over 
function popup(popType) {
	var num,
		tryAgainEle,
		ele = document.getElementsByClassName(popType)[0],
		headerEle = document.getElementsByClassName("header")[0],
		gameBoardEle = document.getElementsByClassName("game-board")[0];
	ele.style.display = "block";
	headerEle.style.opacity = "0.4";
	gameBoardEle.style.opacity = "0.4";

	// tryAgain(num);
	if (popType == "game-over") {
		num = 0;
	}
	if (popType == "win") {
		num = 1;
	}
	tryAgainEle = document.getElementsByClassName("try-again")[num];
	tryAgainEle.addEventListener("click", function () {
		tryAgain(ele, headerEle, gameBoardEle);
	}, false);
	tryAgainEle.addEventListener("touchend", function () {
		tryAgain(ele, headerEle, gameBoardEle);
	}, false);
}

function tryAgain(ele, headerEle, gameBoardEle) {
	ele.style.display = "none";
	headerEle.style.opacity = "1.0";
	gameBoardEle.style.opacity = "1.0";
	newGame();
}

// 5.测试
function test() {
	var randomInt,
		timer;
	timer = setInterval(function() {
		randomInt = Math.floor(Math.random() * 4) + 37;
		keyDown(randomInt);
		// console.log(randomInt);
		if (testGameOver()) {
			clearInterval(timer);
		}
	}, 300);
}

// 6.动画，分数增加、格子移动、新格子生成


// 分数增加 动画
function scoreUpAnimaton(type, score) {
	var ele,
		score,
		timer,
		count = 0;
	if (type == "score") {
		ele = document.getElementsByClassName("score-animation")[0];
	} else if (type == "best") {
		ele = document.getElementsByClassName("best-animation")[0];
	}
	score = "+" + score;
	ele.innerText = score;
	ele.style.top = "25px";
	ele.style.color = "#8f7a66";
	ele.style.opacity = "1.0"

	timer = setInterval(function() {
		count ++;
		ele.style.display = "inline-block";
		ele.style.top = parseInt(ele.style.top) - 8 + "px";
		ele.style.opacity = parseFloat(ele.style.opacity) - 0.1;
		if (count == 6) {
			clearInterval(timer);
			ele.style.display = "none";
		}
	}, 80);
}



 