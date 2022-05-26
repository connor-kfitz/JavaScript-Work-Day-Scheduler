$('#currentDate').text(moment().format('MMM Do, YYYY'));

var currentTime = 12;
// moment().format('h');

var timeBlock = [9,10,11,12,1,2,3,4,5];
var timeBlockString = ['#9','#10','#11','#12','#1','#2','#3','#4','#5'];

console.log(timeBlockString);

for(var i=0; i < timeBlock.length; i++){
    if (currentTime == timeBlock[i]){
        var currentTimeBlock = $(timeBlockString[i]);
        currentTimeBlock.css("background-color", "yellow");

        for(var j=0; j < i; j++){
            var currentTimeBlock = $(timeBlockString[j]);
            currentTimeBlock.css("background-color", "blue");
        }
        for(var j=timeBlockString.length; j > i; j--){
            var currentTimeBlock = $(timeBlockString[j]);
            currentTimeBlock.css("background-color", "red");
        }
    }
}

