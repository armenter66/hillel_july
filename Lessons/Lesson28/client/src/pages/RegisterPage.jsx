import { useFormik } from "formik"
import { RegisterSchema } from "../common/validationSchemas";

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      fullname: '',
      city: 'OD',
    },
    validationSchema: RegisterSchema,
    onSubmit: values => {
      console.log(values);
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
        })
    }
  })

  return (
    <div>
      <h2>SignUp Page</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {formik.errors.login ? <div className="error">{formik.errors.login}</div> : ''}
          <input
            type="text"
            name="login"
            placeholder="Enter login"
            value={formik.values.login}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ''}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          {formik.errors.fullname ? <div className="error">{formik.errors.fullname}</div> : ''}
          <input
            type="text"
            name="fullname"
            placeholder="Enter fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <select name="city" value={formik.values.city} onChange={formik.handleChange}>
            <option value="OD">Odessa</option>
            <option value="KYIV">Kyiv</option>
            <option value="DN">Dnipro</option>
            <option value="KH">Kharkiv</option>
            <option value="LV">Lviv</option>
          </select>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}