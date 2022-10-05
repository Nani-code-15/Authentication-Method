import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Products } from 'src/app/product/products';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  // dataForm: Products={
  //   id: 0,
  //   name: '',
  //   logoUrl: '',
  //   description: ''
  // }



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

  brandData: Products[]=[];
  getAll(){
    this.brandService.getAll().subscribe((response:any)=>{
      this.brandData=response.results;
    })

  }

  ngOnInit(): void {
    this.register = this._fb.group({
      id: new FormControl({ value: "", disabled: true }),
      name: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    })
  }
 
 close(){
  this.clearBrandData();
 }

  save(){
    if(this.register.valid){
      console.log(this.register.value);
      this.brandService.submitform(this.register.value).subscribe((response:any)=>{
        if(response!=null){
          if(response) {
            this.clearBrandData();
            Swal.fire('saved successfully.')
      
            // this.message = "saved successfully."
            // this.messageclass = "sucess"
             window.location.reload();
            // this.router.navigate(['/contact'])
          } else if (response) {
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
      contactNumber: new FormControl(""),
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
