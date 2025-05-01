let x; 
let d = new Date();
x = d.toString(); // Converts the date to a string
x = d.valueOf(); // Returns the primitive value of a Date object
x = d.getFullYear(); // Returns the year of a date as a four digit number
x = d.getMonth()+1;
x= d.getDay();
x = d.getMinutes();
x = `${d.getFullYear()} - ${d.getMonth()+1} - ${d.getDate()}`; 
x = Intl.DateTimeFormat('en-US').format(d); // Returns the month as a string, such as "January" or "March"
x = Intl.DateTimeFormat('en-GB').format(d); // Returns the month as a number, such as "01" or "03"
x = Intl.DateTimeFormat('default').format(d); // Returns the month as a string, such as "January" or "March"
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // Returns the month as a string, such as "January" or "March"
x = d.toLocaleDateString('default', { month: 'short' }); // Returns the month as a string, such as "January" or "March"

x = d.toLocaleDateString('default', {
    weekday: 'long', // Returns the weekday as a string, such as "Monday" or "Tuesday"
    year: 'numeric', // Returns the year as a number, such as "2023"
    month: 'long', // Returns the month as a string, such as "January" or "March"
    day: 'numeric', // Returns the day as a number, such as "1" or "31"
    hour: '2-digit', // Returns the hour as a number, such as "01" or "03"
    minute: '2-digit', // Returns the minute as a number, such as "01" or "03"
    second: '2-digit', // Returns the second as a number, such as "01" or "03"
    }); // Returns the month as a number, such as "01" or "03"
console.log(x);