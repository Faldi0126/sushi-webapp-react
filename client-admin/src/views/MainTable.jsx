import { useState, useEffect } from 'react';
import FoodTR from '../components/ReusedTable';
// import AddFoodForm from './AddFoodForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFoodsAction } from '../stores/actionCreator';
import Loading from './LoadingScreen';

function MainTable() {
  // const [foods, setFood] = useState([]);
  const { foods } = useSelector(state => state.foods);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const fetchFoods = async () => {
    try {
      await dispatcher(fetchFoodsAction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead className="w-full">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {foods.map(food => (
              <FoodTR key={food.id} food={food} />
            ))}
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>

      {/* <AddFoodForm /> */}
    </>
  );
}

export default MainTable;

// <div className="text-gray-800 bg-white w-full h-screen">
//   <div className="p-4 flex">
//     <h1 className="text-3xl">List of Users</h1>
//   </div>
//   <div className="px-3 py-4 flex justify-center">
//     <table className="w-full text-md bg-white shadow-md rounded mb-4">
//       <tbody>
//         <tr className="border-b">
//           <th className="text-left p-3 px-5">Name</th>
//           <th className="text-left p-3 px-5">Email</th>
//           <th className="text-left p-3 px-5">Role</th>
//           <th></th>
//         </tr>
//         {/* data */}
//         {/* <tr className="border-b hover:bg-orange-100 bg-gray-100">
//           <td className="p-3 px-5">
//             <input
//               type="text"
//               value="user.name"
//               className="bg-transparent"
//             />
//           </td>
//           <td className="p-3 px-5">
//             <input
//               type="text"
//               value="user.email"
//               className="bg-transparent"
//             />
//           </td>
//           <td className="p-3 px-5">
//             <select value="user.role" className="bg-transparent">
//               <option value="user">user</option>
//               <option value="admin">admin</option>
//             </select>
//           </td>
//           <td className="p-3 px-5 flex justify-end">
//             <button
//               type="button"
//               className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//             >
//               Delete
//             </button>
//           </td>
//         </tr> */}
//         {users.map(user => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
