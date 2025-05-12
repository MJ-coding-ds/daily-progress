//Array for each 
//ForEach: only loops, no return
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']; 

// //console.log(socials.__proto__);
// socials.forEach(function(item){
//     console.log(item);

// });

//The same script: 
//socials.forEach((item, index, arr)=> console.log(`${index} - ${item}`, arr));

function logSocials(social){
    console.log(social);
}
socials.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'http://twitter.com'}, 
    {name: 'Facebook', url: 'http://facebook.com'},  
    {name: 'LinkedIn', url: 'http://linkedin.com'},
    {name: 'Instagram', url: 'http://instagram.com'}, 
 ]; 
 socialObjs.forEach((item) => console.log(item));