import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ServiceContactService}  from '../service-contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


export class ContactListComponent implements OnInit {
  results =[];
  notSelected= true;
  address: string;
  selectedUser =[];

  constructor( public contactService : ServiceContactService) { }
 
  nombres=['hola','paco']
  ngOnInit() {
        this.getUsers();
    } 
  
    refresh(){
      this.results=[];
       this.getUsers();
    }

    getUser(i){
      this.selectedUser.push(i);
      this.address = i[0].location.city +","+i[0].location.street.name+","+i[0].location.street.number
      this.notSelected=false;
    }

    goBack(){
      this.notSelected=true;
      this.selectedUser.pop();
    }

    getUsers(){
      for (let i=0 ; i<6;i++){
        this.contactService.getUsers().subscribe(data=>{
          console.log(data['results'])
          this.results.push(data['results'])
     });
      }
    }
  }



