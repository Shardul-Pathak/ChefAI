import logo from '../assets/logo.jpg';

export default function Header() {
    return (
        <header>
            <nav className="w-full p-4 flex justify-center items-center absolute">
                <div className="flex items-center absolute left-4 mt-8">
                    <img src={logo} alt="Logo" className="h-12 w-12 rounded-full mr-4" />
                    <h1 className="text-3xl font-bold text-white">ChefAI</h1>
                </div>
                <div className="flex items-center absolute right-8 mt-8">
                    <a href="/featured" className="text-white mr-8 hover:underline">Featured Recipes</a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Login</button>
                </div>
            </nav>
        </header>
)}