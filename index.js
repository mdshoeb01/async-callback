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
// let printed={};
let printed={"The first text":2,
							"The middle text":2,
							"The last text":2};

function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?
		if(text=="The first text"){
			console.log("The first text");
			printed[text]=0;
			if(printed["The middle text"]==1){
				console.log("The middle text");
				printed["The middle text"]=0;
				if(printed["The last text"]==1){
					console.log("The last text");
					printed["The last text"]=0;
				}
			}
		}
		else if(text=="The middle text"){
			if(printed["The first text"]==2){
				printed["The middle text"]=1;
			}
			else{
				console.log("The middle text");
				printed["The middle text"]=0;
				if(printed["The last text"]==1){
					console.log("The last text");
					printed["The last text"]==0;
				}
			}
		}
		else{
			if(printed["The middle text"]==0){
				console.log(text);
				printed["The last text"]=0;
			}
			else {
				printed["The last text"]=1;
			}
		}
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
