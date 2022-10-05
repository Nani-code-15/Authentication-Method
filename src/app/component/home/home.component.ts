import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Products } from 'src/app/product/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  messageclass = ''
  message = ''
  customerid: any;
  editdata: any;
  responsedata: any;
  register!: FormGroup;

  constructor(public brandService: BrandService, private route: ActivatedRoute, private _fb: FormBuilder, private router: Router) {
    this.customerid = this.route.snapshot.paramMap.get('id');
    if (this.customerid != null) {
      this.updateBrandData(this.customerid);
    }

  }


  ngOnInit(): void {
    this.register = this._fb.group({
      id: new FormControl({ value: "", disabled: true }),
      name: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    })
  }

  save(){
    if(this.register.valid){
      console.log(this.register.value);
      this.brandService.submitform(this.register.value).subscribe((response:any)=>{
        if(response!=null){
          if(this.responsedata.message == 'added') {
            this.message = "saved successfully."
            this.messageclass = "sucess"
            this.clearBrandData();
          } else if (this.responsedata.message == 'updated') {
            this.message = "Customer saved successfully."
            this.messageclass = "sucess"
          } else {
            this.message = "Failed to Save"
            this.messageclass = "error"
          }
        }
      });
    }else{
      // alert("please enter valid data");
      this.message="please enter valid data" 
      this.messageclass="error"
    }
  }

  // save() {
  //   // console.log(this.register.value);
  //   this.brandService.submitform(this.register.value).subscribe((response: any) => {
  //     this.responsedata = response.results;
  //     console.log('Post created successfully!');
  //     alert("Post created successfully!")
  //     this.router.navigateByUrl('/contact');

  //   })
  // }


  clearBrandData() {
    this.register = new FormGroup({
      name: new FormControl(""),
      logoUrl: new FormControl(""),
      description: new FormControl(""),
    })
  }

  updateBrandData(id: any) {
    this.brandService.getId(id).subscribe((response: any) => {
      this.editdata = response.results;
      this.register = new FormGroup({
        id: new FormControl(this.editdata.id),
        name: new FormControl(this.editdata.name),
        contactNumber: new FormControl(this.editdata.contactNumber),
        description: new FormControl(this.editdata.description),
      });
    });
  }
  get id() {
    return this.register.get("id");
  }
  get name() {
    return this.register.get("name");
  }
  get contactNumber() {
    return this.register.get("contactNumber");
  }


}
