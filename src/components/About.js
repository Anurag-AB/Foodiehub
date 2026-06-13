import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-50">

        {/* HERO SECTION */}
        <div className="bg-orange-500 text-white text-center py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            🍕 About FoodieHub
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto text-orange-100">
            Delivering happiness to your doorstep, one meal at a time.
          </p>

          {/* LOGGED IN USER */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <p className="mt-4 text-sm md:text-base text-orange-200">
                Welcome,{" "}
                <span className="font-bold text-white">
                  {loggedInUser}
                </span>{" "}
                👋
              </p>
            )}
          </UserContext.Consumer>
        </div>

        {/* MISSION SECTION */}
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            At FoodFire, we believe great food should be accessible to
            everyone. We connect you with the best local restaurants and
            ensure your food arrives fresh, fast, and delicious.
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="bg-white py-10 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { emoji: "🍽️", count: "500+", label: "Restaurants" },
              { emoji: "😊", count: "1M+", label: "Happy Customers" },
              { emoji: "🚚", count: "30 mins", label: "Avg Delivery" },
              { emoji: "🌆", count: "20+", label: "Cities" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-orange-50 rounded-2xl p-4 shadow-sm"
              >
                <p className="text-3xl">{stat.emoji}</p>
                <p className="text-xl md:text-2xl font-bold text-orange-500 mt-1">
                  {stat.count}
                </p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY US SECTION */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose FoodFire?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "⚡",
                title: "Fast Delivery",
                desc: "Get your food delivered in 30 minutes or less.",
              },
              {
                emoji: "🌟",
                title: "Top Restaurants",
                desc: "We partner only with the best rated restaurants.",
              },
              {
                emoji: "💳",
                title: "Easy Payments",
                desc: "Multiple payment options for your convenience.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <p className="text-4xl mb-3">{feature.emoji}</p>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center py-8 text-gray-400 text-sm">
          Made with ❤️ by FoodieHub Team
        </div>

      </div>
    );
  }
}

export default About;