import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { delay, of, throwError } from 'rxjs';
import { CustomerData, SignUpService } from '../../services/sign-up.service';
import { SignUpComponent } from './sign-up.component';

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
            signUpCustomer: jest.fn().mockImplementation(() => of({})),
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

    const signUpCustomer = () => {
      component.form.setValue(customer);
      component.form.updateValueAndValidity();
      component.onSubmit();
      fixture.detectChanges();
    };

    beforeEach(() => {
      jest.spyOn(service, 'signUpCustomer');
    });

    it('should not call signUpCustomer if form is invalid', () => {
      component.onSubmit();
      expect(service.signUpCustomer).toHaveBeenCalledTimes(0);
    });

    it('should call signUpCustomer if form is valid', () => {
      signUpCustomer();
      expect(service.signUpCustomer).toHaveBeenCalledTimes(1);
      expect(service.signUpCustomer).toBeCalledWith(customer);
    });

    it('should display the loading indicator after submitting data', () => {
      jest.spyOn(service, 'signUpCustomer').mockImplementationOnce(() => {
        return of({}).pipe(delay(3000));
      });
      signUpCustomer();
      const loading = fixture.debugElement.query(
        By.css("[data-test='sign-up-loading']")
      )?.nativeElement;
      expect(loading).toBeTruthy();
    });

    it('should display the success indicator after successful sign-up', () => {
      signUpCustomer();
      const success = fixture.debugElement.query(
        By.css("[data-test='sign-up-success']")
      )?.nativeElement;
      expect(success).toBeTruthy();
    });

    it('should display the error indicator after failed sign-up', () => {
      jest.spyOn(service, 'signUpCustomer').mockImplementationOnce(() => {
        return throwError(() => 'Error!');
      });
      signUpCustomer();
      const error = fixture.debugElement.query(
        By.css("[data-test='sign-up-error']")
      )?.nativeElement;
      expect(error).toBeTruthy();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });
});
