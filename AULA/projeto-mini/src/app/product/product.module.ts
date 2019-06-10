import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import { RegisterProductComponent } from './register-product/register-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { routing } from './product.routing';


@NgModule({
  declarations: [RegisterProductComponent, EditProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class ProductModule { }
