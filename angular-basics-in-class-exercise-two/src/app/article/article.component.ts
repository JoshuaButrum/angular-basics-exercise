import { Component } from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {
    title: string = 'Super Sonic Title';
    content: string = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis rutrum cubilia luctus consectetur accumsan curabitur. Ut ridiculus mauris adipiscing ligula quisque penatibus elementum. Dis nam ipsum amet porta orci. Rhoncus amet sem lacinia nisl turpis vulputate quis sodales. Potenti ac interdum suscipit porttitor justo mauris feugiat. Lorem et ultricies urna metus; curabitur arcu maximus. Ornare habitant scelerisque imperdiet sollicitudin nullam fermentum eu? Curae malesuada ligula integer iaculis facilisis a integer purus.';

    isTechRelated: boolean = true;
}