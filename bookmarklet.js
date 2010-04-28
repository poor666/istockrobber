function xpath(query) {
    return document.evaluate(query, document, null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

Position.GetWindowSize = function(w) {
        w = w ? w : window;
        var width = w.innerWidth || (w.document.documentElement.clientWidth || w.document.body.clientWidth);
        var height = w.innerHeight || (w.document.documentElement.clientHeight || w.document.body.clientHeight);
        return [width, height]
}

    rtab = ["//*[@id='sideBar']","/html/body/div/div[2]/div[5]/div[2]/div/div/div[2]","/html/body/div/div[2]/div[5]/div[2]/div/div[3]","/html/body/div/div[2]/div[5]/div[2]/div/div[2]","//*[@id='headerWrapper']","//*[@id='SearchBarContainerBasic']","//*[@id='footer']","/html/body/div/div[2]/div[5]/div[2]/div/div/div/div[2]"];

  for (i=0;i<rtab.length;i++){  
    var elm = xpath(rtab[i]);
    elm.snapshotItem(0).setAttribute('style','display:none;');
  };  
  
  var dim = Position.GetWindowSize();    

  var Mwidth = dim[0]+"px";
  var Mheight = dim[1]+"px";
  
  $("wrapper").setAttribute('style','width:'+Mwidth+';');  
  $("mainContentMaster").setAttribute('style','width:'+Mwidth+';height:'+Mheight+';');     
  $("mainContentMaster").getElementsByClassName('column1')[0].setAttribute('style','width:'+Mwidth+';margin-top:0px;');
  $("fileDisplayContainer").setAttribute('style','width:'+Mwidth+';height:'+Mheight+';');  
  $("imageContainer").setAttribute('style','width:'+Mwidth+';height:'+Mheight+';');
  $("ZoomImageDiv").setAttribute('style','width:'+Mwidth+';height:'+Mheight+';');  
  $("ZoomDroppableDiv").setAttribute('style','width:'+Mwidth+';height:'+Mheight+';');   
  $("ZoomControlDiv").setAttribute('style','display:none;');    
  //$('ZoomControlDiv').show()  

/*
new Ajax.Request('http://www.istockphoto.com/ajax_class_creator.php',
  {
    method:'post',    
    parameters: {
                  ajax_action: 'zoom', 
                  ajax_class: 'filezoomadvanced', 
                  approveQ: 'false', 
                  buildImgs: 1, 
                  clickX:207, 
                  clickY:219, 
                  currentX:1068, 
                  currentY: 661, 
                  id:8788030, 
                  move:'zoomin', 
                  nextSize:2, 
                  size:3
                },                
    onComplete:this.zoomCompleted.bind(this),
    
      zoomCompleted:function(req){var data=req.responseText.evalJSON(true);},    

    onSuccess: function(transport){
      var response = transport.responseText || "no response text";
      //alert("Success! \n\n" + response);
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
*/
