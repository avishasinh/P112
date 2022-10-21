Webcam.attach("#webCam")
Webcam.set({
    width: 350,
    height: 350,
    image_format: "jpeg",
    jpeg_quality: 100
})

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML = "<img id ='pic' src = ''" + data_uri + "'>"
    })
}
console.log(ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/m-ucXL6Kd/model.json", modelLoaded)

function modelLoaded(){
    console.log('modelLaoded')
}

function identify(){
    console.warn("identifiying images")
    pic = document.getElementById("pic")
    classifier.classify(pic, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("person").innerHTML = "Person: " + results
    }
}