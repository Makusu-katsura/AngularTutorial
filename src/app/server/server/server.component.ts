import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // templateUrl:'<app-server></app-server>',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']

})
export class ServerComponent implements OnInit {
  serverId:number =10
  serverStatus:string
  constructor() { }

  ngOnInit(): void {
  }
 getServerStatus(){
  return this.serverStatus=Math.random()>0.5?'online':'offline';
 }
 getColor(){
   console.log(this.serverStatus)
   return this.serverStatus =='online'? 'green':'red';
 }
}
