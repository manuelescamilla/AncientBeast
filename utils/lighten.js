Pixastic.Actions.lighten={process:function(a){var b=parseFloat(a.options.amount)||0;b=Math.max(-1,Math.min(1,b));if(Pixastic.Client.hasCanvasImageData()){var c=Pixastic.prepareData(a);var d=a.options.rect;var e=d.width*d.height;var f=e*4,g=f+1,h=f+2;var i=b+1;while(e--){if((c[f-=4]=c[f]*i)>255)c[f]=255;if((c[g-=4]=c[g]*i)>255)c[g]=255;if((c[h-=4]=c[h]*i)>255)c[h]=255}return true}else if(Pixastic.Client.isIE()){var j=a.image;if(b<0){j.style.filter+=" light()";j.filters[j.filters.length-1].addAmbient(255,255,255,100*-b)}else if(b>0){j.style.filter+=" light()";j.filters[j.filters.length-1].addAmbient(255,255,255,100);j.filters[j.filters.length-1].addAmbient(255,255,255,100*b)}return true}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE()}}
