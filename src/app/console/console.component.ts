import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsoleComponent implements OnInit {

  constructor(private srv: SocketService) { }
  model: any = {
    type: 'destination',
    data : ''
  };

  ngOnInit() {
  }

  send() {
    this.srv.send(this.model.type, this.model.data);
    this.model.data = '';
  }

}
