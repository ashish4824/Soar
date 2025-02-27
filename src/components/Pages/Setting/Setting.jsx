import React, { useState } from 'react';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('editProfile');
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '••••••••••',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    profilePicture: '/default-avatar.jpg'
  });


  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }


    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    } else if (!/^[a-zA-Z0-9_]*$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    } else if (formData.password !== '••••••••••') {  // Only validate if password is being changed
      if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long';
      } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.password)) {
        newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
    }

    if (!formData.presentAddress.trim()) {
      newErrors.presentAddress = 'Present address is required';
    }

    if (!formData.permanentAddress.trim()) {
      newErrors.permanentAddress = 'Permanent address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.city)) {
      newErrors.city = 'City can only contain letters and spaces';
        }

    const postalCodeRegex = /^\d{5}(-\d{4})?$/;
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    } else if (!postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = 'Please enter a valid postal code (e.g., 12345 or 12345-6789)';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.country)) {
      newErrors.country = 'Country can only contain letters and spaces';
    }

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4}$/;
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of Birth is required';
    } else if (!dateRegex.test(formData.dateOfBirth)) {
      newErrors.dateOfBirth = 'Please enter date in format: DD Month YYYY (e.g., 25 January 1990)';
    } else {
      const [day, month, year] = formData.dateOfBirth.split(' ');
      const date = new Date(`${month} ${day}, ${year}`);
      const today = new Date();
      const minAge = 13; 
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - minAge);
      
      if (isNaN(date.getTime())) {
        newErrors.dateOfBirth = 'Please enter a valid date';
      } else if (date > today) {
        newErrors.dateOfBirth = 'Date of Birth cannot be in the future';
      } else if (date > minDate) {
        newErrors.dateOfBirth = `Must be at least ${minAge} years old`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid', formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePicture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-[96%] mx-auto p-6">
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          <button 
            className={`pb-4 px-1 ${
              activeTab === 'editProfile' 
                ? 'border-b-2 border-blue-500 text-blue-500' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('editProfile')}
          >
            Edit Profile
          </button>
          <button 
            className={`pb-4 px-1 ${
              activeTab === 'preferences' 
                ? 'border-b-2 border-blue-500 text-blue-500' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </button>
          <button 
            className={`pb-4 px-1 ${
              activeTab === 'security' 
                ? 'border-b-2 border-blue-500 text-blue-500' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
        </nav>
      </div>

      {activeTab === 'editProfile' && (
        <div className="mt-8">
          <div className="relative w-24 h-24 mb-8">
            <img 
              src={formData.profilePicture} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-8 8-4 1 1-4 8-8z" />
              </svg>
            </label>
          </div>

          <div className="grid xl:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Date of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Present Address</label>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Permanent Address</label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.postalCode ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            className="mt-8 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Setting;

