import { AppFooter, AppHeader } from '@/components/common';
import Search from './Search';

function App() {
    return (
        <div className="page">
            <AppHeader />
            <div className="main">
                <Search />
            </div>
            <AppFooter />
        </div>
    );
}

export default App;