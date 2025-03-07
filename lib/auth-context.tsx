"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type User = {
  id: string
  name: string
  email: string
  isAdmin: boolean
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string, isAdmin?: boolean) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, isAdmin = false): Promise<boolean> => {
    // Simulate API call
    setIsLoading(true)

    // In a real app, this would be an API call to validate credentials
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple validation for demo purposes
        if (email && password) {
          const newUser = {
            id: Math.random().toString(36).substring(2, 9),
            name: email.split("@")[0], // Use part of email as name if not provided
            email,
            isAdmin,
          }
          setUser(newUser)
          localStorage.setItem("user", JSON.stringify(newUser))
          setIsLoading(false)
          resolve(true)
        } else {
          setIsLoading(false)
          resolve(false)
        }
      }, 1000) // Simulate network delay
    })
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    setIsLoading(true)

    // In a real app, this would be an API call to create a new user
    return new Promise((resolve) => {
      setTimeout(() => {
        if (name && email && password) {
          const newUser = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            email,
            isAdmin: false,
          }
          setUser(newUser)
          localStorage.setItem("user", JSON.stringify(newUser))
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
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

