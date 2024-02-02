import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName = "TestServer";
  serverCreate: boolean = false;
  servers= ['Test-Server', 'Test-Server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  ngOnInit(): void {

  }
  onCreateServer() {
    this.serverCreationStatus = `Server was created ${this.serverName}`;
    this.serverCreate = true;
    this.servers.push(this.serverName);
  }

  updateServerName(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
