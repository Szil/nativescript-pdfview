import { Component, NgZone } from '@angular/core';
import { DemoSharedPdfView } from '@demo/shared';
import {} from '@nativescript/pdf-view';

@Component({
  selector: 'demo-pdf-view',
  templateUrl: 'pdf-view.component.html',
})
export class PdfViewComponent {
  demoShared: DemoSharedPdfView;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPdfView();
  }
}
