let str =
	'Apple continues to lead the tech industry with groundbreaking innovations! On 09.09.2024, the company unveiled new products that are set to change the future of technology. Read more at https://apple.com/news. #AppleEvent #Innovation On 24.06.2025, Apple announced the launch of a unique service for iOS users. Find out more at https://google.com/apple-service. #iOS #Technology Stay tuned for more Apple news—exciting releases are coming soon! #Innovation On 01.08.2025, we expect new launches: https://bbc.com/apple';

let userStr = 'Armen1219_';


let hashtag = str.match(/#\w+/g);

let datePattern = /\d{2}\.\d{2}\.\d{4}/g;
let dates = str.match(datePattern);

let linkPattern = /https:\/\/[^\s]+/g;
let links = str.match(linkPattern)

let userNamePattern = /^[A-z][A-z-0-9_]{2,14}$/;
let userName = userStr.match(userNamePattern);

console.log(hashtag);
console.log(dates);
console.log(links);
console.log(userName);


