import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  // 3. Create an articles property of type user
  articles: Article[];

  // 4. Inject the ArticlesService into the constructor
  constructor(private articlesService: ArticlesService) { }

  // 6. Make a call to the service on initialization
  ngOnInit() {
    this.getArticles();
  }

  // 5. Create a local wrapper for
  getArticles(): void {
    this.articlesService.getArticles().subscribe(
      (response:any) => {
        this.articles = response.articles
        //console.log(this.articles)
      }
    );
  }
}
