import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NewService } from './new.service';


@Component({
  selector: 'new',
  templateUrl: './new.html',
  styleUrls: ['./new.scss']
})
export class NewComponent {
    public data: any;
    public zoho_id: string;
    public zoho: object =
    {
      name: "",
      phone: "",
      fax: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    };

  settings = {
    pager: {
      perPage: 15,
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
      username: {
        title: 'Username',
        type: 'string'
      },
      email: {
        title: 'Email',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'string'
      },
    },
  };

  ngOnInit() {
    this.service
    .getZohoID()
    .subscribe(data => this.data = data)
  }

  source: LocalDataSource = new LocalDataSource();
  constructor(protected service: NewService) {
      this.service
      .getData()
      .then((data) => {
          this.source.load(data);
      });
  }

  onChange(id){
    this.service
    .getZohoAccount(id)
    .subscribe(zoho => this.zoho = zoho)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}