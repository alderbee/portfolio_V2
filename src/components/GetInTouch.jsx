import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const btn = document.getElementById('button');
    const form = e.target;

    setLoading(true);
    sendEmail(form, btn, setEmail, setMessage)
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-8">
          I’d love to hear from you! Whether you have a project idea, question, or just want to chat about technology, feel free to reach out.
        </p>

        {status && <p className="text-lg mb-4">{status}</p>}

        <form id="form" onSubmit={handleSubmit} className="p-8 rounded-lg shadow-md">
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              rows="4"
              required
            />
          </div>

          <button
            id="button"
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;