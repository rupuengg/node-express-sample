// authService

// const CustomError = require('../helpers/custom.error.helper');
// const httpConstant = require('../constants/http.constant');
// const errorMessageConstant = require('../constants/error.message.constant');
const authDao = require('../dao/auth.dao');

const authenticate = async (body) => {
  const user = await authDao.authenticate(body);
  // throw new CustomError(httpConstant.NOT_FOUND, errorMessageConstant.INVALID_LOGIN_CREDENTIAL);
  return { data: user };
};

module.exports = {
  authenticate
};