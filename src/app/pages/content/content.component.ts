import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  photoCover: string = "https://super.abril.com.br/wp-content/uploads/2020/08/14-08_livros_SITE.jpg?quality=90&strip=info&w=1024&h=682&crop=1"
  contentTitle: string = "exemplo"
  contentDescription: string = "bla bla bla bla"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
