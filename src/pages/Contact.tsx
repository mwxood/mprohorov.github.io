import { useState, useRef, useEffect  } from 'react'
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import '../components/styles/form.css';
import { Fade } from "react-awesome-reveal"
import Loader from '../components/UI/Loader'
import { FormType } from '../types/'
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const form: FormType = useRef()
    const [success, setCuccess] = useState('')


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    let emailSchema = yup.object().shape({
        userName: yup.string()
        .min(3, 'Too Short')
        .max(30, 'Too Long')
        .required('Name is Required'),
        userEmail: yup.string()
        .email()
        .required('Email is Required'),
        userMessage: yup.string()
        .min(10, 'Too Short')
        .max(300, 'Too Long')
        .required('Message is Required')
    })



    const onSubmitHandler = (values: {}, {resetForm}: any) => {

        // emailjs.sendForm('service_cx6i0wv', 'template_xgkxhjh', form.current, 'gLVhYE3uLW0l0Qq-y')
        //     .then((result) => {
        //         console.log(result.text)
        //         setCuccess('The message was send successfully. I will send answer to your message soon as possible.')
        //     }, (error) => {
        //         console.log(error.text)
        //  })
        setCuccess('The message was send. I will contact you soon as possible.')
        resetForm({values: ''})
    }

    return (
        <div className="inner-page">
           {loading && <Loader />}

           {success && 
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='alert alert-success'>{success}</div>
                        </div>
                    </div>
                </div>
            }

            <div className='header-content d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <div className='intro-text'>
                        Contact
                    </div>
                    <h1 className='mb-3'>Contact</h1>
                </div>
            </div>

            <Fade>
                <div className="container mt-5 z-index">
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <Formik initialValues={{userName: '', userEmail: '', userMessage: ''}} onSubmit={onSubmitHandler} validationSchema={emailSchema}>
                                <Form ref={form} className="mb-5">
                                    <div className="form-group mb-3">
                                        <ErrorMessage name="userName" render={msg => <div className='error-message'>{msg}</div>} />
                                        <Field type="text" 
                                        name="userName"
                                        className="form-control custom-input shadow-none"
                                        placeholder="Your name" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <ErrorMessage name="userEmail" render={msg => <div className='error-message'>{msg}</div>} />
                                        <Field 
                                        type="email"
                                        name="userEmail"
                                        className="form-control custom-input shadow-none"
                                        placeholder="Your email" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <ErrorMessage name="userMessage" render={msg => <div className='error-message'>{msg}</div>} />
                                        <Field as="textarea"
                                        name="userMessage"
                                        className="form-control custom-input shadow-none"
                                        placeholder="Your message" />
                                    </div>

                                    <button type="submit" className="btn btn-primary full-width">Send message</button>
                                </Form>

                            </Formik>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Contact