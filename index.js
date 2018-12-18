var katzDeliLine = [];
var newName;
var linePosition;
var realPosition;

  var howManyServed = 0
//katzDeliLine = [150, 151, 152];
function takeANumber(katzDeliLine){
  
  if (katzDeliLine.length > 0)
  {
  katzDeliLine.push(katzDeliLine.length);
  katzDeliLine = katzDeliLine + 1;
  linePosition = katzDeliLine.length;
  howManyServed = howManyServed + 1;
  
  return "Welcome. You are number " + linePosition + " in line."
  }
 }

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length > 0)
  {
    //shift method returns the removed item
    
   var personNow = katzDeliLine.shift();
    var message = "Currently serving " + personNow + ".";
    return message;
}
 else {
     return "There is nobody waiting to be served!";
 }
  }


function currentLine(katzDeliLine)
{

if (katzDeliLine.length === 0){
  var message = "The line is currently empty.";
  return message;
  }
  
  if (katzDeliLine.length > 0){
    var i = 0;
    var pNumber = 1;
    var messageString = [];
    do {
      //.shift() returns the person removed
      var pPerson =katzDeliLine[i];
      var messageSnip = " " + pNumber + ". " + pPerson;
      
    messageString.push(messageSnip);
    i++;
    pNumber++;
       }
       while (i < katzDeliLine.length);
       messageString = "The line is currently:" + messageString;
       return messageString;
}
}