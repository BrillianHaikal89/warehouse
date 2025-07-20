import Image from "next/image";
import { FaBarcode, FaWarehouse, FaChartLine, FaMobileAlt, FaShieldAlt, FaUsers, FaSignInAlt, FaFilter, FaCheckCircle, FaHistory } from 'react-icons/fa';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Sistem Barcode</span> Gudang JNE
              </h1>
              <p className="text-lg md:text-xl mt-6 text-gray-600 dark:text-gray-300">
                Solusi digital untuk manajemen pemasukan dan pengeluaran barang 
                dengan teknologi scan barcode yang akurat dan real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#workflow"
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <FaBarcode /> Lihat Alur Kerja
                </a>
                <a
                  href="#contact"
                  className="border border-primary text-primary hover:bg-primary/10 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <FaUsers /> Demo Sistem
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 scan-animation">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <Image
                  src="/warehouse-scan.jpg"
                  alt="Scan Barcode di Gudang JNE"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Alur Kerja</span> Sistem
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proses manajemen barang masuk dan keluar di gudang JNE
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaSignInAlt className="text-primary" /> Login Admin
            </h3>
            
            <div className="workflow-arrow"></div>
            
            <h4 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Proses Barang Masuk</h4>
            
            <div className="workflow-step incoming">
              <h5 className="font-bold mb-2">1. Scan Barcode Barang Masuk</h5>
              <p className="text-gray-600 dark:text-gray-300">Admin melakukan scanning barcode pada barang yang masuk ke gudang</p>
            </div>
            
            <div className="workflow-step incoming">
              <h5 className="font-bold mb-2">2. Filter Data Sesuai Kota</h5>
              <p className="text-gray-600 dark:text-gray-300">Sistem memfilter data barang berdasarkan kota tujuan</p>
            </div>
            
            <div className="workflow-step incoming">
              <h5 className="font-bold mb-2">3. Menerima Data Barang Masuk</h5>
              <p className="text-gray-600 dark:text-gray-300">Sistem menyimpan data barang masuk ke database</p>
            </div>
            
            <div className="workflow-step incoming">
              <h5 className="font-bold mb-2">4. Mencatat Riwayat Barang Masuk</h5>
              <p className="text-gray-600 dark:text-gray-300">Sistem mencatat log riwayat transaksi barang masuk</p>
            </div>
            
            <div className="workflow-arrow"></div>
            
            <h4 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">Proses Barang Keluar</h4>
            
            <div className="workflow-step outgoing">
              <h5 className="font-bold mb-2">1. Scan Barcode Barang Keluar</h5>
              <p className="text-gray-600 dark:text-gray-300">Admin melakukan scanning barcode pada barang yang akan keluar</p>
            </div>
            
            <div className="workflow-step outgoing">
              <h5 className="font-bold mb-2">2. Filter Data dari Barang Masuk</h5>
              <p className="text-gray-600 dark:text-gray-300">Sistem memeriksa stok barang yang tersedia</p>
            </div>
            
            <div className="workflow-step decision">
              <h5 className="font-bold mb-2">3. Data Valid?</h5>
              <p className="text-gray-600 dark:text-gray-300">Sistem mengecek ketersediaan stok</p>
            </div>
            
            <div className="ml-12 pl-4 border-l-2 border-primary/20">
              <div className="workflow-step outgoing">
                <h5 className="font-bold mb-2">Ya → Kurangi Stok</h5>
                <p className="text-gray-600 dark:text-gray-300">Sistem mengurangi jumlah stok barang</p>
              </div>
              
              <div className="workflow-step outgoing">
                <h5 className="font-bold mb-2">Tambah ke Data Barang Keluar</h5>
                <p className="text-gray-600 dark:text-gray-300">Data barang keluar dicatat dalam sistem</p>
              </div>
              
              <div className="workflow-step outgoing">
                <h5 className="font-bold mb-2">Catat Riwayat Barang Keluar</h5>
                <p className="text-gray-600 dark:text-gray-300">Sistem menyimpan log transaksi barang keluar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Fitur Unggulan</span> Sistem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-primary">
              <div className="text-primary text-2xl mb-4">
                <FaBarcode />
              </div>
              <h3 className="text-xl font-bold mb-2">Scan Barcode</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proses cepat dan akurat untuk pencatatan barang masuk dan keluar
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-green-500">
              <div className="text-green-500 text-2xl mb-4">
                <FaFilter />
              </div>
              <h3 className="text-xl font-bold mb-2">Filter Berdasarkan Kota</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pengelompokan otomatis barang berdasarkan kota tujuan
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500">
              <div className="text-blue-500 text-2xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold mb-2">Validasi Otomatis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sistem memeriksa ketersediaan stok sebelum pengeluaran barang
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-purple-500">
              <div className="text-purple-500 text-2xl mb-4">
                <FaHistory />
              </div>
              <h3 className="text-xl font-bold mb-2">Riwayat Lengkap</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pencatatan semua transaksi masuk dan keluar secara detail
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-yellow-500">
              <div className="text-yellow-500 text-2xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold mb-2">Laporan Real-time</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitoring stok dan aktivitas gudang secara langsung
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-red-500">
              <div className="text-red-500 text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Keamanan Data</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sistem login dan pencatatan perubahan data yang aman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Efisiensi Gudang Anda?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk demo sistem dan konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Request Demo
            </a>
            <a
              href="#"
              className="border border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <FaWarehouse className="text-2xl text-primary" />
                <span className="text-xl font-bold">JNE Warehouse System</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Solusi Digital Manajemen Gudang Modern
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-6 mb-4">
                <a href="#" className="hover:text-primary transition">Beranda</a>
                <a href="#workflow" className="hover:text-primary transition">Alur Kerja</a>
                <a href="#contact" className="hover:text-primary transition">Kontak</a>
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} JNE Warehouse System. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}