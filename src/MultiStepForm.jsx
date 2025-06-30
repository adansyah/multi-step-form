import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <div className="mb-4 text-center text-xl font-semibold">
        Step {step} of 3
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              type="email"
              required
            />
          </>
        )}

        {step === 2 && (
          <>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Alamat"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Kota"
              className="w-full p-2 mb-4 border rounded"
              required
            />
          </>
        )}

        {step === 3 && (
          <div className="space-y-2 text-gray-700">
            <div><strong>Nama:</strong> {formData.name}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Alamat:</strong> {formData.address}</div>
            <div><strong>Kota:</strong> {formData.city}</div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
