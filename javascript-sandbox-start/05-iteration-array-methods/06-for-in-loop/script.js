// FOR IN Loop 
const colorObj = {
    color1: 'red', 
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
}; 

for(const key in colorObj){
    console.log(key, colorObj[key]);
}

const clorArr = ['red', 'green', 'blue', 'yellow']; 
for (const color of clorArr) {
    console.log(color);
}