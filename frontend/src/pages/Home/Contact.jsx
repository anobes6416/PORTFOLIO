import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Sebona Ifa Negawo",
    age: "23",
    gender: "Male",
    email: "sebonaifa777@gmail.com",
    mobile: "+251-949-557-556",
    country: "Ethiopia",
  };
  return (
    <div>
      <SectionTitle title="Say Hello 👋🏻👋🏻👋🏻" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5 text-sm">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary text-sm">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/b37e819f-db6c-4bc9-b6cd-2bf367e0e9c3/3azWY8xX28.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
