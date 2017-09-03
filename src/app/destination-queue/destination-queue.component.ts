import { Component, OnInit } from '@angular/core';
import { SocketService} from '../socket.service';

@Component({
  selector: 'app-destination-queue',
  templateUrl: './destination-queue.component.html',
  styleUrls: ['./destination-queue.component.css']
})
export class DestinationQueueComponent implements OnInit {

  constructor(private socketService:SocketService) { 


  }
  private destination;
  private queue;

  ngOnInit() {
    this.socketService.getMessage("destination").subscribe((data)=> {
      this.destination = data;
    });
    this.socketService.getMessage("queue").subscribe((data)=> {
      this.queue = data;
    })
  }

}
