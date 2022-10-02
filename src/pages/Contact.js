import { useState, useRef, useEffect  } from 'react'
import emailjs from '@emailjs/browser';
import '../components/styles/form.css';
import { Fade } from "react-awesome-reveal"
import Loader from '../components/UI/Loader'

const Contact = () => {
    const [error, setError] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [succcess, setCuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const form = useRef()

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);

    }, []);

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
        setError(null)
    }

    const onNameValue = (e) => { setName(e.target.value) }
    const onEmailValue = (e) => { setEmail(e.target.value) } 
    const onMessageValue = (e) => { setMessage(e.target.value) }
    
    const checkForm = () => {
        let isValied = true

        if (!name || !message || !email || name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
            isValied = false
        }

        return isValied
    }


    const validateEmail = () => {
        let isValid = true

        if (email && email.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            isValid = false
        }

        return isValid
    }

  

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const isValid = checkForm()
        const isValidEmail = validateEmail()

        if (!isValid) {
            setError('All inputs are required')
            return
        }

        if(isValidEmail) {
            setError('Email is not valid format')
            return
        }

        if(!error) {
            setError('I will contact you soon as possible')
        }

        emailjs.sendForm('service_cx6i0wv', 'template_xgkxhjh', form.current, 'gLVhYE3uLW0l0Qq-y')
            .then((result) => {
                console.log(result.text)
                setCuccess('The message was send successfully. I will send answer to your message soon as possible.')
            }, (error) => {
                console.log(error.text)
         })

        clearForm()
    }

    return (
        <div className="inner-page">
           {loading && <Loader />}
            {error &&
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="alert alert-danger" role="alert">{error}</div>
                        </div>
                    </div>
                </div>
            }

            {succcess &&
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="alert alert-success" role="alert">{succcess}</div>
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
                            <form ref={form} onSubmit={onSubmitHandler}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="mb-3 d-block">Name</label>
                                    <input onChange={onNameValue} value={name} type="text" name="user_name" className="form-control custom-input shadow-none" id="name" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="mb-3 d-block">Email</label>
                                    <input onChange={onEmailValue} value={email} type="text" name="user_email" className="form-control custom-input shadow-none" id="email" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="mb-3 d-block">Message</label>
                                    <textarea onChange={onMessageValue} name="message" className="form-control custom-input shadow-none" value={message} />
                                </div>

                                <button type="submit" className="btn btn-primary full-width">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Contact