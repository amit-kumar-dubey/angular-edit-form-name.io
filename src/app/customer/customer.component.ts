import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {CustomersService} from '../shared/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerComponent implements OnInit {
   public UserForm: FormGroup;
   public fromControl: FormControl;
   public onSubmitForm: boolean;
   
   public showSuccessMessageUpdated: boolean;
   public showSuccessMessageAdded: boolean;
   
   
   public $key: FormControl;
   public name: FormControl;
   public email: FormControl;
   public phonenumber: FormControl;
   public phonenumberPattern = '^((\\+[1-9]{1,3}-?)|0)?[0-9]{10}$';
   public EmailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
   public username = '^(?=.*[a-zA-Z]).{1,50}$';
  //  private name: FormControl;
  //  private Email: FormControl;
  //  private PhoneNumber: FormControl;

  constructor(private customersService: CustomersService) {}

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
    }

    createFormControls() {
      this.$key = new FormControl(null);
      // tslint:disable-next-line:max-line-length
      this.name  = new FormControl('', [ Validators.minLength(1), Validators.maxLength(50), Validators.required, this.noWhitespaceValidator,  Validators.pattern(this.username)]);
      this.email =  new FormControl('', [ Validators.required, Validators.pattern(this.EmailPattern), this.noWhitespaceValidator]);
      // tslint:disable-next-line:max-line-length
      this.phonenumber = new FormControl('', [ Validators.required, Validators.pattern(this.phonenumberPattern), Validators.minLength(10), this.noWhitespaceValidator]);
    }

    createForm() {
      this.UserForm = new FormGroup({
        $key: this.$key,
        name: this.name,
        email: this.email,
        phonenumber: this.phonenumber

      });
    }
    // exampleMethodParent($event) {
    //   alert('prent method ');
    //   console.log($event);
    // }
    editFormCustomer($event) {
      const customer = $event;
      alert(customer);
      this.UserForm.setValue(customer);
    }
    onSubmitFrom(User: any) {
      this.onSubmitForm = true;
      console.log(this.UserForm.value);
      if (this.UserForm.invalid) {
        return;
      } else if (this.UserForm.valid) {
        if (this.UserForm.get('$key').value == null) {
         // alert('From Submit here.....');
           console.log(this.UserForm.value);
           this.customersService.insertCustomer(this.UserForm.value);
           this.showSuccessMessageAdded = true;
        } else {
          this.customersService.updateV(this.UserForm.value);
          this.showSuccessMessageUpdated = true;
        }
        this.onSubmitForm = false;
          setTimeout(() => {
            this.showSuccessMessageAdded = false;
            this.showSuccessMessageUpdated = false;

          }, 3000);
          this.UserForm.reset();
          this.UserForm.setValue({
            $key: null,
            name: '',
            email: '',
            phonenumber: ''
          });
      }
    }

    // use to get the controls of the form fields

    get f() { return this.UserForm.controls; }

    ngOnInit() {
    this.createFormControls();
    this.createForm();
    // Old method for from creations
    // this.UserForm = new FormGroup({
    //   $key: new FormControl(null),
    //   name: new FormControl(null, [ Validators.required, this.noWhitespaceValidator]),
    //   email: new FormControl(null, [ Validators.required, Validators.pattern(this.EmailPattern), this.noWhitespaceValidator]),
    // tslint:disable-next-line:max-line-length
    //   phonenumber: new FormControl(null, [ Validators.required, Validators.pattern(this.phonenumberPattern), Validators.minLength(8), this.noWhitespaceValidator])
    // });
  }


}
