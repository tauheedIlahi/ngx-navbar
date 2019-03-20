import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ElementRef
} from "@angular/core";
import { NavbarItemDirective } from "../navbar-item.directive";

@Component({
  selector: "ngx-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  scrollBarHeight = 0;
  @ContentChildren(NavbarItemDirective) _items: QueryList<NavbarItemDirective>;
  get items(): NavbarItemDirective[] {
    return this._items ? this._items.toArray() : [];
  }
  get clientWidth() {
    return this._elRef.nativeElement.clientWidth;
  }
  get clientHeight() {
    return this._elRef.nativeElement.clientHeight;
  }
  constructor(private _elRef: ElementRef<HTMLElement>) {
    window.addEventListener("resize", () => {});
    this.findScrollbarWidth();
  }

  ngOnInit() {}
  findScrollbarWidth() {
    const div: HTMLDivElement = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.visibility = "hidden";
    div.style.position = "absolute";
    document.body.appendChild(div);
    div.style.overflow = "scroll";
    this.scrollBarHeight = div.offsetWidth - div.clientWidth;
    console.log(this.scrollBarHeight);

    div.remove();
  }
}
