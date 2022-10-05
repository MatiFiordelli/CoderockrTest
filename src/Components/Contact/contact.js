import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
	let navigate = useNavigate()

	const closeContact = () => {
		const close = document.querySelector('.contact-container')
		close.style.display = 'none';
		navigate('/')
	}

    return(
        <div className='contact-container'>
            <div className='contact-box'>
                <div className="contact-box__title">Contact</div>
                <div className="contact-box__close" onClick={closeContact}>&#x2715;</div>
                <form className="contact-form">
                    <label htmlFor="iName" 
                            className="contact-form__label">Name</label>
                    <input type="text" 
                            name="fName" 
                            id="iName"
                            className="contact-form__input" 
                            value="" 
                            autoFocus 
                            placeholder="Fill your full name"
                            onChange={()=>{}}/>

                    <label htmlFor="iEmail" 
                            className="contact-form__label">E-mail</label>
                    <input type="email" 
                            name="fEmail" 
                            id="iEmail"
                            className="contact-form__input"
                            placeholder="Fill a valid  e-mail"
                            onChange={()=>{}}/>

                    <label htmlFor="iPhone" 
                            className="contact-form__label">Phone</label>
                    <input type="tel" 
                            name="fPhone" 
                            id="iPhone"
                            className="contact-form__input"
                            placeholder="Fill your phone"
                            onChange={()=>{}}/>

                    <label htmlFor="iPost" 
                            className="contact-form__label">Post</label>
                    <textarea name="fPost" 
                            id="iPost"
                            className="contact-form__textarea"
                            placeholder="Hello..."
                            onChange={()=>{}}/>

                    <button type="submit" 
                            className="contact-form__button">&#x25bb;&nbsp;&nbsp;&nbsp;Submit</button>
                </form>

            </div>
        </div>
    )
}