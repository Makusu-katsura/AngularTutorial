import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewSever=false
  serverCreationStatus='No server was created'
  serverName='TestServer'
  serverCreated=false
  servers=['Testserver','Testserve 2']
  constructor(private form:FormsModule) { 
    setTimeout(() => {
      this.allowNewSever=true
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true
    this.servers.push(this.serverName)
    this.serverCreationStatus='Server was created' +this.serverName
  }
  onUpdataServerName($event){
    console.log($event)
    this.serverName=(<HTMLInputElement>$event.target).value
    // this.serverName=$event.target.value
  }

}
