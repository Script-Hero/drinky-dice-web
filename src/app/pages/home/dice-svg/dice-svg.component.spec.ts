import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSvgComponent } from './dice-svg.component';

describe('DiceSvgComponent', () => {
  let component: DiceSvgComponent;
  let fixture: ComponentFixture<DiceSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
