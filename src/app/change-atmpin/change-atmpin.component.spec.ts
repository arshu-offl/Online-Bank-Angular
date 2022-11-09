import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAtmpinComponent } from './change-atmpin.component';

describe('ChangeAtmpinComponent', () => {
  let component: ChangeAtmpinComponent;
  let fixture: ComponentFixture<ChangeAtmpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAtmpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAtmpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
