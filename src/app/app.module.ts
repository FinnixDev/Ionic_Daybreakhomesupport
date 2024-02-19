import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//Imports from Angular project


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePage } from './home/home.page';
//import { SharedModule } from './shared/shared.module';
//import { PlayComponent } from './play/play.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { CarersComponent } from './Carers/carers/carers.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './Clients/clients/clients.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { CarerEditComponent } from './Carers/carer-edit/carer-edit.component';
import { CarerCardsComponent } from './Carers/carer-cards/carer-cards.component';
import { CarerDetailsComponent } from './Carers/carer-details/carer-details.component';
import { FAQComponent } from './FAQ/faq/faq.component';
import { FAQRefundComponent } from './FAQ/faq-refund/faq-refund.component';
import { FAQCancelComponent } from './FAQ/faq-cancel/faq-cancel.component';
import { FAQApprovalComponent } from './FAQ/faq-approval/faq-approval.component';
import { FAQRightCarerComponent } from './FAQ/faq-right-carer/faq-right-carer.component';

//import { TextInputComponent } from './_forms/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DatePickerComponent } from './_forms/date-picker/date-picker.component';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { ToastrModule } from 'ngx-toastr';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClientDashboardComponent } from './Clients/client-dashboard/client-dashboard.component';
//import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { CarerMyaccountComponent } from './Carers/carer-myaccount/carer-myaccount.component';
import { AgreementsComponent } from './agreements/agreements.component';
import { HelpComponent } from './help/help.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { MessagesComponent } from './messages/messages.component';
import { JobPostsComponent } from './jobs/job-posts/job-posts.component';
import { ActiveJobsComponent } from './jobs/active-jobs/active-jobs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
//import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
//import { PhotoEditorComponent } from './carer/photo-editor/photo-editor.component';
//import { NgxSliderModule } from 'ngx-slider-v2';
//import { CollapseModule } from '@coreui/angular';
//import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
//import { CollapseModule, MDBBootstrapModule } from "angular-bootstrap-md"; 
//import { AccordionModule } from '@coreui/angular';
//import {CdkAccordionModule} from '@angular/cdk/accordion';
import {NgFor} from '@angular/common';

//import {  AlertModule } from 'ngx-bootstrap/alert'


//import { NgxSpinnerModule } from 'ngx-spinner';

//import { DropdownModule } from '@coreui/angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
