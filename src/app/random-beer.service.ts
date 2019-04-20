import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
let endpoint = 'https://api.punkapi.com/v2/beers/random';
@Injectable({
  providedIn: 'root'
})
export class RandomBeerService {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get(endpoint).subscribe(data => {
      console.log(data);
    });
  }
}
