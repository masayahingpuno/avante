import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div>
      <div className="my-20 max-w-md rounded-lg bg-white py-4 px-8 shadow-lg">
        <div className="-mt-16 flex justify-center md:justify-end">
          <Image
            className="h-20 w-20 rounded-full border-2 border-indigo-500 object-cover"
            src="/logo.png"
            height={80}
            width={80}
          />
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
          <a href="#" className="text-xl font-medium text-indigo-500">
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
