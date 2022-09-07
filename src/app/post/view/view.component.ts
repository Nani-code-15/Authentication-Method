import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/product/products';
     
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
      
  id!: number;
  products!: Products;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
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
    this.id = this.route.snapshot.params['productsId'];
         
    this.brandService.find(this.id).subscribe((data: Products)=>{
      this.products = data;
    });
  }
     
}
// constructor(public brandService: BrandService) { }

// ngOnInit(): void {
//   this.getBrandId();
// }
// brandData: any;
// getBrandId(){
//   this.brandService.find().subscribe((response:any)=>{
//     this.brandData = response.results;
//     this.brandData.forEach((element: any) => {
//       console.log(element.id)
//       console.log(element.logoUrl)
//       console.log(element.name)
//       console.log(element.description)
//     });
//   })
// }