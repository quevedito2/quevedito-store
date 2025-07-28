import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen flex flex-col bg-black text-white">
        <header className="sticky top-0 z-50 bg-neutral-900 p-4 flex justify-between items-center shadow-md">
            <Link to="/" className="text-xl font-bold transition-transform duration-200 hover:scale-105"
            >
                Quevedito`s Store
            </Link>
            <nav className="space-x-4">
                <Link to={ROUTES.home} className="hover:underline">Inicio</Link>
                <Link to={ROUTES.tools} className="hover:underline">Herramientas</Link>
                <Link to={ROUTES.accessories} className="hover:underline">Accesorios</Link>
            </nav>
        </header>

        <main className="flex-1 p-4 bg-gray-100 text-black">
            {children}
        </main>

        <footer className="bg-neutral-900 text-white text-center p-2">
            © 2025 Quevedito`s Store
        </footer>
    </div>
);

export default Layout;
