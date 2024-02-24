const request = require('request');
const cheerio = require('cheerio');
request('https://leetcode.com/vaishalidewangan82768/', cb)
  

function cb(error, response, body) {
  if(error){
  console.error('error:', error); 
  }else{
  handleBody(body);
  }
}

  function handleBody(body){
    let selTool = cheerio.load(body);
    let span = selTool('div.text');
    console.log(span.length);
  }