const ContactUs = () => {
  return (
    <section className="bg-white font-[poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
          Contact Us
        </h2>

        {/* Form & Info Grid */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <form className="flex-1 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Our Location
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-2 leading-relaxed">
              123 Streetwear Ave, Fashion District,<br /> New York, NY 10001
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Phone: (123) 456-7890
            </p>

            <div className="w-full h-64 sm:h-80 lg:h-[26rem] rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.783889550125!2d-74.0060153845958!3d40.71277597933086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjMuNSJX!5e0!3m2!1sen!2sus!4v1634610181664!5m2!1sen!2sus"
                width="90%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
