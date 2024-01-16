music1="";
music2="";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
	music1 = loadSound("Runnin'g Home To You.mp3");
	music2 = loadSound("Up town Funk.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	image(video, 0, 0, 600, 500);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  scoreRightWrist =  results[0].pose.keypoints[10].score;
	  scoreLeftWrist =  results[0].pose.keypoints[9].score;
	  console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	  
	  rightWristX = results[0].pose.rightWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
  
	  leftWristX = results[0].pose.leftWrist.x;
	  leftWristY = results[0].pose.leftWrist.y;
	  console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		  
	}
  }