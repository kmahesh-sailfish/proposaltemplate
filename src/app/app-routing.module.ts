import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActiveProposalComponent } from "./proposal/active-proposal/active-proposal.component";
import { CreateProposalComponent } from "./proposal/create-proposal/create-proposal.component";
import { DownloadAmendentComponent } from "./proposal/download-amendent/download-amendent.component";
import { ReplicateProposalComponent } from "./proposal/replicate-proposal/replicate-proposal.component";
import { DashboardComponent } from "./proposal/dashboard/dashboard.component";
import { ArchiveProposalComponent } from "./proposal/archive-proposal/archive-proposal.component";
import { DelegationComponent } from "./proposal/delegation/delegation.component";
import { MultipleDocsComponent } from "./proposal/multiple-docs/multiple-docs.component";
import { AuthorizeDelegationComponent } from "./proposal/authorize-delegation/authorize-delegation.component";
import { CtmLibraryComponent } from "./proposal/ctm-library/ctm-library.component";
import { ProposalOverviewComponent } from "./proposal/proposal-overview/proposal-overview.component";
import { AdminPanelComponent } from "./admin/admin-panel/admin-panel.component";
import { CtmFooterComponent } from "./proposal/ctm-footer/ctm-footer.component";
import { PubliCtmComponent } from "./proposal/ctm-library/publi-ctm/publi-ctm.component";
import { PrivateCtmComponent } from "./proposal/ctm-library/private-ctm/private-ctm.component";

const routes: Routes = [
  {
    path: "ctmfooter",

    component: CtmFooterComponent
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "activeproposal", component: ActiveProposalComponent },
  { path: "createproposal", component: CreateProposalComponent },
  { path: "replicaporposal", component: ReplicateProposalComponent },
  { path: "downloadamendet", component: DownloadAmendentComponent },
  { path: "proposaloverview/:id", component: ProposalOverviewComponent },
  { path: "archiveproposal", component: ArchiveProposalComponent },
  { path: "delegation", component: DelegationComponent },
  { path: "multipledocs", component: MultipleDocsComponent },
  { path: "authorizedelegation", component: AuthorizeDelegationComponent },
  {
    path: "ctmlibrary",
    component: CtmLibraryComponent,
    children: [
      { path: "public", component: PubliCtmComponent },
      { path: "private", component: PrivateCtmComponent }
    ]
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "admin", component: AdminPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
