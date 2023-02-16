import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addFoodAction } from '../stores/actionCreator';

function AddFood() {
  const navigate = useNavigate();
  const input = {
    name: '',
    description: '',
    price: '',
    imgUrl: '',
    categoryId: '',
    ingredientName: '',
  };

  // -------------------
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = i => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };

  //----------------------

  const [formData, setformData] = useState(input);
  const dispatcher = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async event => {
    event.preventDefault();
    try {
      formData.ingredientName = val;
      await dispatcher(addFoodAction(formData));
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
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0">
        {/* <!-- left side --> */}
        <img
          src="https://images.unsplash.com/photo-1635452273191-f08ce9934102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className=" bg-opacity-75 brightness-85 rounded-3xl hidden md:block p-5"
        />

        {/* <!-- right side --> */}
        <div className="p-6 md:p-6 flex flex-col flex-grow mr-10">
          {/* <!-- top content --> */}
          <h2 className="mb-10 text-4xl font-bold">Add New Food</h2>

          <form action="" className="">
            <input
              type="text"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />

            <input
              type="number"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter the image url"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleInputChange}
            />

            <div className="form-control w-full max-w-xs mb-5 rounded-md placeholder:font-light">
              <label className="label">
                <span className="label-text">Select a category</span>
              </label>
              <select
                className="select select-bordered"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
              >
                <option disabled selected>
                  Pick one
                </option>
                <option value={1}>Sashimi</option>
                <option value={2}>Sushi Roll</option>
                <option value={3}>Bento</option>
                <option value={4}>Baverages</option>
                {/* <option value={5}>Star Trek</option> */}
              </select>
            </div>
            {/* 
            <input
              type="text"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter the Main Ingredient"
              name="ingredientName"
              value={formData.ingredientName}
              onChange={handleInputChange}
            /> */}
            {/* <input
              type="text"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter the Main Ingredient"
              name="ingredientName"
              value={formData.ingredientName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
              placeholder="Enter the Main Ingredient"
              name="ingredientName"
              value={formData.ingredientName}
              onChange={handleInputChange}
            /> */}

            <a onClick={() => handleAdd()} className="btn btn-error">
              Add
            </a>
            {val.map((data, i) => {
              return (
                <div key={i}>
                  <input
                    value={data}
                    onChange={e => handleChange(e, i)}
                    className="w-full p-3 mb-3 border border-gray-300 rounded-md placeholder:font-light"
                  />
                  <button onClick={() => handleDelete(i)}>x</button>
                </div>
              );
            })}

            <div className="flex items-center justify-center mt-2">
              <button
                onClick={handleClick}
                className="bg-[#e2584b] hover:bg-[#e95e4b] py-3 px-10 text-white rounded-xl mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddFood;
