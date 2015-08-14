window.onload = function() {
	var one = document.getElementById('one');
	if( one.getContext) {
		//注意canvas的的stroke是从最小填充边界向两侧对称展开的
		var context = one.getContext('2d');
		
		/*
		context.fillStyle = 'rgba(255,0,0,0.9)';
		context.lineWidth = 49
		context.strokeRect(100, 100, 50, 50);
		context.fillRect(100,100,50,50);
		*/
		/*
		var image = document.images[0],
		imageData = {},
		data = [],
		i = 0,
		len = 0,
		green = 0,
		blue = 0,
		red = 0,
		alpha = 0,
		average = 0;
		context.drawImage(image,0,0);
		imageData = context.getImageData(0,0,image.width,image.height);
		data = imageData.data; //获得了颜色数据
		for( i = 0, len = data.length; i < len; i+=4 ) {
			red = data[i];
			green = data[i+1];
			blue = data[i+2];
			alpha = data[i+3];
			average = Math.floor((red + green + blue)/3);
			data[i] = average;
			data[i+1] = average;
			data[i+2] = average;
		}

		imageData.data = data;
		context.putImageData(imageData,0,0);
		*///演示了图像处理的基本流程

	}	
};
