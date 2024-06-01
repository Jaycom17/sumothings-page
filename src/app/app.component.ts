import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sumothing-page';
}

@Directive({
  selector: '[for]'
})
export class ForDirective {
  @Input() set forOf(collection: any[]) {
    this.viewContainer.clear();
    collection.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: index
      });
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
