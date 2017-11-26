import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOverviewComponent } from './block-overview.component';

describe('BlockOverviewComponent', () => {
  let component: BlockOverviewComponent;
  let fixture: ComponentFixture<BlockOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
