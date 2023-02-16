import ReusableCards from '../components/ReusableCards';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchFoodsAction } from '../stores/actionCreator';
import LoadGif from './LoadingScreen';

function MainPage() {
  const { foods } = useSelector(state => state.foods);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const fetchFoods = async () => {
    try {
      await dispatcher(fetchFoodsAction());
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  if (isLoading) {
    return <LoadGif />;
  }

  if (!foods || foods.length === 0) {
    return <h1 className="text-center">No food yet 😢</h1>;
  }

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-75 brightness-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to YOO Sushi</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="p-4 bg-red-500 text-white font-medium uppercase rounded-xl shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Carousel />

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <h2 className="m-5 py-7 text-4xl font-semibold text-grey-600 text-center">
        Our Menus
      </h2>

      <div className="p-3 grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-3 lg:grid-cols-4 lg:gap-3 align-center justify-center z-50 my-10">
        {foods.map(food => (
          <ReusableCards key={food.id} food={food} />
        ))}
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <Footer />
    </>
  );
}

export default MainPage;
