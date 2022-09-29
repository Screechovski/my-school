import jwt, {JwtPayload} from "jsonwebtoken";
const JWT_SERCERT_ACCESS = 'd41d8cd98f00b204e9800998ecf8427e';
const JWT_SERCERT_REFRESH = '8ed358a7da3cc760364909d4aaf7321e';

type Payload = {
    id: string,
    email: string,
    role: string,
    active: boolean
}

export const generateTokens = (payload: Payload) => {
    const accessToken = jwt.sign(payload, JWT_SERCERT_ACCESS, {expiresIn: '1m'}); // 30min
    const refreshToken = jwt.sign(payload, JWT_SERCERT_REFRESH, {expiresIn: '5m'}); // 30d

    return {
        accessToken,
        refreshToken
    }
}

export const decodRefreshToken: any = (token: string) => {
    try {
        const res = jwt.verify(token, JWT_SERCERT_REFRESH);
        return res;
    } catch (error) {
        return false;
    }
}

export const decodAccessToken: any = (token: string) => {
    try {
        const res = jwt.verify(token, JWT_SERCERT_ACCESS);
        return res;
    } catch (error) {
        return false;
    }
}