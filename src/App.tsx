
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'; // Make sure React is imported
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import AIProjects from "./pages/AIProjects";
import HowItWorks from "./pages/HowItWorks";
import AIAcademy from "./pages/AIAcademy";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AdminDashboard from "./pages/AdminDashboard";
import N8NWebhookOrchestrator from "./pages/N8NWebhookOrchestrator";
import Index from "./pages/Index";

// Create a client
const queryClient = new QueryClient();

// Mock authentication state - In a real app, this would use Supabase Auth
const isAuthenticated = true; // Changed to true for demonstration
const isAdmin = true; // Changed to true for demonstration

// Protected route component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }
  
  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="ai-projects" element={<AIProjects />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="ai-academy" element={<AIAcademy />} />
              <Route path="blog" element={<Blog />} />
              <Route path="register" element={<Register />} />
              <Route path="sign-in" element={<SignIn />} />
              
              {/* Protected Admin Routes */}
              <Route path="admin" element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="admin/n8n-webhook-orchestrator" element={
                <ProtectedRoute adminOnly={true}>
                  <N8NWebhookOrchestrator />
                </ProtectedRoute>
              } />
              
              {/* Add a dashboard route for regular users */}
              <Route path="dashboard" element={
                <ProtectedRoute>
                  <Home /> {/* Replace with actual Dashboard component when available */}
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
