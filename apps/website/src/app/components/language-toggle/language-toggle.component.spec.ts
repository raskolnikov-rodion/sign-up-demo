import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LanguageToggleComponent } from './language-toggle.component';

describe('LanguageToggleComponent', () => {
  let fixture: ComponentFixture<LanguageToggleComponent>;
  let component: LanguageToggleComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when clicked', () => {
    jest.spyOn(component.toggle, 'emit');
    const toggleEl = fixture.debugElement.query(By.css('button'))
      ?.nativeElement as HTMLButtonElement;
    toggleEl?.click();
    expect(component.toggle.emit).toHaveBeenCalled();
    expect(component.toggle.emit).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
