import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { LayoutService } from './layout.service';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        SharedModule,
        TranslateModule
    ],
    exports: [LayoutComponent],
    declarations: [
        LayoutComponent,
        MenuComponent,
        HeaderComponent
    ],
    providers: [
        LayoutService
    ],
})
export class LayoutModule { }
