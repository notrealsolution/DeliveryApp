import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { WaveComponent } from './components/wave/wave.component';
import { TestimonialesComponent } from './components/testimoniales/testimoniales.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { RepartidoresComponent } from './components/repartidores/repartidores.component';
import { DescargaComponent } from './components/descarga/descarga.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BasePageComponent,
    FormComponent,
    HeaderComponent,
    TestimonialesComponent,
    WaveComponent,
    FavoritosComponent,
    RepartidoresComponent,
    DescargaComponent,
    FooterComponent
  ],
  exports:[BasePageComponent]
})
export class LandingPageModule { }
