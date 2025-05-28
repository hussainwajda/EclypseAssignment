import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function ReviewOrder({ formData }: { formData: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium mb-4">Order Review</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Shipping Address</h3>
            <p className="text-gray-600">
              {formData.firstName} {formData.lastName}
              <br />
              {formData.streetAddress}
              {formData.aptNumber && `, ${formData.aptNumber}`}
              <br />
              {formData.state} {formData.zip}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Payment Method</h3>
            <p className="text-gray-600">Credit/Debit Card ending in ****{formData.cardNumber.slice(-4)}</p>
          </div>
        </div>
      </div>

      <button className="w-full py-4 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-lg font-medium">
        Place Order
      </button>
    </motion.div>
  )
}

// Order Summary Component
function OrderSummary({ type, currentStep }: { type: string; currentStep }) {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 20 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 shadow-md rounded-lg mt-15 border border-gray-200 p-6 sticky">
      {/* Privacy Notice */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-gray-600">
        By placing your order, you agree to our company{" "}
        <Link to="/privacy" className="text-black underline">
          Privacy policy
        </Link>{" "}
        and{" "}
        <Link to="/terms" className="text-black underline">
          Conditions of use
        </Link>
        .
      </div>

      {/* Order Summary */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Order Summary</h2>

        <div className="space-y-3 text-sm text-black">
          <div className="flex justify-between">
            <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax Collected:</span>
            <span>1,400</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-black text-lg font-medium">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>
        </div>

        {currentStep === "address" && (
          <button className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-[var(--color-btn-red)] cursor-pointer transition-colors mt-6">
            Continue to Payment
          </button>
        )}
      </div>
    </motion.div>
  )
}

export { ReviewOrder, OrderSummary }