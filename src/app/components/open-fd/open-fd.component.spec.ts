import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OpenFDComponent } from './open-fd.component';


// describe('OpenFDComponent', () => {
//   let component : OpenFDComponent;
//   let fixture : ComponentFixture<OpenFDComponent>;
//   let de : DebugElement;
//   let el : HTMLElement;

//   beforeEach(async (() => {
//     TestBed.configureTestingModule({
//       declarations : [ OpenFDComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(OpenFDComponent);
//     component = fixture.componentInstance;
//     de = fixture.debugElement.query(By.css("h2"));
//     el = de.nativeElement;
//     fixture.detectChanges();

//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it("testing Component name", () =>{
//   //   expect(component.Componentname).toBe("open_FD");
//   // });

//   // it("testing Component type", () =>{
//   //   expect(component.UsersInfo).toBe(typeof(Array));
//   // });

//   // it('should render title in a h2 tag', () => {
//   //   const fixture = TestBed.createComponent(OpenFDComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.debugElement.nativeElement;
//   //   expect(compiled.querySelector('.header').textContent).toContain('Opening New FD');
//   // });

//   it('should render title in h2 tag', () =>{
//     // expect(component.title).toBe('Opening New FD');
//     // expect(title.innerHTML).toBe('Opening New FD');
//     expect(el.textContent).toBe('Opening New FD');
//   });
// });


  // it("testing html element", () =>{
  //   const data = fixture.nativeElement;
  //    expect(data.querySelector(".heading").textContent).toContain("Opening New FD");
  //  });














// describe('OpenFDComponent', () => {
//   let component: OpenFDComponent;
//   let fixture: ComponentFixture<OpenFDComponent>;
//  // const initialState = { loggedIn: false };

//   beforeEach((() => {
//     TestBed.configureTestingModule({
//       declarations: [OpenFDComponent],
//       // imports: [MaterialModule, FormsModule, RouterTestingModule, UserDomainModule,
//       //   HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule, StoreModule.forRoot(userReducer)],
//       providers: [
//           // provideMockStore({initialState}),
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(OpenFDComponent);
//     component = fixture.componentInstance;
//     // component.users = component.store.pipe(select(getUsers));
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

