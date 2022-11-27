import React from 'react'

const About = () => {
  return (
    <>
      <div className="px-48 my-4 mx-80">
        <h1 className="py-5 ml-5 text-3xl font-bold from-stone-800">About</h1>

        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-sans text-gray-900 whitespace-nowrap dark:text-white"
                >
                  User ID
                </th>
                <td className="py-4 px-6 font-medium">89e23892e3980890</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-sans text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Name
                </th>
                <td className="py-4 px-6 font-medium">Maruf Khan</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-sans text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email
                </th>
                <td className="py-4 px-6 font-medium">marufkhan2002@gmail.com</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-sans text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Phone
                </th>
                <td className="py-4 px-6 font-medium">8943980983</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-sans text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Profession
                </th>
                <td className="py-4 px-6 font-medium">Web Developer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default About
