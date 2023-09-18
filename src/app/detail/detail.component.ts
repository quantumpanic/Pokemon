import { Component } from '@angular/core';
import { Ability, DataService, ItemDetails, MyDataItem } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  name: string = '';
  abilities: Ability[] = [];
  spriteDataUrl: string = '';
  spriteUrl: any;
  sprite: any;
  
  // test

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id') as string;
    this.getSpriteURL();

    // get the sprite data
    this.dataService.getSpriteDataFromURL(this.spriteDataUrl).subscribe(
      (data) => {
        // handle the data
        this.spriteUrl = data.sprites.front_default;

        // then get the sprite
        // this.getSprite();
        // console.log('Sprite URL: ' + this.spriteUrl);
      },
      (error) => {
        // if error
        console.error(error);
      }
    );

    // get the ability data
    this.dataService.getItemDetails().subscribe(
      (data: ItemDetails) => {
        // handle the data
        this.abilities = data.abilities;
        console.log(data.abilities);
      },
      (error) => {
        // if error
        console.error(error);
      }
    );
  }

  getSpriteURL() {
    let splitUrl = this.dataService.itemUrl.split('pokemon');
    this.spriteDataUrl = splitUrl[0] + 'pokemon-form';
    this.spriteDataUrl += splitUrl[1];
    console.log('split result: ' + this.spriteDataUrl);
  }

  getSprite() {
    this.dataService.getSprite(this.spriteUrl).subscribe(
      (data) => {
        // handle the data
        this.sprite = data;
      },
      (error) => {
        // if error
        console.error(error);
      }
    );
  }

  changeSource(event:any) {
    event.target.src = 'assets/pokeball.png';
  }
}
