import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { BrandService } from '../service/brand.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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


brandData: Products[] = [];

constructor(public brandService: BrandService) { }

ngOnInit(): void {
  this.getAllBrand();
}
getAllBrand() {
  this.brandService.getAllBrand().subscribe((result: Products[]) => {
    this.brandData = result;
  console.log(this.brandData);
  });


}
}