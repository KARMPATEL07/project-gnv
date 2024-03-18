// InquiryForm.js
import React, { useState } from 'react';
import '../styles/form.css';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        class: '',
        query: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'Phone is invalid';
        }
        if (!formData.query.trim()) {
            newErrors.query = 'Query is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Handle form submission here
            console.log(formData);
        }
    };

    return (
        <div className="inquiry-form-container">
            <h2>Inquiry Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name<span className="required">*</span>:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email<span className="required">*</span>:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone<span className="required">*</span>:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="class">Class:</label>
                    <input type="text" id="class" name="class" value={formData.class} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="query">Query<span className="required">*</span>:</label>
                    <textarea id="query" name="query" value={formData.query} onChange={handleChange} required></textarea>
                    {errors.query && <span className="error">{errors.query}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InquiryForm;
