import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth-guard.service';
import {SelectiveStrategyService} from './selective-strategy.service';


@NgModule ({
    imports: [
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: 'products', loadChildren: 'app/products/product.module#ProductModule',
                canActivate: [AuthGuard], data: {preload: true}},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', component: PageNotFoundComponent},
        ],{ enableTracing: true, preloadingStrategy: SelectiveStrategyService})
    ],
    providers: [
        SelectiveStrategyService
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
