import { Link } from 'react-router-dom';

function reusableCard({ food }) {
  return (
    <div>
      <div className="flex justify-center p-5 my-3 duration-200 hover:scale-105">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              className="rounded-t-lg object-fill w-full h-48"
              src={food.imgUrl}
              alt=""
            />
          </a>
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {food.name}
            </h5>
            <p className="text-gray-700 text-base mb-4">{food.description}</p>
            <Link
              to={`/${food.id}`}
              type="button"
              className=" inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reusableCard;
