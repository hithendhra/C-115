function preload() {
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,300,300);
}

function take_snapshot()
{
    save('my_filter_image.png');
}


function modelloaded()
{
    console.log('Model Loaded');
}

function gotposes(results)
{
  if (results.length > 0)
{
      console.log(results);

      console.log("NOSE X = "+results[0].pose.nose.x);
      console.log("NOSE Y = "+results[0].pose.nose.y);
      
      console.log("RIGHT EYE X ="+results[0].pose.rightEye.x);
      console.log("RIGHT EYE Y ="+results[0].pose.rightEye.y);

      console.log("LEFT EYE X ="+results[0].pose.leftEye.x);
      console.log("LEFT EYE Y ="+results[0].pose.leftEye.y);

      console.log("RIGHT EAR X ="+results[0].pose.rightEar.x);
      console.log("RIGHT EAR Y ="+results[0].pose.rightEar.y);

      console.log("LEFT EAR X ="+results[0].pose.leftEar.x);
      console.log("LEFT EAR Y ="+results[0].pose.leftEar.y);
}
}