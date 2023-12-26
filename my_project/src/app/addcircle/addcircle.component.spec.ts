import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcircleComponent } from './addcircle.component';

describe('AddcircleComponent', () => {
  let component: AddcircleComponent;
  let fixture: ComponentFixture<AddcircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcircleComponent]
    });
    fixture = TestBed.createComponent(AddcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
