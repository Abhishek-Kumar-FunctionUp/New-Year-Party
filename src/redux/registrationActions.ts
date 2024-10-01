export const REGISTER = "REGISTER";

export const register = (formData: any) => {
  return {
    type: REGISTER,
    payload: formData,
  };
};
