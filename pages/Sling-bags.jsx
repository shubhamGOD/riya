/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Product from '../models/Product';
import mongoose from 'mongoose';

const Watches = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font p-3">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center cursor-pointer">
            {products.map((item) => {
              return (
                <Link
                  passHref={true}
                  key={item._id}
                  href={`/bags/${item.slug}`}
                >
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:ring-1 rounded-lg">
                    <a className="block relative rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        className="md:h-[30vh] h-[45vh] m-auto md:m-0 block hover:scale-105 duration-700"
                        src={item.img}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                      <p className="mt-1">{item.size}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req, res);
  } catch (error) {
    console.log(error);
  }
  let products = await Product.find({ category: 'sling-bages' });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Watches;
