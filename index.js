var balls = document.getElementsByClassName("ball");
for (var i=0; i < balls.length; i++) {
	balls[i].setAttribute('onclick','ballClick()');
}

function ballClick() {
	var ball = event.target;
	if(!ball.ballside) {
		ball.ballside = "left";
	}
	if(ball.open = "yes") {
		switch (ball.ballside) {
			case "left":
				ball.style.backgroundColor = "rgba(0,0,0,0.9)";
				ball.style.borderColor = "rgba(0,0,0,0.2)";
				ball.innerHTML = "Right";
				ball.style.margin = "0px 0px 0px auto";
				ball.ballside = "right";
				break;
			case "right":
				ball.style.backgroundColor = "rgba(10,50,0,0.9)";
				ball.style.borderColor = "rgba(10,50,0,0.2)";
				ball.innerHTML = "Left";
				ball.style.margin = "0px auto 0px 0px";
				ball.ballside = "left";
				break;
		}
	}
}
