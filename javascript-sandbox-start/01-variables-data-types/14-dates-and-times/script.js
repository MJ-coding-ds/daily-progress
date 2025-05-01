let d; 
d = new Date(); // current date and time

d = d.toString(); // convert to string

d =new Date(2025, 6,1);
d=new Date(2025, 0,1, 12, 30, 0); // year, month (0-11), day, hours, minutes, seconds
d = new Date('2025-02-10'); // ISO format

d = Date.now();
d = new Date('07-10-2025');
d = d.getTime(); // get time in milliseconds since 1970

d = new Date(1752098400000);

d = Math.floor(Date.now() / 1000); // get time in seconds since 1970
console.log(d, typeof d); // current date and time

