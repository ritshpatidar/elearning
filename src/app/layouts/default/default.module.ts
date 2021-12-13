import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedOneModule } from 'src/app/shared-one/shared-one.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedOneModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule
  ]
})
export class DefaultModule { }
