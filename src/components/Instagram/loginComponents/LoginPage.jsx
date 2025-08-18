import React, { useState } from 'react'

const LoginPage = ({ hanldeLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const formHandler = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('')
        hanldeLogin(email, password);
    }

    return (
        <div className='h-screen w-full bg-zinc-100 flex items-center justify-center'>
            <div className='p-3 w-49 bg-zinc-200 rounded-xl'>
                <form
                    onSubmit={
                        (e) => {
                            formHandler(e)
                            setEmail('')
                            setPassword('')
                        }}>
                    <div>
                        <input
                            value={email}
                            required
                            onChange={
                                (e) => {
                                    setEmail(e.target.value)
                                }
                            }
                            type='email' placeholder='Enter your email'
                        />
                    </div>
                    <div>
                        <input
                            value={password}
                            required
                            onChange={
                                (e) => {
                                    setPassword(e.target.value)
                                }
                            }
                            type='password' placeholder='Enter your password'
                        />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage