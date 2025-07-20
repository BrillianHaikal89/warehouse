// app/dashboard/page.jsx
"use client";

import { FaBoxes, FaTruck, FaChartBar, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would call your logout API here
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaBoxes className="text-primary" /> Dashboard Admin Gudang
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-primary">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Barang Masuk</h3>
                <p className="text-3xl font-bold mt-2">1,248</p>
              </div>
              <div className="text-primary text-3xl">
                <FaTruck />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Barang Keluar</h3>
                <p className="text-3xl font-bold mt-2">982</p>
              </div>
              <div className="text-green-500 text-3xl">
                <FaTruck className="transform rotate-180" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Stok Tersedia</h3>
                <p className="text-3xl font-bold mt-2">5,672</p>
              </div>
              <div className="text-blue-500 text-3xl">
                <FaBoxes />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Pengguna Aktif</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>
              <div className="text-purple-500 text-3xl">
                <FaUserCog />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaChartBar className="text-primary" /> Statistik Bulanan
          </h2>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Grafik statistik akan muncul di sini</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Barang Masuk Terakhir</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2">ID Barang</th>
                    <th className="text-left py-2">Tanggal</th>
                    <th className="text-left py-2">Kota</th>
                    <th className="text-right py-2">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">BRG-00{i+1}</td>
                      <td className="py-3">2023-11-{10+i}</td>
                      <td className="py-3">Jakarta</td>
                      <td className="py-3 text-right">{50+i*5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Barang Keluar Terakhir</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2">ID Barang</th>
                    <th className="text-left py-2">Tanggal</th>
                    <th className="text-left py-2">Kota</th>
                    <th className="text-right py-2">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3">BRG-00{i+6}</td>
                      <td className="py-3">2023-11-{5+i}</td>
                      <td className="py-3">Bandung</td>
                      <td className="py-3 text-right">{30+i*3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}