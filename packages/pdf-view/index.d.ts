import { PDFViewCommon, BookmarkCommon, ControllerRect } from './common';

export declare class PDFView extends PDFViewCommon {
  loadPDF(src: string): Promise<any>;
  goToPage(index: number): void;
  goToFirstPage(): void;
  goToLastPage(): void;
  getBookmarks(): Bookmark[];
  getBookmarkByIndexPath(indexes: number[]): Bookmark;
  getBookmarksByLabel(label: string): BookmarkCommon[];
  goToBookmark(bookmark: Bookmark): void;
  showExternalControler(rect: ControllerRect): void;

  getAuthor(): string;
  getTitle(): string;
  getSubject(): string;
  getCreationDate(): string;
  getCreator(): string;
  getPageCount(): number;
}

export declare class Bookmark extends BookmarkCommon {
  children: BookmarkCommon[];
  getTitle(): string;
  getChildren(): Bookmark[];
}
