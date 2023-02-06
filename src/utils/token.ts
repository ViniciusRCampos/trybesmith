import jwt from 'jsonwebtoken';

const SECRECT = process.env.JWT_SECRET || 'TrybesmithProject';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWT = (id : number) => {
  const token = jwt.sign({ data: { id } }, SECRECT, jwtConfig);
  return token;
};

export default generateJWT;