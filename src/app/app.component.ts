import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drm-ui';

  constructor(private fb: FormBuilder) { }
/*
  productForm: FormGroup;
  registrationForm: FormGroup;
*/
 public codec
 public hls
 public field
  public addresses: any[] = [{
    height: '',
    width: '',
    bitrate: '',
  
  }];
  public array = [
    {
      codec : '',
      format : '',
      field : this.field,
      data : this.addresses
    }
  ]

  public page = 1

next(){
 this.page++
}

prev(){
  this.page--
}

  ngOnInit() {

    /* Initiate the form structure */
   /*
    this.registrationForm = this.fb.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({ 
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    });
  */
  
    /*
    get sellingPoints() {
      return this.productForm.get('selling_points') as FormArray;
    }
  */
  

  

 console.log(this.array)

  }
  addAddress() {
    this.addresses.push({
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }

}
