import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

import { CreateProposalComponent } from "./proposal/create-proposal/create-proposal.component";
import { ReplicateProposalComponent } from "./proposal/replicate-proposal/replicate-proposal.component";
import { ActiveProposalComponent } from "./proposal/active-proposal/active-proposal.component";
import { DownloadAmendentComponent } from "./proposal/download-amendent/download-amendent.component";
import { DashboardComponent } from "./proposal/dashboard/dashboard.component";

import { ArchiveProposalComponent } from "./proposal/archive-proposal/archive-proposal.component";
import { DelegationComponent } from "./proposal/delegation/delegation.component";
import { MultipleDocsComponent } from "./proposal/multiple-docs/multiple-docs.component";
import { AuthorizeDelegationComponent } from "./proposal/authorize-delegation/authorize-delegation.component";
import { CtmLibraryComponent } from "./proposal/ctm-library/ctm-library.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";
import { ProposalOverviewComponent } from "./proposal/proposal-overview/proposal-overview.component";
import { SearchProposalComponent } from "./proposal/modeal/search-proposal/search-proposal.component";
import { ParentPipesval, ChildPipesval } from "./GlobalPipes/parentPipes";
import { FooterComponent } from "./sidenav/footer/footer.component";
import { PriceProposalComponent } from "./proposal/modeal/price-proposal/price-proposal.component";
import { AgGridModule } from "ag-grid-angular";
import { AdminPanelComponent } from "./admin/admin-panel/admin-panel.component";
import { HrdCountriesComponent } from "./admin/hrd-countries/hrd-countries.component";
import { DelProposalComponent } from "./proposal/modeal/del-proposal/del-proposal.component";
import { ShareProposalComponent } from "./proposal/modeal/share-proposal/share-proposal.component";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SiriusCountriesComponent } from "./admin/sirius-countries/sirius-countries.component";
import { AmendmnetinfoComponent } from "./admin/amendmnetinfo/amendmnetinfo.component";
import { AlertsComponent } from "./admin/alerts/alerts.component";
import { ExternalUsersComponent } from "./admin/external-users/external-users.component";
import { ApproversComponent } from "./admin/approvers/approvers.component";
import { AdminService } from "src/app/admin/admin.service";
import { ToastrModule } from "ngx-toastr";
import { EditActionComponent } from "./sharedAction/edit-action/edit-action.component";
import { ConformationComponent } from "./sharedAction/conformation/conformation.component";
import { ArchiveActionsComponent } from "./sharedAction/archive-actions/archive-actions.component";

import { SpecialCharacterDirective } from "./GlobalDirectives/special-character.directive";
import { FilterCellComponent } from "./sharedAction/filter/filter-cell/filter-cell.component";
import { CtmFooterComponent } from "./proposal/ctm-footer/ctm-footer.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { PubliCtmComponent } from './proposal/ctm-library/publi-ctm/publi-ctm.component';
import { PrivateCtmComponent } from './proposal/ctm-library/private-ctm/private-ctm.component';
import { CtmwindowComponent } from './proposal/ctm-library/ctmwindow/ctmwindow.component';
import { UserReferenceComponent } from './user-reference/user-reference.component';
import { PrivateEditActionComponent } from './proposal/ctm-library/private-ctm/private-edit-action/private-edit-action.component';
import { MopetDetailsComponent } from './proposal/mopet-details/mopet-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { DelgateDateRangeComponent } from './proposal/delgate-date-range/delgate-date-range.component';
import { DelgateProposalWorkflowComponent } from './proposal/delgate-proposal-workflow/delgate-proposal-workflow.component';
import { AmendmentPreviewComponent } from './proposal/amendment-preview/amendment-preview.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CreateProposalComponent,
    ReplicateProposalComponent,
    ActiveProposalComponent,
    DownloadAmendentComponent,
    DashboardComponent,

    ArchiveProposalComponent,
    DelegationComponent,
    MultipleDocsComponent,
    AuthorizeDelegationComponent,
    CtmLibraryComponent,
    ProposalOverviewComponent,
    SearchProposalComponent,
    ParentPipesval,
    ChildPipesval,
    FooterComponent,
    PriceProposalComponent,
    AdminPanelComponent,
    HrdCountriesComponent,
    DelProposalComponent,
    ShareProposalComponent,
    SiriusCountriesComponent,
    AmendmnetinfoComponent,
    AlertsComponent,
    ExternalUsersComponent,
    ApproversComponent,
    EditActionComponent,
    ConformationComponent,
    ArchiveActionsComponent,
    CtmFooterComponent,
    SpecialCharacterDirective,
    FilterCellComponent,
    PubliCtmComponent,
    PrivateCtmComponent,
    CtmwindowComponent,
    UserReferenceComponent,
    PrivateEditActionComponent,
    MopetDetailsComponent,
    DelgateDateRangeComponent,
    DelgateProposalWorkflowComponent,
    AmendmentPreviewComponent

    //EditHrdComponentRenderer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    DataTablesModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
