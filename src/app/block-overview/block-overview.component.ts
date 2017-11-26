import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-block-overview',
  templateUrl: './block-overview.component.html',
  styleUrls: ['./block-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlockOverviewComponent implements OnInit {
  private blocks: any = {};
  constructor(private socket: SocketService ) {
    socket.getMessage('block').subscribe((data) => {
      if (data && data.name) {
        this.blocks[data.name] = data;
      }
    });
   }

  ngOnInit() {
  }

}
