import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Form from "react-bootstrap/Form";

interface MyFormValues {
  firstName: string;
}

const LoginForm: React.FC = () => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <>
      <div className="w-50 p-5 border z-index-modal shadow-lg h-100">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            alert("Teste submit");
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel label="E-mail">
              <Form.Control type="email" placeholder="email@email.com" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel label="Senha">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            className="p-3 mb-2"
            variant="warning  rounded-pill"
            type="submit"
          >
            Submit
          </Button>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
