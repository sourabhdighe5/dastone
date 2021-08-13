import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { ChatComponent } from './apps/chat/chat.component';
import { CartComponent } from './apps/ecommerce/cart/cart.component';
import { CheckoutComponent } from './apps/ecommerce/checkout/checkout.component';
import { ProductDetailComponent } from './apps/ecommerce/product-detail/product-detail.component';
import { ProductListComponent } from './apps/ecommerce/product-list/product-list.component';
import { ProductsComponent } from './apps/ecommerce/products/products.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { ReadComponent } from './apps/email/read/read.component';
import { InvoiceComponent } from './apps/invoice/invoice.component';
import { BoardComponent } from './apps/project/board/board.component';
import { OverviewComponent } from './apps/project/overview/overview.component';
import { ProjectsComponent } from './apps/project/projects/projects.component';
import { TeamsComponent } from './apps/project/teams/teams.component';
import { TasksComponent } from './apps/tasks/tasks.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { AnimationComponent } from '../common/advanced/animation/animation.component';
import { ClipboardComponent } from '../common/advanced/clipboard/clipboard.component';
import { HighlightComponent } from '../common/advanced/highlight/highlight.component';
import { IdleTimerComponent } from '../common/advanced/idle-timer/idle-timer.component';
import { KanbanComponent } from '../common/advanced/kanban/kanban.component';
import { LightboxComponent } from '../common/advanced/lightbox/lightbox.component';
import { NestableComponent } from '../common/advanced/nestable/nestable.component';
import { RangessliderComponent } from '../common/advanced/rangesslider/rangesslider.component';
import { RatingComponent } from '../common/advanced/rating/rating.component';
import { RibbonsComponent } from '../common/advanced/ribbons/ribbons.component';
import { SessionComponent } from '../common/advanced/session/session.component';
import { SweetalertsComponent } from '../common/advanced/sweetalerts/sweetalerts.component';
import { ApexComponent } from '../common/charts/apex/apex.component';
import { ChartjsComponent } from '../common/charts/chartjs/chartjs.component';
import { FlotComponent } from '../common/charts/flot/flot.component';
import { MorrisComponent } from '../common/charts/morris/morris.component';
import { AdvancedComponent } from '../common/forms/advanced/advanced.component';
import { EditorsComponent } from '../common/forms/editors/editors.component';
import { ElementsComponent } from '../common/forms/elements/elements.component';
import { RepeaterComponent } from '../common/forms/repeater/repeater.component';
import { UploadComponent } from '../common/forms/upload/upload.component';
import { ValidationComponent } from '../common/forms/validation/validation.component';
import { WizardsComponent } from '../common/forms/wizards/wizards.component';
import { XEditableComponent } from '../common/forms/x-editable/x-editable.component';
import { DripiconsComponent } from '../common/icons/dripicons/dripicons.component';
import { FeatherComponent } from '../common/icons/feather/feather.component';
import { FontawesomeComponent } from '../common/icons/fontawesome/fontawesome.component';
import { MaterialdesignComponent } from '../common/icons/materialdesign/materialdesign.component';
import { ThemifyComponent } from '../common/icons/themify/themify.component';
import { TypiconsComponent } from '../common/icons/typicons/typicons.component';
import { GoogleComponent } from '../common/maps/google/google.component';
import { LeafletComponent } from '../common/maps/leaflet/leaflet.component';
import { VectorComponent } from '../common/maps/vector/vector.component';
import { PricingComponent } from '../common/pages/pricing/pricing.component';
import { BlogsComponent } from '../common/pages/blogs/blogs.component';
import { FaqsComponent } from '../common/pages/faqs/faqs.component';
import { ProfileComponent } from '../common/pages/profile/profile.component';
import { StarterComponent } from '../common/pages/starter/starter.component';
import { TimelineComponent } from '../common/pages/timeline/timeline.component';
import { TreeviewComponent } from '../common/pages/treeview/treeview.component';
import { SalesComponent } from './dashboard/sales/sales.component';
import { DatatableComponent } from '../common/tables/datatable/datatable.component';
import { EditableComponent } from '../common/tables/editable/editable.component';
import { BasicComponent } from '../common/tables/basic/basic.component';
import { ResponsiveComponent } from '../common/tables/responsive/responsive.component';
import { HomeComponent } from '../common/home/home.component';
import { ContactlistComponent } from './apps/contactlist/contactlist.component';
import { FilemanagerComponent } from './apps/filemanager/filemanager.component';
import { NewprojectComponent } from './apps/project/newproject/newproject.component';

@NgModule({
  declarations: [
    AppsComponent,
    CalendarComponent,
    ChatComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductsComponent,
    InboxComponent,
    ReadComponent,
    InvoiceComponent,
    BoardComponent,
    OverviewComponent,
    ProjectsComponent,
    TeamsComponent,
    TasksComponent,
    AnalyticsComponent,
    AnimationComponent,
    ClipboardComponent,
    HighlightComponent,
    IdleTimerComponent,
    KanbanComponent,
    LightboxComponent,
    NestableComponent,
    RangessliderComponent,
    RatingComponent,
    RibbonsComponent,
    SessionComponent,
    SweetalertsComponent,
    ApexComponent,
    ChartjsComponent,
    FlotComponent,
    MorrisComponent,
    AdvancedComponent,
    EditorsComponent,
    ElementsComponent,
    RepeaterComponent,
    UploadComponent,
    ValidationComponent,
    WizardsComponent,
    XEditableComponent,
    DripiconsComponent,
    FeatherComponent,
    FontawesomeComponent,
    MaterialdesignComponent,
    ThemifyComponent,
    TypiconsComponent,
    GoogleComponent,
    LeafletComponent,
    VectorComponent,
    PricingComponent,
    BlogsComponent,
    FaqsComponent,
    ProfileComponent,
    StarterComponent,
    TimelineComponent,
    TreeviewComponent,
    SalesComponent,
    DatatableComponent,
    EditableComponent,
    BasicComponent,
    ResponsiveComponent,
    HomeComponent,
    ContactlistComponent,
    FilemanagerComponent,
    NewprojectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
