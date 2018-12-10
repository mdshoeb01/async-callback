function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}
let status={"The first text":2, "The middle text":2,	"The last text":2};

function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?
		if(text=="The first text"){
			console.log("The first text");
			status[text]=0;
			if(status["The middle text"]==1){
				console.log("The middle text");
				status["The middle text"]=0;
				if(status["The last text"]==1){
					console.log("The last text");
					status["The last text"]=0;
				}
			}
		}
		else if(text=="The middle text"){
			if(status["The first text"]==2){
				status["The middle text"]=1;
			}
			else{
				console.log("The middle text");
				status["The middle text"]=0;
				if(status["The last text"]==1){
					console.log("The last text");
					status["The last text"]==0;
				}
			}
		}
		else{
			if(status["The middle text"]==0){
				console.log(text);
				status["The last text"]=0;
			}
			else {
				status["The last text"]=1;
			}
		}
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
