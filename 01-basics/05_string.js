const gameName=new String("hitesh-hc-com-youtube-video");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);

const newString=gameName.substring(2,4);  // its start from index 2 and print till 3
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="http://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20",'-'));
console.log(url);

console.log(url.includes('hitesh'))
console.log(gameName.split('-'));
console.log(gameName.split('-')[0]);


