/**
 * 
 */

window.onload=function()
{
	/*
	var x=document.getElementsByTagName("*");
    console.log(x[9]);
    console.log(x.length);

*/





// passing or failing--------------------------------------------------------------------------
  var pass=0;
  var fail=0;



//img.alt--------------------------------------------------------------------------
	
  var imgs = document.getElementsByTagName('img');
  var i1=1;
  for(var i=0;i<imgs.length;i++){
    if(imgs[i].src==imgs[i1].src){
      if(imgs[i1].alt!=""){
        console.log(imgs[i1]);
        console.error('break "G196: Using a text alternative on one item within a group of images"');
        i1++;
        fail++;
      }else{
        pass++;
      }
      
    }else{
      if(imgs[i].alt==""){

      console.log(imgs[i]);
//      document.write(imgs[i]);

      console.error('break"H37: Using alt attributes on img elements"',imgs[i].id,imgs[i].src);
//      document.write('no alt:',imgs[i].id,imgs[i].src);
      fail++;
 

      }else{
        pass++;
      }
    }
  }
/*
  console.log('H37: Using alt attributes on img elements');
//	alert(imgs[0].alt);//获取img的id值test
//	console.log(imgs[0].alt);
//	console.log(imgs.length);
	for(var i=0;i<imgs.length;i++){
//		var imgs = document.getElementsByTagName('img');
//		console.log(imgs[i].alt);
//		console.log('no alt:',stralt);
		if(imgs[i].alt==""){

			console.log(imgs[i]);
//      document.write(imgs[i]);

			console.error('break"H37: Using alt attributes on img elements"',imgs[i].id,imgs[i].src);
//      document.write('no alt:',imgs[i].id,imgs[i].src);
      fail++;
 

		}else{
      pass++;
    }

	}
*/
//faile---aria-label--------------------------------------------------------------------




//front color required-------------------------------------------------


//    var tests = document.getElementById('test');
//    var tags = document.getElementById('tag');
    
//    console.log(all[8]);
/*
    for(var j=0;j<all.length;j++){
    	if(all[j].style.color=='red'){
    		console.log('yes');
    		console.log(j);

    	}else{
  2  		console.log('no');
    	}
    }
 */
    //CSS样式对象:CSS2Properties{},CSSStyleDeclaration
 //   console.log(test.style); //火狐返回空对象CSS2Properties{}，谷歌返回空对象CSSStyleDeclaration{} 
 //   console.log(tag.style); //返回CSS2Properties{width:"500px",height:"300px",background-color:"pink"}
    //element.style获取的是内嵌式的style，如果不是内嵌式，则是一个空对象
 
//    console.log(tag.style.color);//pink
//    
//    
//    

/*
    for(var j=0;j<all.length;j++){
    	if(all[j].style.color=='red'){
 //   		console.log('red');
 //  		console.log(document.getElementById('test').innerHTML);
   			var req=all[j].innerHTML;
   			if(req.indexOf('require')==-1){//no require

   				console.log('break"G14: Ensuring that information conveyed by color differences is also available in text"');
   			}else{
   				console.log('there is require');
   			}
    	}

    }
*/




//    console.log(tag.style['color']);//pink
    //获取类似background-color,border-radius,padding-left类似样式的两种写法啊
 
 //   console.log(test.currentStyle) //火狐和谷歌为Undefined,IE返回CSS对象
 //   console.log(window.getComputedStyle(test,null))//谷歌返回CSSStyleDeclaration{……} ，火狐返回CSS2Properties{……}
 //   console.log(window.getComputedStyle(test))
    //效果同上,但是在Gecko 2.0 (Firefox 4/Thunderbird 3.3/SeaMonkey 2.1) 之前,第二个参数“伪类”是必需的(如果不是伪类,设置为null)
 
 //   console.log(test.currentStyle.width);//500px(IE)
 //   console.log(window.getComputedStyle(test).color); //rgb(255, 0, 0);
    console.log('颜色');
    var all=document.getElementsByTagName('*');
    for(var n=0;n<all.length;n++){
	    if(window.getComputedStyle(all[n]).color=='rgb(255, 0, 0)'){
	 //   	console.log('red');
	 //  		console.log(document.getElementById('test').innerHTML);
	   		var req=all[n].innerHTML;
	   		if(req.indexOf('require')==-1){//no require
	   			console.log(all[n]);
	   			console.error('break"G14: Ensuring that information conveyed by color differences is also available in text"');
          fail++;
	   		}else{
          pass++;
//	   			console.log(all[n]);
//	   			console.log('there is require');
	   		}
	    }
	}
 //   console.log(window.getComputedStyle(test)['width']);//500px;
    //document.defaultView.getComputedStyle(element,null)[attr]/window.getComputedStyle(element,null)[attr]   
    
//G196: Using a text alternative on one item within a group of images that describes all items in the group-------------------------------------------------



/*

    if(simb[i].src=simb[i+1].src && simb[i+1].alt!=""){
      console.log(simb[i+1]);
      console.error('break "G196: Using a text alternative on one item within a group of images"');
      fail++;
    }else{
      pass++;
    }
  }
*/
  var lang=document.getElementsByTagName('html');
//  console.log(lang[0]);
  if(lang[0].lang==""){
    console.log(lang[0]);
    console.error('break"H57: Using language attributes on the html element"');
    fail++;
  }else{
    pass++;
  }







    console.log(pass,'passing');
    console.log(fail,'failing');

}


 