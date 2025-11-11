// src/SimpleCard.jsx
import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="max-w-2xl mx-auto mt-10 bg-yellow-100 rounded-lg shadow-lg overflow-hidden flex">
        {/* Image - Left */}
        <div className="w-1/3">
          <Image url="https://i.ytimg.com/vi/6tm6oT007XA/mqdefault.jpg" />
        </div>

        {/* Text - Right */}
        <div className="w-2/3 p-6 flex flex-col justify-center">
          <Title text="Best Game in the world" />
          <Description text="This is a beautiful and simple card about fortnite game, built with React." />
        </div>
      </div>
    );
  }
}

export default SimpleCard;