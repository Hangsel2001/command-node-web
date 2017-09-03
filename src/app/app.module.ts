import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestinationQueueComponent } from './destination-queue/destination-queue.component';

import { SocketService} from "./socket.service";

@NgModule({
  declarations: [
    AppComponent,
    DestinationQueueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
