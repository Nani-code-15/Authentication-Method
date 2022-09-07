import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl} from '@angular/forms';

      
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
messageClass=''
message=''

  constructor(
        public brandService: BrandService,
       
      ) { }
ngOnInit(): void {
}

   register=new FormGroup({
    id:new FormControl({value:'',disabled:true}),
    name:new FormControl("", Validators.required),
    logoUrl:new FormControl("", Validators.required),
    description:new FormControl("", Validators.required),
   })

   save(){
    if(this.register.valid){
    // console.log(this.register.value);
    this.brandService.create(this.register.value).subscribe((response:any)=>{
      if(response!=null){
        this.message="successfully"
        this.messageClass="sucess"
        this.clearBrandData();
      }
    });
  }else{
    this.message="please enter valid data"
    this.messageClass="error"
  }
  }

  clearBrandData(){
    this.register=new FormGroup({
      name:new FormControl(""),
      logoUrl:new FormControl(""),
      description:new FormControl(""),
     })
  }
  
}
     
//   productForm!: FormGroup;
//   brandData: any;
//   router: any;
     
//   /*------------------------------------------
//   --------------------------------------------
//   Created constructor
//   --------------------------------------------
//   --------------------------------------------*/
//   constructor(
//     public brandService: BrandService,
//     private formBuilder: FormBuilder,
  
//   ) { }
     
//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   ngOnInit(): void {
//     this.productForm = this.formBuilder.group({
//      name : ["", Validators.required],
//      logoUrl : ["", Validators.required],
//      description : ["", Validators.required]
//     });
//   } 
     
//   // /**
//   //  * Write code on Method
//   //  *
//   //  * @return response()
//   //  */
//   // get f(){
//   //   return this.form.controls;
//   // }
     
//   // /**
//   //  * Write code on Method
//   //  *
//   //  * @return response()
//   //  */
//   submit(){
//     console.log(this.productForm.value);
//     this.brandService.create(this.productForm.value).subscribe((response:any)=>{
//       this.brandData = response.results;
//          console.log('Post created successfully!');
//          this.router.navigateByUrl('/contact');
//     })
//   }
//   // submit() {
//   //   console.log(  this.productForm.valid);
      
    
//   // }
// }
