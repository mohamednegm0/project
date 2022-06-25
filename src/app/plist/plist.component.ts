import { GdataService } from './../services/gdata.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {

  products: product[] = [];
  constructor(private data: GdataService) { }

  ngOnInit(): void {
    this.data.getdata().subscribe( x => {this.products = x;});
    console.log(this.products);
  }
  

}