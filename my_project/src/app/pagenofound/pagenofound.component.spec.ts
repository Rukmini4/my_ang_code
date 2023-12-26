import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenofoundComponent } from './pagenofound.component';

describe('PagenofoundComponent', () => {
  let component: PagenofoundComponent;
  let fixture: ComponentFixture<PagenofoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenofoundComponent]
    });
    fixture = TestBed.createComponent(PagenofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
