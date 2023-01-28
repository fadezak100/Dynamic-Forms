import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouters from '../routes';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRouters?.map((layout) => {
          return (
            <Route
              element={layout.component}
              {...(layout.attributes ?? {})}
              key={'layout-' + layout.path}
            >
              {layout?.children?.map((page) => {
                return (
                  <Route
                    element={page.component}
                    {...(page.attributes ?? {})}
                    key={'page' + page.path}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
