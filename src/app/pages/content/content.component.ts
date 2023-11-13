import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://super.abril.com.br/wp-content/uploads/2020/08/14-08_livros_SITE.jpg?quality=90&strip=info&w=1024&h=682&crop=1"
  contentTitle: string = "exemplo"
  contentDescription: string = "bla bla bla bla"

  constructor() { }

  ngOnInit(): void {
  }

}
