import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerData, SignUpService } from '../../services/sign-up.service';
import { SignUpComponent } from './sign-up.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let service: SignUpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent, NoopAnimationsModule],
      providers: [
        {
          provide: SignUpService,
          useValue: {
            signUpCustomer: jest
              .fn()
              .mockImplementation(() => ({ subscribe: jest.fn() })),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SignUpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    const customer: CustomerData = {
      firstName: 'John',
      lastName: 'Cena',
      email: 'jc@signup.example.com',
    };

    beforeEach(() => {
      jest.spyOn(service, 'signUpCustomer');
    });

    it('should not call signUpCustomer if form is invalid', () => {
      component.onSubmit();
      expect(service.signUpCustomer).toHaveBeenCalledTimes(0);
    });

    it('should call signUpCustomer if form is valid', () => {
      component.form.setValue(customer);
      component.form.updateValueAndValidity();
      component.onSubmit();
      expect(service.signUpCustomer).toHaveBeenCalledTimes(1);
      expect(service.signUpCustomer).toBeCalledWith(customer);
    });

    it('should display the loading indicator after submitting data', () => {
      component.form.setValue(customer);
      component.form.updateValueAndValidity();
      component.onSubmit();
      fixture.detectChanges();
      const loading = fixture.debugElement.query(
        By.css("[data-test='sign-up-loading']")
      ).nativeElement;
      expect(loading).toBeTruthy();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });
});
