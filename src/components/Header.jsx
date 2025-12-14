import { DollarSign, FileText } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">BISMAK Project Revamp</h1>
                <p className="text-xs text-gray-400">Proposal Details</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                  }`
                }
              >
                Proposal
              </NavLink>

              <NavLink
                to="/budget"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                  }`
                }
              >
                <DollarSign className="w-4 h-4" />
                Budget
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
