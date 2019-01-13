import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})



export class StreamComponent implements OnInit {

  serverURI : string ; 
  filelist : File[]; 
  private socket;

  constructor() { this.serverURI="http://localhost:4000"}
 
  ngOnInit() {
  }

  start() {
    console.log("coucou");
    this.socket = socketIo(this.serverURI);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
}

public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
        this.socket.on('message', (data: Message) => observer.next(data));
    });
}

public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event, () => observer.next());
    });
}

};

export class File
{
fileName : string;
filePath : string;
};