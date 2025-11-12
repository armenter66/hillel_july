import { useFormik, Form, Field, ErrorMessage, Formik } from "formik"
import * as Yup from "yup"; 
import './TodoForm.css'

export default function TodoForm( { setList } ) {
    // const formik = useFormik({
    //     initialValues: {
    //         task: '',
    //     },
    //     validationSchema: Yup.object({
    //         task: Yup.string()
    //         .trim()
    //         .min(5, 'Must be at least 5 characters')
    //         .required('Required'),
    //     }),
    //     onSubmit: values=> {
    //         console.log(values);
    //     }
    // })
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
                const newList = {
                    id: Date.now(),
                    text: values.task.trim(),
                    done: false,
                };
                setList((prev) => [newList, ...prev]);
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
            //     <form onSubmit={formik.handleSubmit}>
            //     <input type="text" name='task' value={formik.values.task} id="task" placeholder='Enter a task' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            
            //     </form>
            // )
    )
}