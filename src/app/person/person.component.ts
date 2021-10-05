import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  firstName = ""
  lastName = ""
  age = ""
  phoneNumber = ""
  emailAddress = ""
  personData = ""

  constructor() { }

  ngOnInit(): void {
  }

  onSavePersonData(){
    this.personData = "First Name:"+this.firstName+" "+"Last Name:"+this.lastName+" "+"Age:"+this.age+" "+"Phone #:"+this.phoneNumber+" "+"Email Address:"+this.emailAddress
  }

}
