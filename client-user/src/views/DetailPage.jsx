import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailAction } from '../stores/actionCreator';
import LoadingGif from './LoadingScreen';

function DetailPage() {
  const { id } = useParams();
  const { foodDetail } = useSelector(state => state.foodDetail);

  // const [foodDetail, setFoodDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const fetchDetail = async () => {
    try {
      await dispatcher(fetchDetailAction(id));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522701025355-3b334358d451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-75 brightness-50"></div>
        <LoadingGif />;
      </section>
    );
  }

  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1522701025355-3b334358d451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-75 brightness-50"></div>

      <div className="relative flex flex-col m-6 space-y-5 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 md:m-0 md:h-4/5 md:w-4/5 bg-opacity-90 z-50">
        <div className="flex basis-1/2">
          <img
            src={foodDetail.imgUrl}
            alt=""
            className="align-center scale-75 h-auto rounded-2xl hidden md:block object-cover hover:scale-90 transition duration-500 ease-in-out"
          />
        </div>

        <div className="flex flex-col basis-1/2 justify-center p-10 md:p-10">
          <h2 className="mb-5 text-4xl font-semibold text-[#333738]">
            {foodDetail.name}
          </h2>

          <p className="my-5">
            Harga:{' '}
            <span className="font-thin text-[#434748]">
              Rp. {foodDetail.price}
            </span>
          </p>

          <p>Description: </p>
          <p className="font-thin text-[#434748] pr-3">
            {foodDetail.description}
          </p>

          <div className="flex justify-center items-end mt-8 space-y-6 md:flex-row md:space-y-0">
            <Link
              to="/"
              type="button"
              className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Exit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
