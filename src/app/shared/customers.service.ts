
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( public firebase: AngularFireDatabase ) {
    firebase.list('customers');
  }
  customerList: AngularFireList<any>;

  // private QuestionValue = new BehaviorSubject<any>(null);
  //   QuestionDataObsrv = this.QuestionValue.asObservable();
  //   setQuestionData(QuestionValue: any) {
  //       this.QuestionValue.next(QuestionValue);
  //   }
  getCustomers() {
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }
  editForm(customer, UserForm) {
    UserForm.setValue(customer);
  }
  updateV(customer) {
    this.customerList.update(customer.$key,
      {
        name: customer.name,
        email: customer.email,
        phonenumber: customer.phonenumber
      });
  }
  insertCustomer(customer) {
    console.log(customer);
    this.customerList.push({
      name: customer.name,
      email: customer.email,
      phonenumber: customer.phonenumber
    });
  }
  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
}
