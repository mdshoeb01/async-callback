
const events=require('events');

class request extends events{}
const ob=new request.EventEmitter();
function fakeAjax(url) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function (){
		ob.emit(url, fake_responses[url]);
	},randomDelay);
}

fakeAjax("file1");
fakeAjax("file2");
fakeAjax("file3");

ob.on('file1', (txt)=>console.log(txt));
ob.on('file2', (txt)=>console.log(txt));
ob.on('file3', (txt)=>console.log(txt));
