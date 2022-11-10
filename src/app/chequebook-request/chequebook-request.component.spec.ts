import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequebookRequestComponent } from './chequebook-request.component';

describe('ChequebookRequestComponent', () => {
  let component: ChequebookRequestComponent;
  let fixture: ComponentFixture<ChequebookRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequebookRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequebookRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
