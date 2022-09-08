import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/product/products';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
      
  essageClass=''
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
        this.essageClass="sucess"
        this.clearBrandData();
      }
    });
  }else{
    this.message="please enter valid data"
    this.essageClass="error"
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