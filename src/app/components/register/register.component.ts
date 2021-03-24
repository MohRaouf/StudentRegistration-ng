import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  isValidName:boolean=false;
  isValidAge:boolean=false;

  name:string;
  set Name(nameValue:string){
    this.name=nameValue;
    this.isValidName=(this.name.length > 8) ? true : false; 
  }

  age:number;
  set Age(ageValue:number){
    this.age=ageValue
    this.isValidAge=(this.age > 18 && this.age < 35) ? true : false; 
  }
  register(){
    this.newRegistration.emit({ name:this.name, age:this.age})
    this.Age=null
    this.Name=""
  }

  @Output() newRegistration:EventEmitter<{name:string,age:number}> = new EventEmitter()

}
