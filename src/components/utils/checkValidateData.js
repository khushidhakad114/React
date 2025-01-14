export const checkValidateData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassswod =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Enter a valid email";
  }
  if (!isValidPassswod) {
    return "Enter a valid password";
  }

  return null;
};

//good practice of writing code kuch glt sahi nhi hota ye bs tarika hai
