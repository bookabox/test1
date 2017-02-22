import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactUsComponentComponent } from './home/components/contact-us-component/contact-us-component.component';
import { FaqComponentComponent } from './home/components/faq-component/faq-component.component';
import { HowItWorksComponentComponent } from './home/components/how-it-works-component/how-it-works-component.component';
import { PricingComponentComponent } from './home/components/pricing-component/pricing-component.component';
import { SideMenuComponentComponent } from './home/components/side-menu-component/side-menu-component.component';
import { SocialshareComponentComponent } from './home/components/socialshare-component/socialshare-component.component';
import { HomeComponentComponent } from './home/components/home-component/home-component.component';
import { AlertModule } from 'ng2-bootstrap/alert';
import { NavHeaderComponentComponent } from './nav-header-component/nav-header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponentComponent,
    FaqComponentComponent,
    HowItWorksComponentComponent,
    PricingComponentComponent,
    SideMenuComponentComponent,
    SocialshareComponentComponent,
    HomeComponentComponent,
    NavHeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AlertModule.forRoot()	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
