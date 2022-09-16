import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  save() {
    // console.log(this.register.value);
    this.brandService.submitform(this.register.value).subscribe((response: any) => {
      this.responsedata = response.results;
      console.log('Edit Successfully!');
      alert("Edit Successfully!")
      this.router.navigateByUrl('/contact');
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