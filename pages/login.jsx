/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48 rounded-full mb-[15px]"
                          src="logo.jpeg"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The Chique-Bags Team
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Please to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background:
                                'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                            }}
                          >
                            Login
                          </button>
                          <Link href={'/forgotpassword'}>
                            <a className="text-gray-500" href="">
                              Forgot password?
                            </a>
                          </Link>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Do not have an account?</p>
                          <Link href={'/signup'}>
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Sign Up
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background:
                        'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        My company just shelling bags
                      </h4>
                      <p className="text-sm">
                        In the modern world, bags are ubiquitous, with many
                        people routinely carrying a wide variety of them in the
                        form of cloth or leather briefcases, handbags, and
                        backpacks, and with bags made from more disposable
                        materials such as paper or plastic being used for
                        shopping, and to carry home groceries. A bag may be
                        closable by a zipper, snap fastener, etc., or simply by
                        folding (e.g. in the case of a paper bag). Sometimes a
                        money bag or travel bags has a lock. The bag likely
                        predates the inflexible variant, the basket, and bags
                        usually have the additional advantage over baskets of
                        being foldable or otherwise compressible to smaller
                        sizes. On the other hand, baskets, being made of a more
                        rigid material, may better protect their contents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
