export function CheckUserScope(ScopeNeeded: string) {
  return (req: any, res: any, next: any) => {
    try {
      if (req.user.Scopes.includes(ScopeNeeded)) {
        console.log("User has the required permissions: " + ScopeNeeded);
        next();
      } else {
        res.status(403).json({
          message:
            "Forbidden - user does not have the required permissions: " +
            ScopeNeeded +
            "",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}
