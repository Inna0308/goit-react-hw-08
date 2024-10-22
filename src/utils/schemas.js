import * as Yup from "yup";

export const addContactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("This field is required"),
  number: Yup.string()
    .required("This field is required")
    .matches(/^\+?\d{1,3}[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/),
});
