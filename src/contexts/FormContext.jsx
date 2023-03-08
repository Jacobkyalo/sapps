import { createContext, useState } from "react";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [state, setState] = useState({
    semester: "",
    unitCode: "",
    unitName: "",
    unitScore: "",
    totalMarks: 100,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const values = {
    state,
    handleChange,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
