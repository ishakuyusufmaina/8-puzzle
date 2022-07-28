  class EightPuzzles {
    constructor(){
      this.state= [
      7, 2, 4,
      5, 0, 6,
      8, 3, 1
      ];
      this.goalState = [
      0,1,2,
      3,4,5,
      6,7,8
      ];
      this.states=[];
    }
    getState(){return this.state};
    setState(state){this.state=state};
    getStates(){return this.states};
    setStates(states){this.state=states};
  }
  
  
  class EightPuzzlesView{
    constructor(){
      this.board = newDiv("");
      this.board.id="board";
      this.boardH = 90/100 * screen.width;
      this.boardW = this.boardH;
      this.cellW = 100/100 * this.boardW/3 -2;
      this.cellH = 100/100 * this.boardH/3 -2;
      this.board.style.width= this.boardW +"px";
      this.board.style.height=this.boardH +"px";
      for (let i = 0; i<3; i++){
        for (let j=0; j<3; j++){
          let cell = newSpan("");
          cell.classList.add("cell");
          cell.setAttribute("r", i);
          cell.setAttribute("c", j);
          cell.style.width = this.cellW + "px";
          cell.style.height = this.cellH + "px";
          this.board.appendChild(cell);
       }   
    }
  }
        
 render(state){
   let hiddenCell = this.board.querySelector("[boader='none']");
   if (hiddenCell){hiddenCell.setAttribute("boader", "show");}
   state.map((row, r)=>{
     row.map((column, c)=>{
       let cell = this.board.querySelector(`[c="${c}"][r="${r}"]`);
       cell.innerHTML = "";
       let cellCont = newSpan(column? column : "");
       cellCont.style.height= 80/100 * this.cellH + "px";
       cellCont.style.width= 80/100 * this.cellW + "px";
       cellCont.style.marginTop = 10/100 * this.cellH + "px";
       if (!column){cellCont.setAttribute("boader","none");}
       cell.appendChild(cellCont);
     });
   });
   return this.board;
 }
        
  
  slide(direction, r, c){
    return;
      let cell = this.board.querySelector(`[c="${c}"][r="${r}"]`);
      switch(direction){
        case "right":
        cell.style.transform = `translateX(${this.cellW +  10/100 * this.cellW +1}px)`;
        break;
        
        case "left":
        cell.style.transform = `translateX(${-(this.cellW + 10/100 *this.cellW + 1)}px)`;
        break;
        
        case "up":
        cell.style.transform = `translateY(${-(this.cellH + (10/100 * this.cellH))}px)`;
        break;
        
        case "down":
        cell.style.transform = `translateY(${(this.cellH+ (10/100 * this.cellH) +1)}px)`;
        break;
        
        default:
        {}
  
  }
  }
    addSlideListener(handle){
      let cells= this.board.children;
      for (let i=0; i<cells.length; i++){
        cells[i].addEventListener("click", ()=>{handle(cells[i].getAttribute("r"), cells[i].getAttribute("c"), cells[i].textContent)});
       
      }
     
  }
  }
  
  class EightPuzzlesCtr {
    constructor(model, view){
      this.model=model;
      this.view = view;
      this.update();
      view.addSlideListener((r,c, cont)=>{this.slide(r,c, cont)});
  }
    
    update(){
      this.view.render([this.model.state.slice(0, 3), this.model.state.slice(3, 6), this.model.state.slice(6, 9)]);
    }
    restart(){
      this.model= new EightPuzzles();
      this.update();
    }
    
    slide(r, c, cont){
      if (cont==0){return}
      let bi=this.model.state.indexOf(0);
      let i = this.model.state.indexOf(Number(cont));
      //alert("i="+i +" bi="+bi + "cont = "+cont);
      //alert(this.model.state)
      if (bi-i==3){
        this.view.slide("down", r, c);
        
      } else if (bi-i==-3) {
        //alert("up");
       this.view.slide("up", r,c);
      } else if (bi-i==1 & (bi+i !=5) & (bi+i !=11) ){
        this.view.slide("right", r, c);
      }
      else if (bi-i==-1 & (bi+i !=5) & (bi+i !=11)){
        //alert("left");
        this.view.slide("left", r,c);
      } else {return}
      
      this.step();
      
      this.model.state[bi] = Number(cont);
      this.model.state[i] = 0;
      //alert(this.model.state);
      let isGoal = true;
      this.model.goalState.map((cell, i)=>{
        isGoal= isGoal && cell===this.model.state[i]
        
      });
      
      
      this.update();
     if (isGoal){
       
       //alert("Goal" + this.model.state);
       this.goal();
       
     };
      
      
    }
    
    step(){
      
    }
    
    goal(){
      
    }
    
  }