window.onload=function(){var e=document.getElementById("test-svg").contentDocument.getElementsByTagName("g");console.log(e);for(var t={},l=0;l<e.length;l++){var n={rect:e[l].getElementsByTagName("rect")[0],path:e[l].getElementsByTagName("path")[0]};t[e[l].id]=n}console.log(t),t.Rect1.path.style.stroke="lime",t.Rect4.rect.style.fill="red",t.Rect4.path.style.stroke="green"};