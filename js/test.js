window.onload = function(){
    var svgObject = document.getElementById('test-svg');
    var svgDoc = svgObject.contentDocument;
    var svgComponents = svgDoc.getElementsByTagName('g');

    console.log(svgComponents);
    
    var rects = {};

    for(var i=0; i < svgComponents.length; i++ ){
        var temp = {
            rect:svgComponents[i].getElementsByTagName('rect')[0],
            path:svgComponents[i].getElementsByTagName('path')[0]
        };
        rects[svgComponents[i].id] = (temp);
    }

    console.log(rects);

    rects.Rect1.path.style.stroke = "lime";
    rects.Rect4.rect.style.fill = "red";
    rects.Rect4.path.style.stroke = "green";
}