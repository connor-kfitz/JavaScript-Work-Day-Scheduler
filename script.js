// Access local storage and fill in time chunks
var savedNine = JSON.parse(localStorage.getItem("nineText"));
$('#nineText').text(savedNine);

var savedTen = JSON.parse(localStorage.getItem("tenText"));
$('#tenText').text(savedTen);

var savedEleven = JSON.parse(localStorage.getItem("elevenText"));
$('#elevenText').text(savedEleven);

var savedTwelve = JSON.parse(localStorage.getItem("twelveText"));
$('#twelveText').text(savedTwelve);

var savedOne = JSON.parse(localStorage.getItem("oneText"));
$('#oneText').text(savedOne);

var savedTwo = JSON.parse(localStorage.getItem("twoText"));
$('#twoText').text(savedTwo);

var savedThree = JSON.parse(localStorage.getItem("threeText"));
$('#threeText').text(savedThree);

var savedFour = JSON.parse(localStorage.getItem("fourText"));
$('#fourText').text(savedFour);

var savedFive = JSON.parse(localStorage.getItem("fiveText"));
$('#fiveText').text(savedFive);

// Display Today's Date
$('#currentDate').text(moment().format('MMM Do, YYYY'));

// Colour Time Blocks Based on Current Time
var currentTime = moment().format('h');
var amPm = moment().format('a');

var timeBlock = [9,10,11,12,1,2,3,4,5];
var timeBlockString = ['#9','#10','#11','#12','#1','#2','#3','#4','#5'];

if(currentTime < 9 && amPm == 'am'){
    for(var i=0; i < timeBlock.length; i++){
        var currentTimeBlock = $(timeBlockString[i]);
        currentTimeBlock.css("background-color", "lightblue");
    }
}
else if(currentTime > 5 && amPm == 'pm'){
    for(var i=0; i < timeBlock.length; i++){
        var currentTimeBlock = $(timeBlockString[i]);
        currentTimeBlock.css("background-color", "lightgrey");
    }
}
else {
    for(var i=0; i < timeBlock.length; i++){
        if (currentTime == timeBlock[i]){
            var currentTimeBlock = $(timeBlockString[i]);
            currentTimeBlock.css("background-color", "yellow");

            for(var j=0; j < i; j++){
                var currentTimeBlock = $(timeBlockString[j]);
                currentTimeBlock.css("background-color", "lightgrey");
            }
            for(var j=timeBlockString.length; j > i; j--){
                var currentTimeBlock = $(timeBlockString[j]);
                currentTimeBlock.css("background-color", "lightblue");
            }
        }
    }   
}

// Save Buttons Variables, onClick, and function
var saveButton9 = $('#9-button');
saveButton9.on('click', function(){
    var nineText = $('#nineText').val();
    localStorage.setItem("nineText", JSON.stringify(nineText));
});

var saveButton10 = $('#10-button');
saveButton10.on('click', function(){
    var tenText = $('#tenText').val();
    localStorage.setItem("tenText", JSON.stringify(tenText));
});

var saveButton11 = $('#11-button');
saveButton11.on('click', function(){
    console.log('hello');
    var elevenText = $('#elevenText').val();
    localStorage.setItem("elevenText", JSON.stringify(elevenText));
});

var saveButton12 = $('#12-button');
saveButton12.on('click', function(){
    var twelveText = $('#twelveText').val();
    localStorage.setItem("twelveText", JSON.stringify(twelveText));
});

var saveButton1 = $('#1-button');
saveButton1.on('click', function(){
    var oneText = $('#oneText').val();
    localStorage.setItem("oneText", JSON.stringify(oneText));
});

var saveButton2 = $('#2-button');
saveButton2.on('click', function(){
    var twoText = $('#twoText').val();
    localStorage.setItem("twoText", JSON.stringify(twoText));
});

var saveButton3 = $('#3-button');
saveButton3.on('click', function(){
    var threeText = $('#threeText').val();
    localStorage.setItem("threeText", JSON.stringify(threeText));
});

var saveButton4 = $('#4-button');
saveButton4.on('click', function(){
    var fourText = $('#fourText').val();
    localStorage.setItem("fourText", JSON.stringify(fourText));
});

var saveButton5 = $('#5-button');
saveButton5.on('click', function(){
    var fiveText = $('#fiveText').val();
    localStorage.setItem("fiveText", JSON.stringify(fiveText));
});







