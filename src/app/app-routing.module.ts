import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { HomeComponent } from './common/home/home.component';
import { SalesComponent } from './components/dashboard/sales/sales.component';
import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { ContactlistComponent } from './components/apps/contactlist/contactlist.component';
import { CartComponent } from './components/apps/ecommerce/cart/cart.component';
import { CheckoutComponent } from './components/apps/ecommerce/checkout/checkout.component';
import { ProductListComponent } from './components/apps/ecommerce/product-list/product-list.component';
import { ProductDetailComponent } from './components/apps/ecommerce/product-detail/product-detail.component';
import { ProductsComponent } from './components/apps/ecommerce/products/products.component';
import { InboxComponent } from './components/apps/email/inbox/inbox.component';
import { ReadComponent } from './components/apps/email/read/read.component';
import { FilemanagerComponent } from './components/apps/filemanager/filemanager.component';
import { InvoiceComponent } from './components/apps/invoice/invoice.component';
import { BoardComponent } from './components/apps/project/board/board.component';
import { FilesComponent } from './components/apps/project/files/files.component';
import { NewprojectComponent } from './components/apps/project/newproject/newproject.component';
import { OverviewComponent } from './components/apps/project/overview/overview.component';
import { ProjectsComponent } from './components/apps/project/projects/projects.component';
import { TeamsComponent } from './components/apps/project/teams/teams.component';
import { TasksComponent } from './components/apps/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sales',
    pathMatch: 'full',
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'contactlist',
    component: ContactlistComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'email-inbox',
    component: InboxComponent,
  },
  {
    path: 'email-read',
    component: ReadComponent,
  },
  {
    path: 'filemanager',
    component: FilemanagerComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'project-board',
    component: BoardComponent,
  },
  {
    path: 'project-files',
    component: FilesComponent,
  },
  {
    path: 'project-newproject',
    component: NewprojectComponent,
  },
  {
    path: 'project-overview',
    component: OverviewComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project-teams',
    component: TeamsComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
