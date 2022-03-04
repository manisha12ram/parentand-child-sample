import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressMapComponent } from './address-map/address-map.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressMapComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMm6dwmEt3GSDPI6haTUDk2XIUc3d2mno',
      libraries: ['places']
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
