import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesAction } from '../stores/actionCreator';
import Loading from './LoadingScreen';
import { Link } from 'react-router-dom';

function CategoriesTable() {
  const { categories } = useSelector(state => state.categories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const fetchCategories = async () => {
    try {
      await dispatcher(getCategoriesAction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead className="w-full">
          <tr>
            <th>Id</th>
            <th></th>
            <th></th>
            <th>Category Name</th>
            <th></th>
            <th></th>
            <th>
              <Link
                to="/add-category"
                className="bg-[#dc4e42] py-3 px-10 text-white rounded-xl mt-4 hover:bg-[#be3d3d]"
              >
                Add Category
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => {
            return (
              <tr>
                <th>
                  <div>{category.id}</div>
                </th>
                <td>
                  <div className="flex items-center space-x-3"></div>
                </td>
                <td>
                  <br />
                </td>
                <td>{category.name}</td>
              </tr>
            );
          })}
        </tbody>
        {/* <!-- foot --> */}
      </table>
    </div>
  );
}

export default CategoriesTable;
