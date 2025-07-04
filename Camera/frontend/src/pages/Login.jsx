import { cn } from "@/lib/utils"; // shadcn utility for classnames
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
const IMAGE_URL =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.novatis.tn%2Fportfolio-item%2Fwaycon%2F&psig=AOvVaw0Wu7kvIMlo3L8vnkBOLYpo&ust=1751626320913000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLicu9_CoI4DFQAAAAAdAAAAABAE";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    console.log("cc");
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-center flex-1 px-6 py-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Welcome back to ooredoo!
          </h2>
          {error && (
            <div className="mb-4 rounded-md bg-red-100 px-4 py-3 text-red-700">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@ooredoo.com"
                required
                className="mt-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  required
                  className="pr-10"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    // Eye-off icon (Heroicons or similar)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.233.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 12.414M9.172 8.172L4.93 3.93"
                      />
                    </svg>
                  ) : (
                    // Eye icon (Heroicons or similar)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.13.433-.304.85-.515 1.243"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center"></div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
      {/* Right: Image */}
      <img
        className={cn("hidden lg:block lg:w-1/2 ", "bg-cover bg-center")}
        src="https://previews.123rf.com/images/ifong/ifong0905/ifong090500007/4812801-side-and-front-view-of-a-surveillance-camera.jpg"
        alt="Decorative background"
      />
    </div>
  );
}
