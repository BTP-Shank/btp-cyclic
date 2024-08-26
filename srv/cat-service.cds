using shank.db as db from '../db/data-model';

@path: 'CatalogService'
service CatalogService {

   entity teams @(
      title              : 'Teams',
      odata.draft.enabled: true
   ) as projection on db.master.teams {
      *,
      member : redirected to members
   };

   entity members @(
      title              : 'Members',
   ) as projection on db.transaction.members {
      *,
      address : redirected to address,
      parentkey : redirected to teams
   };

   entity address @(
      title : 'Address'
   ) as projection on db.transaction.address {
      *,
      parentmember : redirected to members
   }


}
