const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-orange-500 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          📞 Contact Us
        </h1>
        <p className="text-base md:text-xl text-orange-100 max-w-xl mx-auto">
          We'd love to hear from you! Reach out anytime.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <div className="flex flex-col gap-4">

            <div>
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 transition-all resize-none"
              />
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all duration-300">
              Send Message 🚀
            </button>

          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Get in Touch
          </h2>

          {[
            {
              emoji: "📍",
              title: "Our Address",
              detail: "123, FoodieHub Lane, Mumbai, India",
            },
            {
              emoji: "📧",
              title: "Email Us",
              detail: "support@foodiehub.com",
            },
            {
              emoji: "📱",
              title: "Call Us",
              detail: "+91 98765 43210",
            },
            {
              emoji: "🕐",
              title: "Working Hours",
              detail: "Mon - Sun: 9:00 AM – 11:00 PM",
            },
          ].map((info) => (
            <div
              key={info.title}
              className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4 hover:shadow-xl transition-all duration-300"
            >
              <span className="text-3xl">{info.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-800">{info.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{info.detail}</p>
              </div>
            </div>
          ))}

          {/* SOCIAL LINKS */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="font-bold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { emoji: "📘", label: "Facebook" },
                { emoji: "📸", label: "Instagram" },
                { emoji: "🐦", label: "Twitter" },
                { emoji: "▶️", label: "YouTube" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="bg-orange-50 hover:bg-orange-100 text-orange-500 font-semibold text-xs px-3 py-2 rounded-xl transition-all duration-300"
                >
                  {social.emoji} {social.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center py-6 text-gray-400 text-sm">
        We typically respond within 24 hours ⚡
      </div>

    </div>
  );
};

export default Contact;