import { useFormik } from "formik"
import { useContext } from "react";
import { UserContext } from "../../contexts/Context";
import { useNavigate } from "react-router-dom";
import { AuthSchema } from "../../common/validationSchemas";

export default function AuthForm() {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: AuthSchema,
    onSubmit: values => {
      console.log(values);
      fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(response => response.json())
        .then(result => {
          user.change(result);
          navigate('/')
        })
    },
  })
  
  return (
    <div>
      <h2>AuthPage</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {formik.errors.login && (
            <div style={{ color: "red" }}>{formik.errors.login}</div>
          )}
          <input
            type="text"
            name="login"
            value={formik.values.login}
            placeholder="Enter login"
            onChange={formik.handleChange}
          />
        </div>

        <div>
          {formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            placeholder="Enter password"
            onChange={formik.handleChange}
          />
        </div>

        <button>Sign in</button>
      </form>
    </div>
  )
}