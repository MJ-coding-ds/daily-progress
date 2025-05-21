
// List of authorizableCis that have to be authorized (used to determine which cis have no authorization anymore)
var members = new java.util.HashSet()

//Änderung: Lib.queryCount("CoAskOUnit AND Object_Deleted isNull false");

var service = Lib.query("Service_name='10000330' and _site.OrganizationalUnit_name='Asklepios'")

//BLEIBT
var secCis = Lib.query("ServiceCi_service.Service_name='10000000' and CiTeamInfo_TeamLead isNull false")

// MUSS GEÄNDERT WERDEN: Lib.queryCount("CoAskOUnit AND CoAskOUnit_Head isNull false");

var secCiTL = Lib.query("ServiceCi_description='Teamleitung' and _site.OrganizationalUnit_name='Asklepios'")
   
if (secCis.length > 0) {
    for each(var i in secCis) {
       var ci = Lib.query("ServiceCi_service=$service and Ci_owner.LocalUser_user=$owner", service[0], i//.CiTeamInfo_TeamLead)
       memberCi = ci.get(0);
      members.add(memberCi);
        if (secCiTL.size() > 0 && ci.size() > 0)
         Lib.applySecuredPermissions(secCiTL[0], ci[0], "Member")
   }
}

var permissions = Lib.query("SecuredAuthorization_securedCi = $a", secCiTL.get(0));
for(var i=0; i < permissions.size(); i++){
   var p = permissions.get(i);
   var authCis = p.SecuredAuthorization_AuthorizedCis;
   for(var j=0; j < authCis.size(); j++){
      var a = authCis.get(j);
      if(members.size() == 0 || !members.contains(a)) Lib.applySecuredPermissions(secCiTL[0], a);
   }
}