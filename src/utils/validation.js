// all validation functions goes here

import { regex } from '../config/const';

/**
 * function to check whether provided value is empty or not
 * @param  {any}  value [value to be checked]
 * @return {Boolean}
 */
export const isEmpty = value => {
  return !value || typeof value === String && !value.trim();
};

/**
 * function to check provided value is number or not
 * @param {*} value
 */
export const isValidNumber = value => {
  return regex.number.test(value);
};

/**
 * function to validate user name
 * @param {String} value [user name]
 * @returns {Boolean}
 */
export const isValidName = value => {
  if(isEmpty(value)) {
    return false;
  }

  return regex.name.test(value);
};

/**
 * function to validate alphanumeric
 * @param {String} value
 * @returns {Boolean}
 */
export const isValidAlphanumeric = value => {
  if(isEmpty(value)) {
    return false;
  }

  return regex.alphaNumeric.test(value);
};

/**
 * function to validate phone number
 * @link https://stackoverflow.com/a/16702965
 */
export const isValidPhoneNumber = value => {
  if(isEmpty(value)) {
    return false;
  }

  return regex.phone.test(value);
};

/**
 * function to validate email
 * @link https://stackoverflow.com/a/46181
 */
export const isValidEmail = value => {
  if(isEmpty(value)) {
    return false;
  }

  return regex.email.test(value);
};
