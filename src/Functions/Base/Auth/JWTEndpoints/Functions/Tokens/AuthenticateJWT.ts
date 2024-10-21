import jwt from "jsonwebtoken";

export async function AuthenticateJWT(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
      if (err) {
        res.status(403).json({
          Error: "Invalid token",
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({
      Error: "No token provided",
    });
  }
}
