
alert("welcome to javascript code file");
var a=100;
alert(a);
document.write("this is javascript code");
var a="mesSAge";
//console.log(a.toUpperCase());
document.write(a);
document.write("<br>");
/*var numberOfSecondsInMinute = 60;
var numberOfMinutesInHour = 60 ;
 var numberOfHoursInDays = 24;
 var numberOfDaysInWeek = 7;
 var numberOfDaysInYear = 365;
 var numberofDaysInMonth = 31;
 var numberOfWeeksInYears = 52;
 var secondsPerDay = numberOfSecondsInMinute * numberOfMinutesInHour * numberOfHoursInDays;
 
 document.write('There are '+secondsPerDay+' seconds in a day');*/
 var hours,mins,secs;
  hours=parseInt(prompt("enter hours"));
  mins=parseInt(prompt("enter minutes"));
  secs=parseInt(prompt("enter seconds"));
  var perDaySeconds=hours*mins*secs;
  document.write(perDaySeconds);
 
 