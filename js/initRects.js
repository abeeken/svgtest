function initRects(){
    svgObject = document.getElementById('test-svg');
    svgDoc = svgObject.contentDocument;
    svgComponents = svgDoc.getElementsByTagName('g');

    console.log(svgComponents);

    for(var i=0; i < svgComponents.length; i++ ){
        var temp = {
            rect:svgComponents[i].getElementsByTagName('rect')[0],
            path:svgComponents[i].getElementsByTagName('path')[0]
        };
        rects[svgComponents[i].id] = (temp);
    }

    console.log(rects);
}