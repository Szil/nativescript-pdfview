import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPdfView } from '@demo/shared';
import {} from '@nativescript/pdf-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPdfView {}
