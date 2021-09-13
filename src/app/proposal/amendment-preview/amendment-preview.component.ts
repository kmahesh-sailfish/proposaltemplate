import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProposalService } from 'src/app/proposal.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-amendment-preview',
  templateUrl: './amendment-preview.component.html',
  styleUrls: ['./amendment-preview.component.css']
})
export class AmendmentPreviewComponent implements OnInit {

  constructor( public route: ActivatedRoute,private proposalservice:ProposalService
    ,public sanitizer: DomSanitizer) {

   }
  docHtml:string="";
  documentName:string;
  docId:number;
  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.docId = +params.get("documentId");
      console.log("Document ID",this.docId);
    });
    this.proposalservice.getAmendmentPreview(this.docId).subscribe(data=>{
      this.docHtml=data.output.data;
      this.documentName=data.output.fileName;
    });
  }

}
