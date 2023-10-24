import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardProfilComponent } from './components/card-profil/card-profil.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';

import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';

import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';

import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';
import { LoggerInjectionToken, UUID_TOKEN } from './injection Tokens/injection.token';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { v4 as uuidv4 } from 'uuid';
import { AdminComponent } from './components/admin/admin.component';
import { FrontComponent } from './components/front/front.component';
import { TestCDComponent } from './components/test-cd/test-cd.component';
import { TestCDFilsComponent } from './components/test-cdfils/test-cdfils.component';
import { NombreListComponent } from './components/nombre-list/nombre-list.component';
import { CarrePipe } from './pipes/carre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardProfilComponent,
    PereComponent,
    FilsComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    NavbarComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    RhComponent,
    UserListComponent,
    AdminComponent,
    FrontComponent,
    TestCDComponent,
    TestCDFilsComponent,
    NombreListComponent,
    CarrePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthInterceptorProvider,
    {
      provide: LoggerInjectionToken,
      useClass: Logger2Service,
      multi: true,
    },
    {
      provide: LoggerInjectionToken,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: UUID_TOKEN,
      useValue: uuidv4,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
