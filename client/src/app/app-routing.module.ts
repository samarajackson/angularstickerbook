import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StickerComponent } from './sticker/sticker.component';
import { BackgroundComponent } from './background/background.component';
import { ScrollerComponent } from './scroller/scroller.component';


const routes: Routes = [
  { path: 'background', component:BackgroundComponent},
  { path: '**', component: ScrollerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
