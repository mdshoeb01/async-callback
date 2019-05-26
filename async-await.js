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
	return new Promise((resolve,reject)=>{
			if(file=="file4"){
				throw ("Error for "+file);
			}
			else {
			 fakeAjax(file,(txt)=>{
					 resolve(txt);
			 })
		 }
	});
}

// request all files at once in "parallel"
let in_sequence=async function(){
	//Using concurrent calls
	const p1=getFile("file1");
	const p2=getFile("file2");
	const p3=getFile("file3");
	const p4=getFile("file4");

	console.log(await p1);
	console.log(await p2);
	console.log(await p3);
	console.log(await p4);
	// try{
	// }catch(e){
	// 	console.error(e);
	// }
	// try{
	// }catch(e){
	// 	console.error(e);
	// }
	// try{
	// }catch(e){
	// 	console.error(e);
	// }
	//
	// try{
	// }catch(e){
	// 	console.error(e);
	// }
	// }
	// catch(e){
	// 	console.log(e);
	// }


//concurrent using Promise.all
// Promise.all([getFile("file1"),getFile("file2"),getFile("file3")])
// .then((responses)=>{
// 	console.log(responses[0]);
// 	console.log(responses[1]);
// 	console.log(responses[2]);
// });
}
try{
	in_sequence();
}
catch(e){
	console.log("Error");
}
