import { TestBed } from '@angular/core/testing';
import { SignUpStateComponent } from './sign-up-state.component';

describe('SignUpStateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpStateComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SignUpStateComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
