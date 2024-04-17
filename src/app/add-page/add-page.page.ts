import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addUsuario () {
    this.router.navigate(['usuarios']);
   }

}
