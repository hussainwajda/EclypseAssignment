import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { OrderSummary, ReviewOrder } from "../components/checkout/orderSummary"
import { AddressForm } from "../components/checkout/addressForm"
import { PaymentForm } from "../components/checkout/paymentOption"
import { Link } from "react-router-dom"

type CheckoutStep = "address" | "payment" | "review"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("address")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep === "address") setCurrentStep("payment")
    else if (currentStep === "payment") setCurrentStep("review")
  }

  const prevStep = () => {
    if (currentStep === "payment") setCurrentStep("address")
    else if (currentStep === "review") setCurrentStep("payment")
  }

  return (
    <div className="min-h-screen pt-[125px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step Header */}
            <div className="flex items-center mb-8">
              {currentStep !== "address" && (
                <button onClick={prevStep} className="mr-4 p-2 text-black hover:bg-gray-100 rounded-full">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <h1 className="text-2xl text-black text-[Montereal Neue]">
                {currentStep === "address" && "Shipping Address"}
                {currentStep === "payment" && "Payment Method"}
                {currentStep === "review" && "Review Order"}
              </h1>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {currentStep === "address" && (
                <AddressForm key="address" formData={formData} onInputChange={handleInputChange} onNext={nextStep} />
              )}
              {currentStep === "payment" && (
                <PaymentForm key="payment" formData={formData} onInputChange={handleInputChange} onNext={nextStep} />
              )}
              {currentStep === "review" && <ReviewOrder key="review" formData={formData} />}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary currentStep={currentStep} />
          </div>
        </div>
      </div>
    </div>
  )
}