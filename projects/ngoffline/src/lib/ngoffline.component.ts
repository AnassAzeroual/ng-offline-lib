import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngoffline',
  template: `
    <div
      id="box--ngoffline"
      class="box"
      *ngIf="!onLine"
      (click)="onLine = true"
    >
      <div class="centreMessage">
        <div class="close">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 1280.000000 1280.000000"
          >
            <metadata></metadata>
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#9c27b0"
              stroke="none"
            >
              <path
                d="M1545 12784 c-85 -19 -167 -51 -243 -95 -69 -41 -1089 -1049 -1157
       -1144 -101 -141 -140 -263 -140 -440 0 -169 36 -293 125 -427 29 -43 705 -726
       2149 -2170 l2106 -2108 -2111 -2112 c-1356 -1358 -2124 -2133 -2147 -2169 -88
       -137 -121 -249 -121 -419 -1 -181 37 -302 139 -445 68 -95 1088 -1103 1157
       -1144 273 -159 604 -143 853 42 22 17 986 976 2143 2131 l2102 2101 2103
       -2101 c1156 -1155 2120 -2114 2142 -2131 69 -51 130 -82 224 -113 208 -70 431
       -44 629 71 69 41 1089 1049 1157 1144 101 141 140 263 140 440 0 166 -36 290
       -121 422 -25 39 -746 767 -2148 2171 l-2111 2112 2107 2108 c2207 2208 2162
       2161 2219 2303 75 187 77 392 4 572 -53 132 -74 157 -615 700 -289 291 -552
       548 -585 572 -141 101 -263 140 -440 140 -166 0 -289 -35 -420 -120 -41 -26
       -724 -702 -2172 -2149 l-2113 -2111 -2112 2111 c-1454 1452 -2132 2123 -2173
       2150 -64 41 -149 78 -230 101 -79 22 -258 26 -340 7z"
              />
            </g>
          </svg>
        </div>
        <div class="text">
          <div>
            <svg
              version="1.0"
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="100px"
              viewBox="0 0 1280.000000 924.000000"
            >
              <metadata></metadata>
              <g
                transform="translate(0.000000,924.000000) scale(0.100000,-0.100000)"
                fill="#9c27b0"
                stroke="none"
              >
                <path
                  d="M5905 9230 c-1798 -115 -3490 -914 -5175 -2444 -91 -83 -293 -277
-449 -431 l-283 -281 528 -506 529 -506 270 267 c149 146 335 325 415 397
1869 1685 3702 2322 5595 1943 1358 -271 2797 -1094 4214 -2409 74 -69 158
-146 187 -173 l52 -47 448 467 c247 258 475 495 507 529 l57 61 -173 160
c-1962 1823 -3826 2779 -5767 2958 -194 18 -768 27 -955 15z"
                />
                <path
                  d="M5945 6613 c-487 -39 -853 -114 -1300 -267 -920 -312 -1813 -899
-2709 -1777 -125 -122 -226 -225 -226 -229 0 -5 199 -199 442 -431 244 -233
480 -459 525 -503 l82 -79 189 184 c300 294 518 484 797 694 642 485 1278 784
1915 899 231 41 342 51 610 51 267 -1 368 -9 610 -51 936 -163 1919 -718 2938
-1658 85 -77 156 -140 158 -139 14 9 1004 1045 1004 1052 0 16 -394 372 -610
552 -967 804 -1919 1320 -2880 1559 -281 70 -549 114 -855 140 -108 9 -591 11
-690 3z"
                />
                <path
                  d="M6035 4054 c-671 -53 -1337 -336 -1945 -827 -199 -161 -545 -486
-539 -506 2 -5 239 -235 527 -510 l522 -500 103 101 c574 564 1131 825 1664
778 326 -29 633 -144 983 -368 180 -115 437 -319 593 -471 l68 -66 57 60 c32
33 258 269 502 524 245 255 446 468 447 475 1 6 -49 57 -110 113 -761 692
-1495 1072 -2273 1178 -114 16 -490 27 -599 19z"
                />
                <path
                  d="M6115 1659 c-299 -43 -565 -236 -689 -500 -55 -116 -70 -187 -70
-324 0 -137 15 -208 70 -324 154 -326 504 -527 884 -507 354 18 652 207 791
502 54 113 72 197 72 329 0 136 -19 220 -78 340 -167 344 -570 543 -980 484z"
                />
              </g>
            </svg>
          </div>
          <div>{{ msg }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./ngoffline.component.scss'],
})
export class NgOfflineComponent {
  @Input('message') msg: string = 'You are not connected';
  @Output('isOnline') cnx = new EventEmitter<boolean>(true);
  onLine: boolean = false; // is en ligne 🔥

  constructor(private sanitizer: DomSanitizer) {
    window.addEventListener('online', (): void => {
      // 🔥 we're back online!
      this.onLine = true;
      this.cnx.emit(true);
    });

    window.addEventListener('offline', (): void => {
      // 😱 oh no!
      this.onLine = false;
      this.cnx.emit(false);
    });
  }
}

@Directive({
  selector: '[ngoffline]',
})
export class NgOfflineDirective {
  @Output('isOnline') cnx = new EventEmitter<boolean>(true);
  _el: any;
  onLine: boolean = true;
  constructor(el: ElementRef) {
    this._el = el;
    this.goOnline();
    window.addEventListener('online', (): void => {
      // 🔥 we're back online!
      this.goOnline();
      this.cnx.emit(true);
    });

    window.addEventListener('offline', (): void => {
      // 😱 oh no!
      this.goOffline();
      this.cnx.emit(false);
    });
  }

  public goOnline() {
    this._el.nativeElement.style.display = 'none';
    this.onLine = true;
  }

  public goOffline() {
    this._el.nativeElement.style.display = 'inherit';
    this.onLine = false;
  }
}

@Directive({
  selector: '[ngonline]',
})
export class NgOnlineDirective {
  @Output('isOnline') cnx = new EventEmitter<boolean>(true);
  _el: any;
  onLine: boolean = true;
  constructor(el: ElementRef) {
    this._el = el;
    this.goOnline();
    window.addEventListener('online', (): void => {
      // 🔥 we're back online!
      this.goOnline();
      this.cnx.emit(true);
    });

    window.addEventListener('offline', (): void => {
      // 😱 oh no!
      this.goOffline();
      this.cnx.emit(false);
    });
  }

  public goOnline() {
    this._el.nativeElement.style.display = 'inherit';
    this.onLine = true;
  }

  public goOffline() {
    this._el.nativeElement.style.display = 'none';
    this.onLine = false;
  }
}
