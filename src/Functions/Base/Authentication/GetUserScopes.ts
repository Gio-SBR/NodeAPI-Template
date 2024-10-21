export function GetUserScopes(req: any, res: any, next: any) {
  try {
    console.log("User: ", req.user);
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
