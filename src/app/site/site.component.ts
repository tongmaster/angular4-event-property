import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flag = true;
	website = {
	     name : 'ConcretePage',
		 url : 'http://www.concretepage.com',
		 logo : 'images/logo.jpg',
		 description: 'Learn angular 2 property binding.'
	}

}
