import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAdminAction } from '../stores/actionCreator';

function RegisterForm() {
  const navigate = useNavigate();
  const input = {
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  };

  const [values, setValues] = useState(input);
  const dispatcher = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatcher(addAdminAction(values));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1522701025355-3b334358d451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-75 brightness-50"></div>

      {/* <!-- card container --> */}
      <div className="relative flex flex-col w-3/5 m-6 space-y-5 px-10 bg-white shadow-xl rounded md:flex-row md:space-y-0">
        {/* <!-- right side --> */}
        <div className="w-full flex flex-col justify-center items-center p-5 md:p-5">
          {/* <!-- top content --> */}
          <h2 className="mb-5 p-5 text-4xl font-bold">Add a New Admin</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              type="text"
              className="p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Your Email Address"
              name="email"
              onChange={handleInputChange}
              value={values.email}
            />

            <input
              type="text"
              className=" p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Your Username"
              name="username"
              onChange={handleInputChange}
              value={values.username}
            />

            <input
              type="password"
              className=" p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleInputChange}
              value={values.password}
            />

            <input
              type="text"
              className=" p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Your Phone Number"
              name="phoneNumber"
              onChange={handleInputChange}
              value={values.phoneNumber}
            />

            <input
              type="text"
              className=" p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Your Address"
              name="address"
              onChange={handleInputChange}
              value={values.address}
            />

            <div className="flex items-center justify-center">
              <button className="bg-[#dc4e42] py-3 px-10 text-white rounded-xl mt-4 hover:bg-[#be3d3d]">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
