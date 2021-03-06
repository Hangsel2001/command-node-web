import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  constructor() {
    this.socket = io('http://localhost:8080');
   }

   socket: any;

   getMessage(type): Observable<any> {
     const observable = new Observable(observer => {
        this.socket.on(type, (message) => {
          observer.next(message);
        });
     });
     return observable;
   }

   send(type, data): Promise<any> {
     return new Promise((resolve, reject) => {
      this.socket.emit(type, data);
     });
   }

}
