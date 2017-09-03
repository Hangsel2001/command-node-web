import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationQueueComponent } from './destination-queue.component';

describe('DestinationQueueComponent', () => {
  let component: DestinationQueueComponent;
  let fixture: ComponentFixture<DestinationQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
