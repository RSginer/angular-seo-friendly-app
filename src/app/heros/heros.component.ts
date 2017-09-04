import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heros',
    template: `<ul>
                <li>SuperCat</li>
                <li>UltraFish</li>
            </ul>`
})

export class HerosComponent implements OnInit {
        constructor(meta: Meta, title: Title) {
        title.setTitle('Heros | Angular SEO | Project by @RSginer');
    }
    ngOnInit() { }
}
