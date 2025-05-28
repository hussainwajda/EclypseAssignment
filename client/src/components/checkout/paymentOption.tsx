import { useState } from "react"
import { CreditCard, Smartphone, Building2, Check, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function PaymentForm({
  formData,
  onInputChange,
  onNext,
  
}: {
  formData: any
  onInputChange: (field: string, value: string) => void
  onNext: () => void
}) {
  const [selectedMethod, setSelectedMethod] = useState("card")

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "upi", name: "UPI Payment", icon: Smartphone },
    { id: "netbanking", name: "Net Banking", icon: Building2 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Payment Method Selection */}
      <div className="bg-white rounded-lg text-black border border-gray-200 p-6">
        <h2 className="text-lg font-medium mb-4">Select Payment Method</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon
            return (
              <label
                key={method.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedMethod === method.id ? "border-black bg-gray-50" : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="sr-only"
                />
                <Icon className="w-5 h-5 mr-3 text-gray-600" />
                <span className="font-medium">{method.name}</span>
                {selectedMethod === method.id && <Check className="w-5 h-5 ml-auto text-black" />}
              </label>
            )
          })}
        </div>
      </div>

      {/* Card Details Form */}
      {selectedMethod === "card" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-white rounded-lg text-black border border-gray-200 p-6"
        >
          <h3 className="text-lg font-medium mb-4">Card Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
              <input
                type="text"
                value={formData.nameOnCard}
                placeholder="Mahendra Singh Dhoni"
                onChange={(e) => onInputChange("nameOnCard", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => onInputChange("cardNumber", e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => onInputChange("expiryDate", e.target.value)}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => onInputChange("cvv", e.target.value)}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {selectedMethod=="upi" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <h3 className="text-lg font-medium mb-4">UPI ID</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
              <input
                type="text"
                value={formData.upiId}
                onChange={(e) => onInputChange("upiId", e.target.value)}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}

      <button
        onClick={onNext}
        className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
      >
        <Lock className="w-4 h-4 mr-2" />
        Continue to Review
      </button>
    </motion.div>
  )
}