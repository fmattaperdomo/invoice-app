import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { InvoiceComponent } from './app/components/invoice/invoice.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
