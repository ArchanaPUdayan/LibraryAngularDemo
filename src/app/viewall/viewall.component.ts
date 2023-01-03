import { Component } from '@angular/core';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  books:any=[
    {
      "title":"FAMOUS FIVE COLLECTION 1",
      "image":"https://m.media-amazon.com/images/I/51fEgs6qgTL._SX324_BO1,204,203,200_.jpg",
      "author":"Enid Blyton",
      "price":357

    },
    {
      "title":"MALORY TOWER  COLLECTION 3",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51SUduDVJ6L._SX324_BO1,204,203,200_.jpg",
      "author":"Enid Blyton",
      "price":499
    },
    {
      "title":"The Blue Umbrella",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71e9MY-XE9L._AC_UL480_QL65_.jpg",
      "author":"Ruskin Bond",
      "price":459
    },
    {
      "title":"WINGS OF FIRE ",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71KKZlVjbwL._AC_UL480_QL65_.jpg",
      "author":"Arun Tiwari and A. P. J. Abdul Kalam",
      "price":199
    },
    {
      "title":"THE GITA FOR CHILDREN",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91GTRw-cH9L._AC_UL480_QL65_.jpg",
      "author":"Roopa Pai",
      "price":226
    },
    {
      "title":"The Story Of My Experiments With Truth",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81XqXdOE5mS._AC_UL480_QL65_.jpg",
      "author":"Mahatma Gandhi",
      "price":162
    },
    {
      "title":"AN ERA OF DARKNESS",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/A1MLm00fAIL._AC_UL480_QL65_.jpg",
      "author":"Shashi Tharoor",
      "price":549
    },
    {
      "title":"My Gita",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51qGbJE-8LL._AC_UL480_QL65_.jpg",
      "author":" Devdutt Pattanaik",
      "price":202
    },
    {
      "title":"Malgudi Days",
      "image":"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61dSxXuqMpL._AC_UL480_QL65_.jpg",
      "author":" R. K. Narayan<",
      "price":177
    }
    
  ]

}
