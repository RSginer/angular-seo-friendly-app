import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(meta: Meta, title: Title) {
    title.setTitle('Angular SEO | Project by @RSginer');
    meta.addTags([
      { name: 'author', content: 'RSginer' },
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);
  }

}
