import {Component, inject} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    MatCard,
    FormsModule,
    MatInput,
    MatFormField,
    MatButton
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  service = inject(CategoryService);

  categoryModel: any = {
    name: ""
  }

  constructor() {
  }


  createCategory() {
    this.service.create(this.categoryModel).subscribe(result => {
        alert("Category Saved")
      }
    );
  }
}
