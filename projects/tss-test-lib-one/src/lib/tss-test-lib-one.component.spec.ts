import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssTestLibOneComponent } from './tss-test-lib-one.component';

describe('TssTestLibOneComponent', () => {
  let component: TssTestLibOneComponent;
  let fixture: ComponentFixture<TssTestLibOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssTestLibOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssTestLibOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
