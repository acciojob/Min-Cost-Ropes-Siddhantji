function mincost(arr)
{ 
//write your code here
	arr.sort((a,b)=>a-b);
	let total = 0;
	while(arr.length>1){
		let a1= arr.shift();
		let a2= arr.shift();
		const merge= a1+a2;
		total += merge;
		arr.push(merge);
		arr.sort((a,b)=>a-b);
	}
	return total;
// return the min cost
  
}

module.exports=mincost;
