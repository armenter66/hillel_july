import { Form, Field, ErrorMessage, Formik } from "formik"
import * as Yup from "yup"; 
import './TodoForm.css'
import { addTodoAndSave } from "../store/actions";
import { useDispatch } from "react-redux";

export default function TodoForm(  ) {

    const dispatch = useDispatch();

    return (
        <Formik 
            initialValues={{task: ""}}
            validationSchema={Yup.object({
                task: Yup.string()
                .trim()
                .min(5, 'Must be at least 5 characters')
                .required('Required'),
            })}
            onSubmit={(values, {resetForm}) => {
                dispatch(addTodoAndSave(values.task.trim()));
                resetForm();
            }}
        >
            <Form style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Field
                type="text"
                name="task"
                placeholder="Enter a task"
                style={{ padding: "8px 10px" }}
                />

                <ErrorMessage
                name="task"
                component="div"
                style={{ color: "crimson", fontSize: "14px" }}
                />

                <button type="submit">Add</button>
            </Form>
        </Formik>
    )
}