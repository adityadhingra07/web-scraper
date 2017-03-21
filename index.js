var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/stat', function(req, res) {
    url = "https://www.purdue.edu/ehps/police/assistance/stats/statsdaily.html";
    request(url, function(error, response, html) {
        
            if(!error) {
                var $ = cheerio.load(html);

                var date, time, desc;
                var json = {date: "", time: "", desc: ""};

                $('article').filter(function(){
                    
                    var data = $(this);
                    //console.log(data.children().text());
                    //console.log(data.text());
                    var in_res = data.text();
                    var final_result = in_res.split("\n");
                    console.log(final_result);
                    })

            }
        
        })
})

//REGEX TO MATCH DATE MM-DD-YY
/*
 
 ^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?(((19)|(20))?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$

 */

app.listen('8080');
console.log('Port: 8080 - Scraper');
exports = module.exports = app;

