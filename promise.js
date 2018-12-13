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

function getFile(file) {

	let p=new Promise((resolve,reject)=>{
		fakeAjax(file,(txt)=>{
			if(file=="file4"){
				reject("Error for file4");
			}
			else 	resolve(txt)
		});

	});
	return p;
}

let p1=getFile("file1");
let p2=getFile("file2");
let p3=getFile("file3");
let p4=getFile("file4");

// p4.then((txt)=>{
// 	console.log(txt);
// }).catch((e)=>console.log(e));



p1.then((txt)=>{
	console.log(txt);
	return p2;
}).then((txt)=>{
	console.log(txt);
	return p3;
}).then((txt)=>{
	console.log(txt);
	return p4;
}).then((txt)=>{
	console.log(txt);
}).catch((e)=>{
	console.error(e);
})
