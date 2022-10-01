import jwt from 'jsonwebtoken';
const JWT_SERCERT_ACCESS = 'd41d8cd98f00b204e9800998ecf8427e';
const JWT_SERCERT_REFRESH = '8ed358a7da3cc760364909d4aaf7321e';

type Payload = {
    id: string;
    email: string;
    role: string;
    active: boolean;
};

export class Token {
    static generate = (
        payload: Payload
    ): {accessToken: string; refreshToken: string} => {
        const accessToken = jwt.sign(payload, JWT_SERCERT_ACCESS, {
            expiresIn: '15m'
        });
        const refreshToken = jwt.sign(payload, JWT_SERCERT_REFRESH, {
            expiresIn: '1d'
        });

        return {
            accessToken,
            refreshToken
        };
    };
    static decodeRefresh = (token: string): Payload | false => {
        try {
            return jwt.verify(token, JWT_SERCERT_REFRESH) as Payload;
        } catch (error) {
            return false;
        }
    };
    static decodeAccess = (token: string): Payload | false => {
        try {
            return jwt.verify(token, JWT_SERCERT_ACCESS) as Payload;
        } catch (error) {
            return false;
        }
    };
}
