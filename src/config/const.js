// all the application const goes here

export const regex = {

  // @link https://stackoverflow.com/a/46181
  'email': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  // regx for phone number
  'phone': /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,

  // support for A-Z 0-9 and ' .
  'alphaNumeric': /^[a-zA-Z0-9'.\s]+$/g,

  // regx for name
  'name': /^[a-zA-Z'.\s]+$/g,

  // regx to check number
  'number': /^\d+$/g
};
