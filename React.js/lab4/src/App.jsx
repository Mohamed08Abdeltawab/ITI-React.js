import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="inline-block bg-indigo-600 text-white font-bold text-2xl px-4 py-1.5 rounded-md mb-4 shadow-sm">
          Task : Register form
        </div>
        <p className="text-gray-600 text-sm">
          Register page with native React form validation [Native]
        </p>
      </div>

      <RegisterForm />
    </div>
  );
}

export default App;
