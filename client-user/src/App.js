import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { Provider } from 'react-redux';
import store from './stores';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App




// import Navbar from "./components/Navbar";
// import MainPage from "./components/MainPage";
// import DetailPage from "./components/DetailPage";


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <DetailPage />
//       <MainPage />
//     </div>
//   );
// }


// export default App;
