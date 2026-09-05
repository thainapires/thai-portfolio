import '../css/app.css';

import { createRoot } from 'react-dom/client';
import Home from '@/Pages/Home';

const rootElement = document.getElementById('root');

if (rootElement === null) {
    throw new Error('Root element not found.');
}

createRoot(rootElement).render(<Home />);
