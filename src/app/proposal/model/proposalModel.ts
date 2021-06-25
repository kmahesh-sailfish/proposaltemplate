export class ProposalModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public proposalEntity: ProposalEntity // refer to type Availability  below
  ) {}
}

export class ProposalEntity {
  constructor(
    public enrollmentId: number,
    public id: number,
    public proposalId: string,
    public customerName: string,
    public createdByAlias: string,
    public createdDate: string,
    public status: string,
    public delegatingPartyAlias: string,
    public delegationStatus: number,
    public version: string,
    public isConsolidated: string,
    public isNonPricingConsolidated: string,
    public delegatedTo: string,
    public lastModified: string,
    public currentOwner: string,
    public notes: string,
    public delegationRequestedByAlias: string,
    public clonedFromProposalId: string,
    public supressHeadersFooters: string,
    public isInActive: string,
    public pricingCountry: string,
    public lastModifiedBy: string,
    public ctmFooterID: string,
    public isShared: string,
    public isSubmitted: boolean,
    public highestEmpowerment: string,
    public isArchive: boolean,
    public ctmCode: string,
    public isPricing: boolean,
    public pageBreak: string,
    public agreementId: string,
    public identifier: string,
    public dealNickname: string,
    public hrddTotalValue: string,
    public hrddMaxDiscount: string,
    public isLinked: boolean,
    public isMasterProposal: boolean,
    public linkedProposalId: string,
    public isDraft: boolean,
    public isDeleted: boolean,
    public proposalSharings: any,
    public proposalAmendments: any,
    public proposalValidationResults: any
  ) {}
}

// export class ProposalModel {
//   editProposal: object;
// }
