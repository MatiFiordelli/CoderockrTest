import React from 'react'

export default function Contact(){
    return(
        <div className='contact-container'>
            <div className='contact-box'>
                <h2 className="contact-box__title">Contact</h2>
                <p className="contact-box__close">&#x2715;</p>
                <form className="contact-form">
                    <label htmlFor="fName" 
                            className="contact-form__label">Name</label>
                    <input type="text" 
                            name="fName" 
                            className="contact-form__input" 
                            value="" 
                            autoFocus 
                            placeholder="Fill your full name"/>

                    <label htmlFor="fEmail" 
                            className="contact-form__label">E-mail</label>
                    <input type="email" 
                            name="fEmail" 
                            className="contact-form__input"
                            placeholder="Fill a valid  e-mail"/>

                    <label htmlFor="fPhone" 
                            className="contact-form__label">Phone</label>
                    <input type="tel" 
                            name="fPhone" 
                            className="contact-form__input"
                            placeholder="Fill your phone"/>

                    <label htmlFor="fPost" 
                            className="contact-form__label">Post</label>
                    <textarea name="fPost" 
                            className="contact-form__textarea"
                            placeholder="Hello..."/>

                    <button type="submit" 
                            className="contact-form__button">&#x25bb;&nbsp;&nbsp;&nbsp;Submit</button>
                </form>

            </div>
        </div>
    )
}