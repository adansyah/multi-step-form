import { useState, useEffect } from "react";
import 'preline'

export default function PrelineMultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    import('preline') // untuk inisialisasi komponen JS Preline (misal: tabs)
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Formulir Pendaftaran</h2>
      <div className="mb-6">
        <ol className="flex items-center justify-between text-sm font-medium text-center text-gray-500 sm:text-base gap-1">
          <li className={`flex items-center ${step >= 1 ? 'text-blue-600' : ''}`}>
            <span className="me-1">1</span> Data Pribadi
          </li>
          <li className={`flex items-center ${step >= 2 ? 'text-blue-600' : ''}`}>
            <span className="me-1">2</span> Alamat
          </li>
          <li className={`flex items-center ${step === 3 ? 'text-blue-600' : ''}`}>
            <span className="me-1">3</span> Konfirmasi
          </li>
        </ol>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              required
              className="py-2 px-4 block w-full border border-gray-300 rounded-lg text-sm"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="py-2 px-4 block w-full border border-gray-300 rounded-lg text-sm"
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Alamat"
              required
              className="py-2 px-4 block w-full border border-gray-300 rounded-lg text-sm"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Kota"
              required
              className="py-2 px-4 block w-full border border-gray-300 rounded-lg text-sm"
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-gray-700">
            <div><strong>Nama:</strong> {formData.name}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Alamat:</strong> {formData.address}</div>
            <div><strong>Kota:</strong> {formData.city}</div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
            >
              Kembali
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Lanjut
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
            >
              Kirim
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
