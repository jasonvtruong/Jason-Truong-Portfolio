import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input() appHoverHighlight = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'black'); // default colour
  }

  @HostListener('mouseleave') onMouseLeave(){
    // undo the highlight styles when mouse leaves
    this.highlight('');
    this.el.nativeElement.style.fontWeight = "normal";
    this.el.nativeElement.style.textShadow = "none";
    this.el.nativeElement.style.fontSize = "1.4em";

  }

  private highlight(color: string){
    this.el.nativeElement.style.fontWeight = "bold";
    this.el.nativeElement.style.textShadow = "0 0 10px " + color;
    this.el.nativeElement.style.fontSize = "1.5em";
    this.el.nativeElement.style.transition = "0.3s";
  }

}
