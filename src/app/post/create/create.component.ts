import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl} from '@angular/forms';


      
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
messageclass=''
message=''
customerid: any;
editdata:any;
  brandData: any;

  constructor(
        public brandService: BrandService,
        private route: ActivatedRoute
      ) { 
        this.customerid=this.route.snapshot.paramMap.get('id');
        // console.log(this.customerid);
        if(this.customerid!=null){
          this.updateBrandData(this.customerid);
        }

      }
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
    console.log(this.register.value);
    this.brandService.create(this.register.value).subscribe((response:any)=>{
      if(response!=null){
        this.brandData=response.results;
          if (this.brandData.message == 'added') {
            this.message = "saved successfully."
            this.messageclass = "sucess"
        this.clearBrandData();
      } else if (this.brandData.message == 'updated') {
        this.message = "Customer saved successfully."
        this.messageclass = "sucess"
      } else {
        this.message = "Failed to Save"
        this.messageclass = "error"
      }
      }
    });
  }else{
    this.message="please enter valid data"
    this.messageclass="error"
  }
  }

  clearBrandData(){
    this.register=new FormGroup({
      name:new FormControl(""),
      logoUrl:new FormControl(""),
      description:new FormControl(""),
     })
  }
  updateBrandData(id:any){
this.brandService.find(id).subscribe((response:any)=>{
  this.editdata=response;
  console.log(this.editdata.name);
    this.register=new FormGroup({
      id: new FormControl(this.editdata.id),
      name:new FormControl(this.editdata.name),
      logoUrl:new FormControl(this.editdata.logoUrl),
      description:new FormControl(this.editdata.description),
     });
    });
  }
  get name(){
    return this.register.get("name");
  }
  get logoUrl(){
    return this.register.get("logoUrl");
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
