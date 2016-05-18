function collect_same_elements(collection_a, collection_b) {
	var b=collection_b.join(',');
	var same_elements=[];
	for(var i=0;i<collection_a.length;i++){
		var form=new RegExp(collection_a[i]);
		if(form.test(b)){
		same_elements.push(collection_a[i]);
		}
	}
	return same_elements
}

module.exports = collect_same_elements;
