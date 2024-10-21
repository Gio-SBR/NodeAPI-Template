export let APIUser = null;

export function SetUser(req: any, res: any, next: any) {
  try {
    APIUser = req.user;
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
