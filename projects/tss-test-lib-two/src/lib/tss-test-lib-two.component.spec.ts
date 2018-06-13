import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssTestLibTwoComponent } from './tss-test-lib-two.component';

describe('TssTestLibTwoComponent', () => {
  let component: TssTestLibTwoComponent;
  let fixture: ComponentFixture<TssTestLibTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssTestLibTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssTestLibTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
