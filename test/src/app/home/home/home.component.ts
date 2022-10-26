import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

isTick:boolean=false
isClicked:boolean=false
wrong=""
correct="Ryzen 5"
selectedValue=""
core=""

  constructor() {
  }

  ngOnInit(): void {
  }
showModal(){
  this.isTick=!this.isTick
  
}
Dialog(){

}
isCorrect(){
  this.isClicked=!this.isClicked
}
radioChange(event:any){
this.selectedValue=event.target.value;
}
showAnswer(){
   
   if(this.selectedValue==this.correct){
     
     this.wrong=""
   }
   else{
     this.wrong=this.selectedValue

     
   }
 }
}
  
  


  



