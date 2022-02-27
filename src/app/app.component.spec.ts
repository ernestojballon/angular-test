import { AppComponent } from "./app.component"
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";


describe( 'AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    // defin the TestBedConfiguration
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, AppRoutingModule]
    }).compileComponents(); // the component will be compiled
                            // (includes HTML Tremplate)
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });
  it('should have a title AngularJestSetup', () => {
   expect (fixture.componentInstance.title).toEqual ('AngularJestSetup');
  })
  it('adds 1 + 2 to equal 3', () => {
   expect (fixture.componentInstance.sum(1, 2)).toBe(3);
  })
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularJestSetup app is running!');
  });
}
)
