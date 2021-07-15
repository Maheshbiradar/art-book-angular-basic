import { Component, OnInit } from '@angular/core';
import { Art } from '../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  arts: Art[] = [
    new Art("Test1 Art", "This is test description", "https://lh3.googleusercontent.com/proxy/aKU-MNsNF_figPwJJs917EPCAdVhYxINX6K35ShbaTVxVbeIDNtq6ck4D_kn2xr3-iXL43l2xF-EYAMmjXzOStGT1v7ssLA"),
    new Art("Test1 Art", "This is test description", "https://www.graphicsprings.com/filestorage/stencils/1f4e948fcfc9977ee6fb567bd815132d.png?width=500&height=500"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
