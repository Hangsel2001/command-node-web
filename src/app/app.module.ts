import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DestinationQueueComponent } from './destination-queue/destination-queue.component';

import { SocketService} from './socket.service';
import { ConsoleComponent } from './console/console.component';
import { BlockOverviewComponent } from './block-overview/block-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationQueueComponent,
    ConsoleComponent,
    BlockOverviewComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
