export const checkValidate = (name, email, password) => {
  if (name !== null) {
    const namePattern = /^[a-zA-Z ]{2,}$/.test(name);
    if (!namePattern) return "Name is Invalid";
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
      password,
    );

  if (!emailPattern) return "Email is Invalid";
  if (!passwordPattern) return "Password is Invalid";

  return null;
};
