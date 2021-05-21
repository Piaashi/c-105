Webcam.set({

width:350,height:300,image_format:"png",png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture_image() 
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log("ml5version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vMPOTc3q8/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model is loaded");
}

function identify_image() 
{
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error,results) 
{
  if (error) 
  {
      console.error(errror);
  }   
  
  else 
   {
       console.log(results); 
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("object_accuracy").innerHTML=results[0].confidence .toFixed(5);
   }
   
}
