import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { StickerComponent } from './sticker/sticker.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    StickerComponent,
    ScrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    DragDropModule,
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
