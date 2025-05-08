"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Admin = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  admin: Admin | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if admin is logged in from localStorage
    const storedAdmin = localStorage.getItem("admin")
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    setIsLoading(true)

    // In a real app, this would be an API call to validate credentials
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple validation for demo purposes
        if (email === "admin@example.com" && password === "password") {
          const newAdmin = {
            id: "1",
            name: "Admin User",
            email,
          }
          setAdmin(newAdmin)
          localStorage.setItem("admin", JSON.stringify(newAdmin))
          setIsLoading(false)
          resolve(true)
        } else {
          setIsLoading(false)
          resolve(false)
        }
      }, 1000) // Simulate network delay
    })
  }

  const logout = () => {
    setAdmin(null)
    localStorage.removeItem("admin")
  }

  return <AuthContext.Provider value={{ admin, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
