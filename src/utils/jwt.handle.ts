import { sign, verify} from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "sEcReT-kEy.111"

const generateToken = (id: number, role: string) => {
    const jwt = sign({id, role}, JWT_SECRET, {
        expiresIn: "2h",
    });
    return jwt;
}

const verifyToken = (jwt: string) => {
    const payload = verify(jwt, JWT_SECRET); 
    return payload;
}

export {generateToken, verifyToken};