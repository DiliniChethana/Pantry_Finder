// src/pages/Login.js
// Design reference: Receipe finder.pdf. :contentReference[oaicite:1]{index=1}

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      // backend should return { token, user }
      const res = await api.post("/api/auth/login", data);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/generate"); // main app page (adjust route if needed)
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.detail || "Login failed. Check credentials.";
      alert(msg);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-1">Pantry Finder</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to access your Pantry Chef</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email address or phone</label>
            <input
              type="text"
              {...register("identifier", { required: "Email or phone required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.identifier ? "border-red-400" : "border-gray-200"}`}
              placeholder="you@example.com or +94XXXXXXXXX"
            />
            {errors.identifier && <p className="text-xs text-red-500 mt-1">{errors.identifier.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password required", minLength: { value: 6, message: "At least 6 characters" } })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.password ? "border-red-400" : "border-gray-200"}`}
              placeholder="Enter password"
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-2 font-medium transition disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-emerald-600 font-medium hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
