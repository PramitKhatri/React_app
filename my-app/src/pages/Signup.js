import React from 'react'
import {  Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    return (
        <Formik
            initialValues={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .max(20, 'must be 20 character or less')
                    .required('Firstname is mandatory'),
                lastname: Yup.string()
                    .max(20, 'must be 20 character or less')
                    .required('Lastname is mandatory'),
                email: Yup.string()
                    .email('Invalid Email')
                    .required('Firstname is mandatory'),
                password: Yup.string()
                    .matches(/(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$^&*_])[A-Za-z0-9@#$&-_Q!]{8,}$/, 'weak password password should be like this: abC@12sc and must be of 8 characters or more')
                    .required('password is mandatory'),
                cpassword: Yup.string()
                    .required('confirm password is mandatory')
                    .oneOf([Yup.ref('password'), null], 'password and confirm password does not amtch')
            })}
        >

            <div className='container my-3'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-5 shadow p-3'>
                        <Form>
                            <div className='mb-2'>
                                <label htmlFor='fname'>Firstname</label>
                                <Field type='text' name='firstname' id='fname' className='form-control' />
                                <ErrorMessage name='firstname'>
                                    {msg => <div style={{ color: 'red' }}> {msg} </div>}
                                </ErrorMessage>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Lastname</label>
                                <Field type='text' name='lastname' id='lname' className='form-control' />
                                <ErrorMessage name='lastname'>
                                    {msg => <div style={{ color: 'red' }}> {msg} </div>}
                                </ErrorMessage>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='mail'>Email</label>
                                <Field type='email' name='email' id='mail' className='form-control' />
                                <ErrorMessage name='email'>
                                    {msg => <div style={{ color: 'red' }}> {msg} </div>}
                                </ErrorMessage>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='pwd'>Password</label>
                                <Field type='text' name='password' id='pwd' className='form-control' />
                                <ErrorMessage name='password'>
                                    {msg => <div style={{ color: 'red' }}> {msg} </div>}
                                </ErrorMessage>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='cpwd'>Confirm Password</label>
                                <Field type='text' name='cpassword' id='cpwd' className='form-control' />
                                <ErrorMessage name='cpassword'>
                                    {msg => <div style={{ color: 'red' }}> {msg} </div>}
                                </ErrorMessage>
                            </div>

                            <div className='mb-2'>
                                <button className='btn btn-primary'>Register</button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </Formik>


    )
}

export default Signup

/*<div className='container'>
        <div className='d-flex justify-content-center'>
            <div className='col-5'>
            <h2 className='text-center'>Sign Up Form</h2>
                <form className='p-3 shadow'>
                    <div className='mb-2'>
                        <label htmlFor='fname'>Firstname</label>
                        <input type='text' id='fname' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>lastname</label>
                        <input type='text' id='lname' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='pwd'>Password</label>
                        <input type='password' id='pwd' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cpwd'> confirm Password</label>
                        <input type='password' id='cpwd' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-outline-primary'>Sign-in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
 */