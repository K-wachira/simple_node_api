const fetch = require('node-fetch');
fs = require('fs');


var path = 'result/post.txt' //path to the text file to store the posts 

fetch('http://jsonplaceholder.typicode.com/posts') // fetch the posts using nodes fetch 
    .then(res => res.json())  // the api responds with a json
    .then(listofposts => { 
      
        console.log(listofposts.length); // get the len of the list jst for debuging
        for (let i = 0; i < listofposts.length; i++) { // loop on the list 
            // console.log(listofposts[i]);

            appendToFile(path, listofposts[i]); // for every loop append to file 


        }
    })




function appendToFile(path, data) {
    const json = JSON.stringify(data, null, 2); // convert the map to a string 

    fs.appendFile(path, json, (err) => {  // use append and not write to avoid overwriting  the previous inputs
        if (err) { console.error(err);
        }
        console.log('Ok');
    })
}