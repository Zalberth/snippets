
function gcd(a,b) {  //最大公约数
	while( b != 0 ){
		var re = a % b;
		a = b;
		b =re;
	}
	console.log(a);
}

function maxSubSum(arr) { //最大和子序列
	var maxSum = 0, thisSum = 0;
	for( var j = 0; j < arr.length; j++ ) {
		thisSum += arr[j];
		if( thisSum > maxSum ) {
			maxSum = thisSum;
		} else if( thisSum < 0 ) {
			thisSum = 0;
		}
	}
	console.log("maxSubSum:"+maxSum);
}

function compare(a,b) {
	if( a < b)
		return -1;
	else if( a > b) 
		return 1;
	else return 0;
}
function binarySearch(arr,x) { //二分法查找
	var low = 0, high = arr.length - 1;
	while( low <= high ) {
		
		var mid = Math.floor((low + high)/2);
		console.log("mid:"+mid);
		if( compare(arr[mid],x) == -1 ) {
			low = mid + 1;
		}else if( compare(arr[mid],x) == 1) {
			high = mid - 1;
		}else {
			return mid;
		}
	}
	return "NOT FOUND";
}

maxSubSum([4,-3,5,-2,-1,2,6,-2]);
console.log("binary:"+ binarySearch([2,3,1,8,9],8));