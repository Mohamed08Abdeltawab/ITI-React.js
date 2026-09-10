import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation regular expressions
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#!^&()_+\-=[\]{};':"\\|,.<>?~`]).{8,}$/;

  // Validate a single field
  const validateField = (fieldName, value, currentFormData = formData) => {
    let error = "";

    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email address is required";
        } else if (!emailRegex.test(value.trim())) {
          error = "Please enter a valid email address (e.g. user@example.com)";
        }
        break;

      case "username":
        if (!value.trim()) {
          error = "Username is required";
        } else if (/\s/.test(value)) {
          error = "Username cannot contain spaces";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters long";
        } else if (!/(?=.*[a-z])/.test(value)) {
          error = "Password must contain at least one lowercase letter";
        } else if (!/(?=.*[A-Z])/.test(value)) {
          error = "Password must contain at least one uppercase letter";
        } else if (!/(?=.*\d)/.test(value)) {
          error = "Password must contain at least one digit";
        } else if (
          !/(?=.*[*@%$#!^&()_+\-=[\]{};':"\\|,.<>?~`])/.test(value)
        ) {
          error =
            "Password must contain at least one special character [example: *@%$#]";
        } else if (!passwordRegex.test(value)) {
          error = "Password does not meet the required format";
        }
        break;

      case "confirmPassword":
        if (!value) {
          error = "Confirm password is required";
        } else if (value !== currentFormData.password) {
          error = "Passwords do not match";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Validate entire form
  const validateAll = (dataToValidate) => {
    const newErrors = {};

    Object.keys(dataToValidate).forEach((key) => {
      const error = validateField(key, dataToValidate[key], dataToValidate);
      if (error) {
        newErrors[key] = error;
      }
    });

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // Validate on change if field has already been touched
    if (touched[name]) {
      const fieldError = validateField(name, value, updatedForm);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }

    // If password changed, re-validate confirmPassword if it was touched
    if (name === "password" && touched.confirmPassword) {
      const confirmError = validateField(
        "confirmPassword",
        updatedForm.confirmPassword,
        updatedForm
      );
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const fieldError = validateField(name, value, formData);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {
      name: true,
      email: true,
      username: true,
      password: true,
      confirmPassword: true,
    };
    setTouched(allTouched);

    const formErrors = validateAll(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setTouched({});
    setSubmittedData(null);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {submittedData && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-emerald-900 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Registration Successful!
            </h3>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-emerald-700 underline hover:text-emerald-900 cursor-pointer"
            >
              Register another user
            </button>
          </div>
          <p className="text-sm text-emerald-700 mb-2">
            The account has been created with the following details:
          </p>
          <ul className="text-xs space-y-1 font-mono bg-white p-3 rounded border border-emerald-100">
            <li>
              <strong>Name:</strong> {submittedData.name}
            </li>
            <li>
              <strong>Email:</strong> {submittedData.email}
            </li>
            <li>
              <strong>User Name:</strong> {submittedData.username}
            </li>
          </ul>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
      >
        {/* Name Field */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
            className={`w-full px-3.5 py-2 border rounded-md text-sm outline-none transition-all ${
              touched.name && errors.name
                ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="example@domain.com"
            className={`w-full px-3.5 py-2 border rounded-md text-sm outline-none transition-all ${
              touched.email && errors.email
                ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
              {errors.email}
            </p>
          )}
        </div>

        {/* User Name Field */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            User Name
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter username (no spaces)"
            className={`w-full px-3.5 py-2 border rounded-md text-sm outline-none transition-all ${
              touched.username && errors.username
                ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            }`}
          />
          {touched.username && errors.username && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
              {errors.username}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. P@ssword1234"
              className={`w-full px-3.5 py-2 pr-14 border rounded-md text-sm outline-none transition-all ${
                touched.password && errors.password
                  ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs cursor-pointer select-none font-medium px-1 py-0.5"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {touched.password && errors.password && (
            <p className="text-red-500 text-xs mt-1.5 flex items-start gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0" />
              <span>{errors.password}</span>
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Re-enter your password"
              className={`w-full px-3.5 py-2 pr-14 border rounded-md text-sm outline-none transition-all ${
                touched.confirmPassword && errors.confirmPassword
                  ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs cursor-pointer select-none font-medium px-1 py-0.5"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Action Button */}
        <div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-medium py-2.5 px-6 rounded-md transition-colors cursor-pointer shadow-sm hover:shadow"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
