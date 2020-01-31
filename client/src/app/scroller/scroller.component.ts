import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, EventEmitter, Output, Input } from '@angular/core';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
// import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BackgroundComponent } from '../background/background.component';
import { StickerComponent } from '../sticker/sticker.component';


@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})

export class ScrollerComponent implements OnInit{
  @ViewChild(TemplateRef, {static: false}) _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;
  pageIcons = [];
  icons = ['alien.png', 'galaxy.png', 'snow.png',
  'asteroid.png', 'kitty.png', 'squirrel.png',
  'astronaut.png', 'owl.png', '	star.png',
  'butterfly.png', 'parrot.png', 'sun.png',
  'cactus.png', 'pine.png', 'tree.png',
  'cat.png', '	planet.png', 'tree2.png',
  'chameleon.png', 'poplartree.png', 'turtle.png',
  'chat.png', 'purpleflower.png',	'tyrannosaurus-rex.png',
  'chicken.png', 'rain.png', 'ufo.png',
  'cloudsun.png', 'rainbow.png', 'unicorn.png',
  'fairy.png', 'sheep.png', 'worm.png',
  'fence.png', 'snail.png'];
  backgrounds = ['forestmountains.jpg', 'nightmountains.jpg','desert.jpg','spookyspace.jpg','mountains.jpg'];
  selectedId = null;
  backgroundid = 0;
  vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  ngOnInit() {
    window.addEventListener("keydown", (e) => {
      this.zoomImage(e)
    });
  }
  constructor(private modalService: NgbModal, private _viewContainerRef: ViewContainerRef) {
  
  }
  changeBackground(direction){
    // index and left side of image
    var car = document.getElementById("backcarousel")
    var imagewidth = document.getElementById("img" + this.backgroundid).offsetWidth;
    if(direction == "right") {
      if (this.backgroundid < this.backgrounds.length - 1){ //this check is to reset the array to the beginning so it keeps going
        this.backgroundid += 1;
        car.scrollBy({
          top:0,
          left: imagewidth,
          behavior:'smooth',
        })
      }
      else { //need to reset to 0 at the end of the array
        this.backgroundid = 0;
        car.scrollBy({
          top:0,
          left: -1 * imagewidth * (this.backgrounds.length + 1),
          behavior:'smooth',
        })
      }
    } 
    else if (direction=="left"){
      if (this.backgroundid > 0){ //this check is to reset the array to the beginning so it keeps going
        this.backgroundid -= 1;
        car.scrollBy({
          top:0,
          left: -1 * imagewidth,
          behavior:'smooth',
        })
      }
      else{
        this.backgroundid = (this.backgrounds.length) - 1; //need to reset this to the end of the array
        car.scrollBy({
          top:0,
          left: imagewidth * (this.backgrounds.length + 1),
          behavior:'smooth',
        })
      }
    }
    
  }
  selectNewId(id) {
    this.selectedId = id;
  }

  openDialog(x) { //this opens a new image
    this.pageIcons.push([x,0,1]);
    this.selectedId  = this.pageIcons.length -1;
  }

  zoomImage(e) {
    let image = document.getElementById(this.selectedId);
    if(e.keyCode == 189) { //shrink
      image.style.width = (image.offsetWidth - 10) + "px";
      image.style.height = (image.offsetHeight - 10) + "px";

    } else if (e.keyCode == 187) { //grow
      image.style.width = (image.offsetWidth + 10) + "px";
      image.style.height = (image.offsetHeight + 10) + "px";
    }
    else if(e.keyCode == 188){ //rotate left
      let rotation = this.pageIcons[this.selectedId][1];
      rotation -=10;
      this.pageIcons[this.selectedId][1] = rotation;
      let anglestr = ' rotate('+ rotation +'deg)';
      image.style.webkitTransform = anglestr + this.checkifflipped(); 
    }
    else if(e.keyCode == 190){     //rotate right
      let rotation = this.pageIcons[this.selectedId][1];
      rotation +=10;
      this.pageIcons[this.selectedId][1] = rotation;
      let anglestr = ' rotate('+ rotation +'deg)';
      image.style.webkitTransform = anglestr + this.checkifflipped(); 
    }
    else if(e.keyCode == 70){ //flip the image
      if (this.pageIcons[this.selectedId][2]==-1){
        image.style.webkitTransform = " scaleX(-1)" + this.getrotation();
        this.pageIcons[this.selectedId][2] = 1;
      }
      else{
        image.style.webkitTransform = "" + this.getrotation();
        this.pageIcons[this.selectedId][2] = -1;
      }
    }
    else if (e.keyCode == 8){ //delete the image
        this.pageIcons.splice(this.selectedId,1);
    }
  }
  checkifflipped(){ //need to add this to ensure that the flip stays in transform
    let flip ="";
    if (this.pageIcons[this.selectedId][2]==-1){
      flip = " scaleX(-1)";
    }
    else {
      flip = "";
    }
    return flip;
  }
  getrotation(){ //need to add this to ensure that rotation is in transform
    let rotation = this.pageIcons[this.selectedId][1];
    let anglestr = ' rotate('+ rotation +'deg)';
    return anglestr;
  }

  viewInfo(){ //open instructions
    if(this.vw>1024){
      const modalRef = this.modalService.open(BackgroundComponent, { centered: true});
    }
    else{
      const modalRef = this.modalService.open(StickerComponent, { centered: true});
    }
  }
}
