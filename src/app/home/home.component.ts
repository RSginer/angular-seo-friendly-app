import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: '<h1>Home works!</h1>'
})
export class HomeComponent implements OnInit {
    constructor(meta: Meta, title: Title) {
        title.setTitle('Home | Angular SEO | Project by @RSginer');
    }

    ngOnInit() { }
}
