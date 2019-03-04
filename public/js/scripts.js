var svgObject;
var svgDoc;
var svgComponents;
var rects = {};
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
window.onload = function(){
    initRects();
    rectsPaint();
}
function rectsPaint(){
    rects.Rect1.path.style.stroke = "lime";
    rects.Rect4.rect.style.fill = "red";
    rects.Rect4.path.style.stroke = "green";

    rects.Rect1.rect.addEventListener("click", function(){
        if(rects.Rect1.rect.style.fill == "blue"){
            rects.Rect1.rect.style.fill = "white"; 
        } else {
            rects.Rect1.rect.style.fill = "blue";
        }
    });

    rects.Rect5.rect.addEventListener("mouseover", function(){
        rects.Rect5.rect.style.fill = "yellow";
    });

    rects.Rect5.rect.addEventListener("mouseout", function(){
        rects.Rect5.rect.style.fill = "white";
    });
}