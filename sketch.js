// Declare a "SerialPort" object
let serial;
let latestData = "waiting for data"; // you'll use this to write incoming data to the canvas

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Instantiate our SerialPort object
  serial = new p5.SerialPort();
  serial.open("COM4");
  serial.on('data', gotData);
  img1 = loadImage("Brain1.jpg");
  img2 = loadImage("Brain2.jpg");
  img3 = loadImage("Brain3.jpg");

}

// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine(); // read the incoming string
  trim(currentString); // remove any trailing whitespace
  if (!currentString) return; // if the string is empty, do no more
  console.log(currentString); // println the string
  latestData = currentString; // save it for the draw method
}

function draw() {
  background(255, 255, 255);
  fill(0, 0, 0);
  // //var mappedVar = map(latestData, 490,540,0,width);
  // var mappedVar = map(latestData, 300, 400, 0, width);
  // ellipse(mappedVar, 100, 50, 50);
  if(latestData>=0&&latestData<=341){
  image(img3,0,0,width,height);
  }
  else if (latestData>341&&latestData<=682){
  image(img2,0,0,width,height);
  }
  else if (latestData>682&&latestData<=1023){
  image(img1,0,0,width,height);
  }
  text(latestData, 10, 10);
}
