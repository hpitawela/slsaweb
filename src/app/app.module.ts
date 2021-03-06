import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { AlumniComponent } from './alumni/alumni.component';
import { DataTablesModule } from 'angular-datatables';

const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'events', component: EventsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us#welfare', component: AboutUsComponent},
  { path: 'events#yellow-box', component: EventsComponent},
  { path: 'events#white-box', component: EventsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    EventsComponent,
    NewsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    AlumniComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
