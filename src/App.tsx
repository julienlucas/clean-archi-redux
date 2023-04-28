import { Suspense } from 'react';

import { persistor } from '@andragog/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import ProductionPage from '@andragog/userinterface/pages/production';

const App = () => {
  const router = createBrowserRouter([
    {
      path: `/production`,
      element: <ProductionPage />,
    },
  ]);

  return (
    <Suspense fallback={null}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<ProductionPage />} />
      </PersistGate>
    </Suspense>
  );
};

export default App;
