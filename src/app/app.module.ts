import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
};

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      DropzoneModule,
      BrowserModule.withServerTransition({appId: 'ssri18n'}),
   ],
   providers: [
      {
         provide: DROPZONE_CONFIG,
         useValue: DEFAULT_DROPZONE_CONFIG
      }
   ],
   bootstrap: [AppComponent]
})
export class AppModule {
}
