export function CheckCompanyScope(ScopeNeeded: string) {
  return (req: any, res: any, next: any) => {
    try {
      const CompanyScopes = [
        {
          Company: 1,
          Permission: "Access_API",
        },
      ];

      //filter by company - create new array of strings of permissions
      const CompanyPermissions = CompanyScopes.filter(
        (x) => x.Company === req.user.Company
      );

      if (CompanyPermissions.length > 0) {
        const Permissions = CompanyPermissions.map((x) => x.Permission);
        if (Permissions.includes(ScopeNeeded)) {
          console.log("Company has the required permissions: " + ScopeNeeded);
          next();
        } else {
          res.status(403).json({
            message:
              "Forbidden - company does not have the required permissions: " +
              ScopeNeeded +
              "",
          });
        }
      } else {
        res.status(403).json({
          message:
            "Forbidden - company does not have the required permissions: " +
            ScopeNeeded +
            "",
        });
      }
      console.log("Company has the required permissions: " + ScopeNeeded);
      next();
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
