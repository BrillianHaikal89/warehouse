import Link from 'next/link';
import { FaSignInAlt, FaWarehouse, FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md relative">
        {/* Back button for mobile */}
        <div className="md:hidden absolute top-4 left-4">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            aria-label="Kembali ke halaman utama"
          >
            <FaArrowLeft className="text-xl" />
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <FaWarehouse className="text-primary text-4xl" />
          </div>
          <h1 className="text-2xl font-bold">Login Admin Gudang JNE</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Masukkan kredensial Anda untuk mengakses sistem
          </p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700"
              placeholder="Masukkan username"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary dark:bg-gray-700"
              placeholder="Masukkan password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
          >
            <FaSignInAlt /> Login
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <Link href="#" className="text-primary hover:underline">
            Lupa password?
          </Link>
        </div>
      </div>
    </div>
  );
}