import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {CustomersService} from '../shared/customers.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  constructor(public customerService: CustomersService) { }
  @Output() editClick: EventEmitter<any> = new EventEmitter();

  // @Output() exampleOutput = new EventEmitter<string>();
  // exampleChild = 'Hello Angular 7';


  public customerlistData: any;
  customerArray = [];
  showDeletedMessage: boolean;

  // exampleMethodChild() {
  //   this.exampleOutput.emit(this.exampleChild);
  // }

  editForm(customer: any) {
    this.editClick.emit(customer);
  }
  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.customerService.deleteCustomer($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }
  ngOnInit() {
    this.customerlistData = this.customerService.getCustomers();
    console.log(this.customerlistData);
    this.customerService.getCustomers().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

}
