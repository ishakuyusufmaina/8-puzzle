function newElm(type){
  return document.createElement(type);
}

function newArticle (cont){
 let a = newElm("article");
  a.innerHTML = cont;
  return a;
}


function newSection (cont){
 let a = newElm("section");
  a.innerHTML = cont;
  return a;
}

function newDiv (cont){
 let a = newElm("div");
  a.innerHTML = cont;
  return a;
}


function newPara (cont){
 let a = newElm("p");
  a.innerHTML = cont;
  return a;
}


function newIframe (cont){
 let a = newElm("iframe");
  a.srcdoc = cont;
  return a;
}

function newFigure (cont){
 let a = newElm("figure");
  a.innerHTML = cont;
  return a;
}

function newBtn (cont){
 let a = newElm("button");
  a.innerHTML = cont;
  return a;
}

function newPre (cont){
 let a = newElm("pre");
  a.innerHTML = cont;
  return a;
}

function newSpan (cont){
 let a = newElm("span");
  a.innerHTML = cont;
  return a;
}

function newHeader (cont){
 let a = newElm("header");
  a.innerHTML = cont;
  return a;
}

function newH (cont, level){
 let a = newElm("h" + level);
  a.innerHTML = cont;
  return a;
}

function newFooter (cont){
 let a = newElm("footer");
  a.innerHTML = cont;
  return a;
}

function newUl (cont){
 let a = newElm("ul");
  a.innerHTML = cont;
  return a;
}
function newList (cont){
 let a = newElm("li");
  a.innerHTML = cont;
  return a;
}

function newNav (cont){
 let a = newElm("nav");
  a.innerHTML = cont;
  return a;
}

function newTextField (cont){
 let a = newElm("input");
  a.value = cont;
  return a;
}


function newTextArea (cont){
 let a = newElm("textArea");
  a.innerHTML = cont;
  return a;
}

function newProgress (cont){
 let a = newElm("progress");
  a.value = cont;
  return a;
}


function newDetail (cont){
 let a = newElm("details");
  a.innerHTML = cont;
  return a;
}



function newOl (cont){
 let a = newElm("ol");
  a.innerHTML = cont;
  return a;
}

function newTable (cont){
 let a = newElm("table");
  a.innerHTML = cont;
  return a;
}


function newTd (cont){
 let a = newElm("td");
  a.innerHTML = cont;
  return a;
}


function newTr (cont){
 let a = newElm("tr");
  a.innerHTML = cont;
  return a;
}

function newTh (cont){
 let a = newElm("th");
  a.innerHTML = cont;
  return a;
}



function newInput (type, value){
 let a = newElm("input");
  a.type = type;
  if (type=="checkbox"){
    a.checked = value;
  } else {
    a.value=value;
  }
  return a;
}

function newLabel (cont){
 let a = newElm("label");
  a.innerHTML = cont;
  return a;
}

function newDialog (cont){
 let a = newElm("dialog");
  a.innerHTML = cont;
  return a;
}
function newFieldset (cont){
 let a = newElm("fieldset");
  a.innerHTML = cont;
  return a;
}

function newLegend (cont){
 let a = newElm("legend");
  a.innerHTML = cont;
  return a;
}

function newDt (cont){
 let a = newElm("dt");
  a.innerHTML = cont;
  return a;
}

function newDd (cont){
 let a = newElm("dd");
  a.innerHTML = cont;
  return a;
}

function newDl (cont){
 let a = newElm("dl");
  a.innerHTML = cont;
  return a;
}


function newSelect (cont){
 let a = newElm("select");
  a.innerHTML = cont;
  return a;
}