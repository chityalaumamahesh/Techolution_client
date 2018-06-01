import { TestBed, async  } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserModule , By} from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Make/ Model Details');
  }));

it('check if specific items are present in makesArr', async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
   expect(app.makeArr).toContain('Ford');
   expect(app.makeArr).toContain('Acura');
}));

it('check if specific items are present in modelsArr', async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
   expect(app.modelsArr).toContain('Edge');
   expect(app.modelsArr).toContain('Escape');
   expect(app.modelsArr).toContain('ILX');
   expect(app.modelsArr).toContain('MDX');
}));
it('menu should be closed by default', () =>  {
    // Here I want to check the visibility of the menuDropDownButtonEl element
    const fixture = TestBed.createComponent(AppComponent);
    const menuDropDownButtonDe = fixture.debugElement.query(By.css('#models'));
    const menuDropDownButtonEl = menuDropDownButtonDe.nativeElement;
  expect(menuDropDownButtonEl.classList.contains(':visible')).toBe(false); // <-- not working
});
});

