// Script to manage Teamleiter memberships in Servity-Berechtigungsgruppe (Teamleitung) based on Ask-Organigramm

// List of CIs (members) that should be authorized
var members = new java.util.HashSet();

// Get the Teamleitung SecCI
var secCiTL = Lib.query("ServiceCi_description='Teamleitung' and _site.OrganizationalUnit_name='Asklepios'");

// Get all Ask-Organigramm units (Teams, Abteilungen, Bereiche)
var askOrgUnits = Lib.query("_class='CoAskOUnit' and _site.OrganizationalUnit_name='Asklepios'");

if (askOrgUnits.length > 0 && secCiTL.length > 0) {
    for each (var unit in askOrgUnits) {
        // Get all heads of the organization unit
        var heads = unit.CoAskOUnit_Head; // This should be a list of User objects

        if (heads != null) {
            for each (var head in heads) {
                if (head != null && head.LoginName != null) {
                    var loginName = head.LoginName;

                    // Find LocalUser by LoginName
                    var user = Lib.query("LocalUser_user='$login'", loginName);

                    if (user.length > 0) {
                        var memberCi = user.get(0);
                        members.add(memberCi);

                        // Apply "Member" permission
                        Lib.applySecuredPermissions(secCiTL.get(0), memberCi, "Member");
                    }
                }
            }
        }
    }
}

// --- Cleanup: Remove permissions for users no longer valid ---

if (secCiTL.length > 0) {
    var permissions = Lib.query("SecuredAuthorization_securedCi = $a", secCiTL.get(0));

    for (var i = 0; i < permissions.size(); i++) {
        var p = permissions.get(i);
        var authCis = p.SecuredAuthorization_AuthorizedCis;

        for (var j = 0; j < authCis.size(); j++) {
            var a = authCis.get(j);

            if (members.size() == 0 || !members.contains(a)) {
                // Remove authorization
                Lib.applySecuredPermissions(secCiTL.get(0), a);
            }
        }
    }
}
