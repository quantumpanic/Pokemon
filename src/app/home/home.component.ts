import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MyData, MyDataItem } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private dataService: DataService, private router: Router) {}

  items: MyDataItem[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';
  currentData: string = '';

  ngOnInit() {
    this.dataService.getData().subscribe(
      (data: MyData) => {
        // handle the data
        this.items = data.results;
        console.log(data);
        this.searchItems();
      },
      (error) => {
        // if error
        console.error(error);
      }
    );
  }

  searchItems() {
    if (this.searchTerm) {
      // Check this.items
      if (Array.isArray(this.items)) {
        // filter it
        this.filteredItems = this.items.filter((item) =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          // console.log("A")
        );
      }
    } else {
      // search is empty, reset filteredItems
      this.filteredItems = [...this.items];
    }
  }

  itemDetail(item:string, url:string) {
    // this.showSplashScreen = false; // hide splash screen
    console.log("BOO");
    this.dataService.itemUrl = url;
    this.router.navigate(['/item',item]);
  }
}
