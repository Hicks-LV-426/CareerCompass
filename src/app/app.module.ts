import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompassListComponent } from './compass/compass-list/compass-list.component';
import { CompassViewComponent } from './compass/compass-view/compass-view.component';
import { CompassTreeViewComponent } from './compass/compass-tree-view/compass-tree-view.component';
import { CompassItemViewComponent } from './compass/compass-item-view/compass-item-view.component';
import { CompassItemsViewComponent } from './compass/compass-items-view/compass-items-view.component';
import { CompassCardComponent } from './compass/compass-card/compass-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CompassListComponent,
    CompassViewComponent,
    CompassTreeViewComponent,
    CompassItemViewComponent,
    CompassItemsViewComponent,
    CompassCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
