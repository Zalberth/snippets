window.onload = function(){
	var ani = document.getElementById('ani');
	if( ani.getContext ) {
		var ctx = ani.getContext('2d');
		moveAnim(ctx,20,20,100,100,0);
	}
}

function moveAnim(ctx,x,y,mwidth,mheight,stop) {
	ctx.fillStyle = 'red';
	ctx.clearRect(x,y,mwidth,mheight);
	
	x += 5;
	mheight -= 1;
	mwidth -= 1;
	if( mwidth < 0 ) {
		mwidth = 0;
		stop = 1;
	}
	if( mheight < 0 ) {
		mheight = 0;
		stop = 1;
	}
	ctx.fillRect(x,y,mwidth,mheight);
	if ( stop === 1 ) {
		return;
	} else {
		setTimeout(moveAnim,20,ctx,x,y,mwidth,mheight,stop); //I love this style!		
	}
};