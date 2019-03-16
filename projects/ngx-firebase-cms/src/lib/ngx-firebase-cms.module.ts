import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgxFirebaseCmsRoutingModule } from './ngx-firebase-cms-routing.module';
import { HomeComponent } from './component/home/home.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicBuilderComponent } from './component/dynamic-builder/dynamic-builder.component';
import { EmailComponent } from './component/email/email.component';
import { EmailsComponent } from './component/emails/emails.component';
import { FileComponent } from './component/file/file.component';
import { FilesComponent } from './component/files/files.component';
import { FormComponent } from './component/form/form.component';
import { FormsComponent } from './component/forms/forms.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline, IdcardOutline, TeamOutline, FormOutline, SettingOutline, DesktopOutline, UnlockOutline, HddOutline, PictureOutline, MailFill, MailOutline, ContactsOutline } from '@ant-design/icons-angular/icons';
import { ExcelService } from './service/excel.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { UnauthGuard } from './guard/unauth.guard';
import { HttpClientModule } from '@angular/common/http';

const icons: IconDefinition[] = [ UserOutline, LockOutline, IdcardOutline, TeamOutline, FormOutline, SettingOutline, DesktopOutline, UnlockOutline, HddOutline, PictureOutline, MailOutline, ContactsOutline ];

registerLocaleData(en);

@NgModule({
  declarations: [
    DashboardComponent, 
    LoginComponent, 
    HomeComponent, 
    DynamicFormComponent, 
    DynamicBuilderComponent, 
    EmailComponent, 
    EmailsComponent, 
    FileComponent, 
    FilesComponent, 
    FormComponent, 
    FormsComponent, 
    PostsComponent, 
    PostComponent, 
    ProfileComponent, 
    SignupComponent, 
    UserComponent, 
    UsersComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    HttpClientModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFirebaseCmsRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgZorroAntdModule
  ],
  providers: [
    ExcelService,
    AuthService,
    AuthGuard,
    UnauthGuard,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons }
  ],
  exports: [
    SignupComponent
  ],
  entryComponents: [
    SignupComponent
  ]
})
export class NgxFirebaseCMSModule { 
  public static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: NgxFirebaseCMSModule,
      providers: [
        {
          provide: 'env',
          useValue: environment
        }
      ]
    }
  }
}
