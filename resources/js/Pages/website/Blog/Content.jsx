import React from 'react';

const Content = () => {
  return (
    <div className="px-6 py-8">
      <div className="flex justify-between container mx-auto">
        <div className="w-full lg:w-8/12">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
            <div>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Latest</option>
                <option>Last Week</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">Jun 1, 2020</span>
                <a href="#" className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
                  Laravel
                </a>
              </div>
              <div className="mt-2">
                <a href="#" className="text-2xl text-gray-700 font-bold hover:underline">
                  Build Your New Idea with Laravel Framework.
                </a>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur
                  doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in
                  modi ratione libero!
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a>
                <div>
                  <a href="#" className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar"
                      className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                    />
                    <h1 className="text-gray-700 font-bold hover:underline">Alex John</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-8 w-4/12 hidden lg:block">

          <div className="mt-10 px-8">
            <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
            <div className="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
              <ul>
                <li><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- AWS</a></li>
                <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Laravel</a></li>
                <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Vue</a></li>
                <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Design</a></li>
                <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Django</a></li>
                <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- PHP</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 px-8">
            <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
            <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
              <div className="flex justify-center items-center">
                <a href="#" className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500">Laravel</a>
              </div>
              <div className="mt-4">
                <a href="#" className="text-lg text-gray-700 font-medium hover:underline">
                  Build Your New Idea with Laravel Framework.
                </a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <a href="#" className="text-gray-700 text-sm mx-3 hover:underline">Alex John</a>
                </div>
                <span className="font-light text-sm text-gray-600">Jun 1, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
