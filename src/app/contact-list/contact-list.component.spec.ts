import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import {Component} from '@angular/core';

export class CardOverviewExample {}



describe('ContactListComponent', () => {
var RandomUserGenerator = require('random-user-generator');
var rug = new RandomUserGenerator();
rug.getOne(function (user) {
  console.log(user);
});

  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
