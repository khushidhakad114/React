export const checkValidateData = (email, password) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) {
    return "enter valid email";
  }
  if (!isValidPassword) {
    return "enter valid password";
  }
  return null;
};
