'use client'

import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface StartJourneyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StartJourneyModal({ isOpen, onClose }: StartJourneyModalProps) {
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPhone('')
      setPhoneError('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const titleId = 'start-journey-modal-title'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby={titleId}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-full p-1 z-10"
          aria-label="Close"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>

        <div className="p-6 md:p-8">
          <h2
            id={titleId}
            className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-gray-900"
          >
            Start Your Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section A - Swanubhav Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-900">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-primary mb-1">Swanubhav Journeys</p>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:swanubhavjourneys@gmail.com"
                      className="text-gray-700 hover:text-primary transition-smooth break-all"
                    >
                      swanubhavjourneys@gmail.com
                    </a>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="flex flex-col">
                        <a
                          href="tel:+919850078455"
                          className="text-gray-700 hover:text-primary transition-smooth"
                        >
                          +91 9850078455
                        </a>
                        <a
                          href="tel:+91950233819"
                          className="text-gray-700 hover:text-primary transition-smooth"
                        >
                          +91 950233819
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <a
                      href="https://instagram.com/swanubhav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-smooth"
                    >
                      @swanubhav
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section B - Phone Input */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-2 text-gray-900">
                  Request a Callback
                </h3>
                <p className="text-gray-600 mb-6">
                  Enter your phone number and our travel expert will get in touch with you.
                </p>

                <div>
                  <label htmlFor="callback-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Phone Number
                  </label>
                  <div className="w-full">
                    <PhoneInput
                      country="in"
                      value={phone}
                      onChange={(value) => {
                        setPhone(value)
                        const digitsOnly = value.replace(/\D/g, '')
                        const lastTenDigits = digitsOnly.slice(-10)
                        if (lastTenDigits.length !== 10 && digitsOnly.length > 0) {
                          setPhoneError('Phone number must contain a valid 10-digit number')
                        } else {
                          setPhoneError('')
                        }
                      }}
                      enableSearch
                      inputProps={{
                        name: 'callback-phone',
                        id: 'callback-phone',
                        autoComplete: 'tel',
                      }}
                      inputClass="!w-full !h-12 !text-base !bg-lavender !border !border-gray-200 !rounded-lg focus:!ring-2 focus:!ring-primary focus:!border-transparent !transition"
                      inputStyle={{
                        width: '100%',
                        height: '3rem',
                        borderRadius: '0.75rem',
                        paddingLeft: '3.2rem',
                        backgroundColor: '#f5f3ff',
                        border: '1px solid #e5e7eb',
                      }}
                      buttonClass="rounded-l-lg border border-r-0 border-gray-200 !bg-white !h-12"
                      containerClass="w-full"
                      dropdownClass="shadow-lg"
                    />
                  </div>
                  {phoneError && (
                    <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      // TODO: Add submission logic later
                      const digits = phone.replace(/\D/g, '')
                      const lastTen = digits.slice(-10)
                      if (lastTen.length !== 10) {
                        setPhoneError('Phone number must contain a valid 10-digit number')
                        return
                      }
                      // For now, just show an alert
                      alert('Thank you! Our travel expert will contact you soon.')
                      onClose()
                    }}
                    disabled={!phone || phoneError !== ''}
                    className="w-full px-6 py-3 gradient-primary text-white rounded-lg font-semibold transition-smooth hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
