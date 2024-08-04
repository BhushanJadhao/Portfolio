import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-1000 bg-opacity-50 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2">Mobile: <a href="tel:8080560194" className="text-blue-400">8080560194</a></p>
            <p className="mt-1">Email: <a href="mailto:bhushanjadhao18@gmail.com" className="text-blue-400">bhushanjadhao18@gmail.com</a></p>
            <p className="mt-1">Address: Narhe, Pune, Maharashtra</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} <span className="font-semibold">Bhushan Rajendra Jadhao</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

