import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetailAction } from '../stores/actionCreator';
import { editFoodAction } from '../stores/actionCreator';
import LoadingScreen from './LoadingScreen';
import { useNavigate } from 'react-router-dom';

function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { food } = useSelector(state => state.food);

  const [loading, setLoading] = useState(true);

  const dispatcher = useDispatch();

  const fetchDetail = async () => {
    try {
      await dispatcher(getDetailAction(id));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const input = {
    name: '',
    description: '',
    price: '',
    imgUrl: '',
    categoryId: '',
  };

  const [formData, setFormData] = useState(input);

  useEffect(() => {
    fetchDetail(id);
  }, [id]);

  useEffect(() => {
    if (food.id) {
      setFormData(food);
    }
  }, [food]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async event => {
    event.preventDefault();
    try {
      await dispatcher(editFoodAction(formData, id));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

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
        <div className="p-6 md:p-6 flex flex-col flex-grow mr-10">
          {/* <!-- top content --> */}
          <h2 className="mb-10 text-4xl font-bold">Edit Food</h2>

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
                <option disabled>Pick one</option>
                <option value={1}>Sashimi</option>
                <option value={2}>Sushi Roll</option>
                <option value={3}>Bento</option>
                <option value={4}>Baverages</option>
              </select>
            </div>

            <div className="flex items-center justify-center mt-2">
              <button
                onClick={handleClick}
                className="bg-[#e2584b] hover:bg-[#e95e4b] py-3 px-10 text-white rounded-xl mt-2"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditForm;
