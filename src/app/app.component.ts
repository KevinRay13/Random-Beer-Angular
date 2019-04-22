import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let endpoint = 'https://api.punkapi.com/v2/beers/random';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Random Beer';
  results = '';
  private beers = [];
  constructor(private http: HttpClient) {}

  get_products(): void {
    this.http.get(endpoint).subscribe((res: any[]) => {
      console.log(res);
      this.beers = res;
    });
  }

  ngOnInit(): void {
    this.http.get(endpoint).subscribe(data => {
      console.log(data);
    });

    interface UserResponse {
      name: string;
      tagline: string;
      description: string;
      res: any;
    }

    this.http.get<UserResponse>(endpoint).subscribe(res => {
      console.log(res[0].image_url);
      console.log('Beer: ' + res[0].name);
      console.log('Bio: ' + res[0].tagline);
      console.log('Company: ' + res[0].description);
      // this.beer = res;
    });
  }
}
