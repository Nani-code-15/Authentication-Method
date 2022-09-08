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
       
messageClass=''
message=''
customerid: any;
editdata:any;

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
  updateBrandData(id:any){
this.brandService.find(id).subscribe((response:any)=>{
  this.editdata=response;
});
    this.register=new FormGroup({
      name:new FormControl(this.editdata.name),
      logoUrl:new FormControl(this.editdata.logoUrl),
      description:new FormControl(this.editdata.description),
     })
  }
  
}



//   id!: number;
//   products!: Products;
//   form!: FormGroup;
//   brandData: any;
     
//   /*------------------------------------------
//   --------------------------------------------
//   Created constructor
//   --------------------------------------------
//   --------------------------------------------*/
//   constructor(
//     private formBuilder: FormBuilder,
//     public brandService: BrandService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }
     
//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.brandService.find(this.id).subscribe((response:any)=>{
//     this.brandData = response.results;
//     // this.brandData.forEach((element: any) => {
//     // console.log(element.id)
//     // console.log(element.logoUrl)
//     // console.log(element.name)
//     // console.log(element.description)

 
//    })
       
//     this.form = new FormGroup({
//       name: new FormControl('', [Validators.required]),
//       logoUrl: new FormControl('', [Validators.required]),
//       describtion: new FormControl('', Validators.required)
//     });
//   }
     
//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   get f(){
//     return this.form.controls;
//   }
     
//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   submit(){
//     // console.log(this.form.value);
//     // this.brandService.update(this.id, this.form.value).subscribe((response:any)=>{
//     //   this.brandData = response.results;
      
//     //      console.log('Post updated successfully!');
//     //      this.router.navigateByUrl('/contact');
//     //   });   
    
//   }
    
// }