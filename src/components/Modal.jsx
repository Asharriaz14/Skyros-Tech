import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/Skyroslogo.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { X } from 'lucide-react';

function Modal({ onClose }) {
    const modalRef = useRef();
    const formRef = useRef();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
         document.body.style.overflow = 'auto';
        };
    }, []);

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_fwmr14q', 'template_6zu4mfs', formRef.current, 'swwOVYWXbiyu7tdOF')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    toast.success('Form submitted successfully. Our team will contact you soon.');
                    onClose();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to submit the form. Please try again.');
                }
            );
    
        e.target.reset();
    };
    

    return (
        <div 
            ref={modalRef} 
            onClick={closeModal} 
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
            style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%' }}
        >
            <div className="bg-white rounded-lg shadow-xl p-6 w-2/5 mx-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2 items-center text-sm text-gray-800">
                        <img src={Logo} alt="Company Logo" className="w-24 h-10" />
                    </div>
                    <div onClick={onClose} className="rounded-md bg-gray-200 p-2 cursor-pointer flex items-center hover:bg-gray-300">
                        <X className="h-4 w-4" />
                    </div>
                </div>

                <div className="divide-y divide-gray-300 py-2">
                    <div className="text-base leading-7 space-y-4 text-left flex flex-col text-gray-800">
                        <h1 className="text-3xl font-bold text-center">GET IN TOUCH</h1>
                        <form className="w-full mx-auto" ref={formRef} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter Your Name "
                                    required
                                    className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter Your Email "
                                    required
                                    className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="user_message"
                                    placeholder="Message"
                                    required
                                    className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>

                            <button className="font-semibold px-16 py-2.5 shadow-lg bg-[#4A6CF7] text-white hover:bg-[#111827] rounded-full" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;
