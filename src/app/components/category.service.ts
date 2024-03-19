import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://localhost:5278/api/Category";

  httpClient = inject(HttpClient);

  constructor() { }

  create(categoryModel: any) {
    return this.httpClient.post(this.baseUrl + "/Create", categoryModel);
  }
  getAll(){
    return this.httpClient.get(this.baseUrl + "/Get");
  }
}
