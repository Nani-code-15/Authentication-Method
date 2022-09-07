import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/product/products';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
      
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
       
  id!: number;
  products!: Products;
  form!: FormGroup;
  brandData: any;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private formBuilder: FormBuilder,
    public brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.brandService.find(this.id).subscribe((response:any)=>{
    this.brandData = response.results;
    // this.brandData.forEach((element: any) => {
    // console.log(element.id)
    // console.log(element.logoUrl)
    // console.log(element.name)
    // console.log(element.description)

 
   })
       
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      logoUrl: new FormControl('', [Validators.required]),
      describtion: new FormControl('', Validators.required)
    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    // console.log(this.form.value);
    // this.brandService.update(this.id, this.form.value).subscribe((response:any)=>{
    //   this.brandData = response.results;
      
    //      console.log('Post updated successfully!');
    //      this.router.navigateByUrl('/contact');
    //   });   
    
  }
    
}