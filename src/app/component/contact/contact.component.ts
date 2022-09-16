import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { Products } from 'src/app/product/products';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  constructor(public brandService: BrandService) {
    this.getAll();
   }
  
  ngOnInit(): void {
  }
  brandData: Products[]=[];
  getAll(){
    this.brandService.getAll().subscribe((response:any)=>{
      this.brandData=response.results;
    })

  }

  delete(id:any){
    if(confirm("Do you want to remove?")){
    this.brandService.delete(id).subscribe((response:any) => {
      this.getAll();
    });
  }
  }
  Edit(id: any) {
    if(confirm("Do you want to edit?")){
      this.brandService.getId(id).subscribe((response:any) => {
        this.getAll();
      });
    }
    }
  }



  // brandData: Products[] = [];

  // constructor(public brandService: BrandService) { }
  
 
  // getAllBrand(): void {
  //       this.brandService.getAllProducts().subscribe(
  //         (results: Products[]) => {
  //           this.brandData = results;
  //           console.log(results)
  //         },
  //         (error: any) => console.log(error),
  //         () => console.log("Complete")
  //       )
  //     }
  // ngOnInit(): void {
  //   this.getAllBrand();
  // }
  // }


// brandData: Products[] = [];


// getAllBrand() {
//   this.brandService.getAllBrand().subscribe((result: Products[]) => {
//     this.brandData = result;
//   console.log(this.brandData);
//   });


// }
// }



  // this.brandService.getAll().subscribe((response:any)=>{
  //   this.brandData = response.results;
    // this.brandData.forEach((element: any) => {
    //   // console.log(element.id)
    //   // console.log(element.logoUrl)
    //   // console.log(element.name)
    //   // console.log(element.description)
    // });
  // })
