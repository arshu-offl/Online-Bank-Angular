import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFdComponent } from './open-fd.component';

describe('OpenFdComponent', () => {
  let component: OpenFdComponent;
  let fixture: ComponentFixture<OpenFdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenFdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
