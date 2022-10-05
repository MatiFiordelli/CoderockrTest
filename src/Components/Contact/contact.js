import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')
        const [post, setPost] = useState('')
	let navigate = useNavigate()

	const closeContact = () => {
		const close = document.querySelector('.contact-container')
		close.style.display = 'none';
		navigate('/')
	}

        const submitPost = (e) => {
            e.preventDefault()
        }

    return(
        <div className='contact-container'>
            <div className='contact-box'>
                <div className="contact-box__title">Contact</div>
                <div className="contact-box__close" onClick={closeContact}>&#x2715;</div>
                <form className="contact-form" id="form_post" onSubmit={(e)=>submitPost(e)}>
                    <label htmlFor="iName" 
                            className="contact-form__label">Name</label>
                    <input type="text" 
							autoComplete="none" 
                            autoFocus 
							name="fName" 
                            id="iName"
                            className="contact-form__input" 
							minLength="3" 
							onChange={(e)=>{setName(e.target.value)}}
                            pattern="[a-zA-Z ]+" 
							placeholder="Fill your full name"
							required="required" 
                            title="Just letters allowed"
							value={name} />

                    <label htmlFor="iEmail" 
                            className="contact-form__label">E-mail</label>
                    <input type="email" 
                            autoComplete="none"
							className="contact-form__input"
							id="iEmail"
							name="fEmail" 
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder="Fill a valid  e-mail"
                            required="required" 
							value={email}/>

                    <label htmlFor="iPhone" 
                            className="contact-form__label">Phone</label>
                    <input type="tel" 
                            autoComplete="none" 
							className="contact-form__input"
							id="iPhone"
							name="fPhone" 
                            onChange={(e)=>{setPhone(e.target.value)}}
                            pattern="[0-9]+" 
							placeholder="Fill your phone"
							required="required" 
							title="Just numbers allowed"
                            value={phone}/>

                    <label htmlFor="iPost" 
                            className="contact-form__label">Post</label>
                    <textarea name="fPost" 
							autoComplete="none" 
                            className="contact-form__textarea"
							id="iPost"
							minLength="1" 
							onChange={(e)=>{setPost(e.target.value)}}
							placeholder="Hello..."
							required="required" 
                            value={post} />

                    <button type="submit" 
                            className="contact-form__button">&#x25bb;&nbsp;&nbsp;&nbsp;Submit</button>
                </form>

            </div>
        </div>
    )
}