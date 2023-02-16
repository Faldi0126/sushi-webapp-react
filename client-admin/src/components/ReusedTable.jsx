import { deleteFoodAction } from '../stores/actionCreator';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function FoodCard({ food }) {
  const dispatch = useDispatch();

  const handleDelete = async id => {
    try {
      await dispatch(deleteFoodAction(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <th>
        <div>{food.id}</div>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={food.imgUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{food.name}</div>
            <div className="text-sm opacity-50">{food.User.email}</div>
          </div>
        </div>
      </td>
      <td>
        {food.description}
        <br />
        <span className="badge badge-ghost badge-sm">{food.Category.name}</span>
      </td>
      <td>{food.price}</td>
      <th>
        <button
          onClick={() => handleDelete(food.id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
      <th>
        <Link to={`edit/${food.id}`} className="btn btn-ghost btn-xs">
          Edit
        </Link>
      </th>
    </tr>
  );
}

export default FoodCard;
