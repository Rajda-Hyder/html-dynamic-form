"use client"; // Enables client-side interactivity in Next.js app directory
import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  experience: string;
};

const DynamicForm = () => {
  // State to store form data with explicit types
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default page reload
    console.log("Form Data:", formData); // Log all form data to the console
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dynamic Resume Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md w-96">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label htmlFor="education" className="block font-medium mb-2">
            Education
          </label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label htmlFor="skills" className="block font-medium mb-2">
            Skills (comma separated)
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Work Experience */}
        <div className="mb-4">
          <label htmlFor="experience" className="block font-medium mb-2">
            Work Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
