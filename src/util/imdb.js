export const search = (q) => {
    let term = q;
    term.replace(' ', '%20');
    fetch(`https://imdb8.p.rapidapi.com/title/find?q=${term}`, {
	"method": "GET",
	"headers": {
		'x-rapidapi-key': 'b9ae6c0b8fmsh0729a624425a701p1526d9jsn121d73fcb534',
    	'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => {
	return response.json()
})
.then(object => {
	console.log(object);
})
.catch(err => {
	console.error(err);
});
}
function getids(){
	return fetch(`https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US`, {
	"method": "GET",
	"headers": {
		'x-rapidapi-key': 'b9ae6c0b8fmsh0729a624425a701p1526d9jsn121d73fcb534',
    	'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => {
	return response.json()
})
.then(object => {
	let ids = '';
	let i = 0;
	for (const property in object) {
		i++;
		if(i===41){
			break;
		}
		let id = object[property];
		id = id.slice(7, -1);
		if(property==0){
			ids = ids+id;
		}else{
			ids = ids + '&ids=' + id;
		}
	}
	return ids;
})
}
function getMetaData(ids){
	return fetch(`https://imdb8.p.rapidapi.com/title/get-meta-data?ids=${ids}&region=US`, {
		"method": "GET",
		"headers": {
			'x-rapidapi-key': 'b9ae6c0b8fmsh0729a624425a701p1526d9jsn121d73fcb534',
    		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
		}
	})
	.then(response => {
		return response.json()
	})
	.then(object => {
		return object;
	})
}
export function getMostPopular(){
	return getids()
	.then(ids => {
		return getMetaData(ids);
	})
	.catch(err => {
		console.error(err);
	});
	
}
export default search;