import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

import { QueryComment } from '../query';
declare type myarray = Array<{ content: string, coding: string, name: string }>
@Component({
  selector: 'app-specificquery',
  templateUrl: './specificquery.component.html',
  styleUrls: ['./specificquery.component.css']
})
export class SpecificqueryComponent implements OnInit {
  
  constructor(private service:QueryService){}
  

querycomment:QueryComment={

comment:'',
coding:''

  }
 
  ngOnInit(): void {
  }
  PostComment(){  
      
console.log(this.querycomment.comment)
  }
  PostCode(){    
    console.log(this.querycomment.coding)
      }
  querypara=this.service.getquery();
  querycode=this.service.getcode();

  querytitle=this.service.gettitle();
  
  panelans: myarray = [{ content: "Stack is a linear data structure whereas Heap is a hierarchical data structure. Stack memory will never become fragmented whereas Heap memory can become fragmented as blocks of memory are first allocated and then freed. Stack accesses local variables only while Heap allows you to access variables globally", coding: "int main() // All these variables get memory // allocated on stack int a; int b[10]; int n = 20; int c[n]", name: "jungkook3109" }, { content: "What is Stack and Heap? programming language books explain that value types are created on the stack, and reference types are created on the heap, without explaining what these two things are. I haven't read a clear explanation of this. I understand what a stack is. But, Where and what are they (physically in a real computer's memory)? To what extent are they controlled by the OS or language run-time? What is their scope? What determines the size of each of them? What makes one faster", coding: "", name: "priya272727" }];
  title = 'sandhiya';

  isReadMore = true

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  displayStyle = "none";

  openpopup() {
    this.displayStyle = "block";
  }
  dismisspopup() {
    this.displayStyle = "none";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  }
