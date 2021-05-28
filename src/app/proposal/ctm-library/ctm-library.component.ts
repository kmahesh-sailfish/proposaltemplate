import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctm-library',
  templateUrl: './ctm-library.component.html',
  styleUrls: ['./ctm-library.component.css']
})
export class CtmLibraryComponent implements OnInit {
public footerCategory=[{"isActive":true,"Id":2,"Name":"CCI","ParentId":null,"Description":"Consumption Incentives","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":3,"Name":"CPT","ParentId":null,"Description":"Change of Pricing Terms","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":4,"Name":"CPL","ParentId":3,"Description":"Change of Price Level","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":5,"Name":"CPC","ParentId":3,"Description":"Change of Pricing Condition","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":6,"Name":"OPT","ParentId":3,"Description":"Other ","HasRevenueImpact":false,"NeedDescription":true,"IsActive":true},{"isActive":true,"Id":7,"Name":"CTC","ParentId":null,"Description":"Change of T’s & C’s with mandatory subcategories","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":8,"Name":"AGR","ParentId":7,"Description":"Agreement Terms","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":9,"Name":"CTL","ParentId":7,"Description":"Term Length","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":10,"Name":"EDM","ParentId":7,"Description":"Effective Date Modification","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":11,"Name":"ENR","ParentId":7,"Description":"Enrollment Terms","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":12,"Name":"LOL","ParentId":7,"Description":"Limitation of Liability","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":13,"Name":"OST","ParentId":7,"Description":"Online Services Terms","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":14,"Name":"PUR","ParentId":7,"Description":"Product Use Rights","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":15,"Name":"OTC","ParentId":7,"Description":"Other","HasRevenueImpact":false,"NeedDescription":true,"IsActive":true},{"isActive":true,"Id":16,"Name":"INC","ParentId":null,"Description":"Incubation/Pilot","HasRevenueImpact":false,"NeedDescription":true,"IsActive":true},{"isActive":true,"Id":17,"Name":"PSC","ParentId":null,"Description":"Post Sales Changes","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true},{"isActive":true,"Id":20,"Name":"FWK","ParentId":null,"Description":"Framework","HasRevenueImpact":false,"NeedDescription":false,"IsActive":true}]
  constructor() { }

  ngOnInit(): void {
  }

}
