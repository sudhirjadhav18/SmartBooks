import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookService } from './book.service';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookInfoComponent } from './book-info/book-info.component';
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from './search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
    FooterComponent,
    NavigationComponent,
    BookCardComponent,
    BookInfoComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    BookService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
