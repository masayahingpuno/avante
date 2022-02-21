import React from "react";
import Image from "next/image";

function TestimonialCard() {
  return (
    <div>
      <div className="my-14 max-w-md rounded-lg bg-white py-4 px-8 shadow-lg">
        <div className="-mt-16 flex h-20 w-20 justify-center rounded-full border-2 border-main_red object-cover md:justify-end">
          <Image src="/logo.png" height={75} alt="person_1" width={95} />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Amazing Application
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <a href="#" className="text-xl font-medium text-main_red">
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
