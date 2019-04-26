import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobtagsPage } from './jobtags';

@NgModule({
  declarations: [
    JobtagsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobtagsPage),
  ],
})
export class JobtagsPageModule {}
