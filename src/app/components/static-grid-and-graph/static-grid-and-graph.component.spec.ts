import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticGridAndGraphComponent } from './static-grid-and-graph.component';

describe('StaticGridAndGraphComponent', () => {
  let component: StaticGridAndGraphComponent;
  let fixture: ComponentFixture<StaticGridAndGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticGridAndGraphComponent]
    });
    fixture = TestBed.createComponent(StaticGridAndGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
