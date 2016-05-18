function collect_same_elements(collection_a, collection_b) {
	var a=collection_a.join(',');
	var same_elements=[];
	for(var i=0;i<collection_b.length;i++){
		var form=new RegExp(collection_b[i]);
		if(form.test(a)){
		same_elements.push(collection_b[i]);
		}
	}
	return same_elements
}

module.exports = collect_same_elements;
