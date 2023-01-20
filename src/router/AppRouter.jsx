import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { NotFound } from '../pages/NotFound';

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
};
