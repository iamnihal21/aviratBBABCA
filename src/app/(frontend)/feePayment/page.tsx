'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/app/(frontend)/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/(frontend)/components/ui/card'
import { Input } from '@/app/(frontend)/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/(frontend)/components/ui/select'
import {
  CreditCard,
  Shield,
  Lock,
  CheckCircle2,
  AlertCircle,
  Building2,
  GraduationCap,
  Wallet,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// Fee categories
const feeCategories = [
  { value: 'tuition', label: 'Tuition Fee' },
  { value: 'hostel', label: 'Hostel Fee' },
  { value: 'library', label: 'Library Fee' },
  { value: 'laboratory', label: 'Laboratory Fee' },
  { value: 'sports', label: 'Sports Fee' },
  { value: 'other', label: 'Other Fees' },
]

export default function FeePaymentPage() {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    email: '',
    phone: '',
    category: '',
    amount: '',
    description: '',
  })
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    })
  }

  const handleDummyPayment = () => {
    // Validate form
    if (!formData.studentId || !formData.studentName || !formData.email || !formData.amount || !formData.category) {
      alert('Please fill all required fields')
      return
    }

    setPaymentStatus('processing')

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success')
      // Reset form after success
      setTimeout(() => {
        setFormData({
          studentId: '',
          studentName: '',
          email: '',
          phone: '',
          category: '',
          amount: '',
          description: '',
        })
        setPaymentStatus('idle')
      }, 3000)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial="visible"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Online Fee Payment</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Quick &{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Secure
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Pay your fees online through our secure payment gateway.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-none shadow-xl overflow-hidden">
              {/* Security Badge */}
              <div className="bg-primary/5 px-6 py-3 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>256-bit SSL Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Powered by Razorpay</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">Fee Payment Details</CardTitle>
                <CardDescription>
                  Enter your details to proceed with the payment
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Student Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    Student Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Student ID <span className="text-primary">*</span>
                      </label>
                      <Input
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        placeholder="AVI2025001"
                        className="border-gray-200 focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        placeholder="Rakesh Sharma"
                        className="border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="rakesh@example.com"
                        className="border-gray-200 focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className="border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-primary" />
                    Payment Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Fee Category <span className="text-primary">*</span>
                      </label>
                      <Select onValueChange={handleSelectChange} value={formData.category}>
                        <SelectTrigger className="border-gray-200 focus:border-primary">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {feeCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Amount (₹) <span className="text-primary">*</span>
                      </label>
                      <Input
                        name="amount"
                        type="number"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="5000"
                        className="border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Description (Optional)
                    </label>
                    <Input
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Any additional details"
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Dummy Razorpay Button */}
                <div className="space-y-4">
                  <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src="https://razorpay.com/assets/razorpay-logo.svg" 
                        alt="Razorpay" 
                        className="h-6"
                      />
                      <span className="text-xs text-muted-foreground">Test Mode</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  <Button
                    onClick={handleDummyPayment}
                    disabled={paymentStatus === 'processing'}
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white h-14 text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {paymentStatus === 'processing' ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Processing...
                        </>
                      ) : paymentStatus === 'success' ? (
                        <>
                          <CheckCircle2 className="mr-2 h-5 w-5" />
                          Payment Successful
                        </>
                      ) : paymentStatus === 'error' ? (
                        <>
                          <AlertCircle className="mr-2 h-5 w-5" />
                          Try Again
                        </>
                      ) : (
                        <>
                          Pay ₹{formData.amount || '0'} via Razorpay
                          <CreditCard className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>

                {/* Success Message */}
                {paymentStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Payment Successful! (Demo)</p>
                      <p className="text-sm text-green-600">A receipt has been sent to your email.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {paymentStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Payment Failed</p>
                      <p className="text-sm text-red-600">Please try again.</p>
                    </div>
                  </motion.div>
                )}

                {/* Test Credentials */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-700 mb-2">Test Credentials (Demo)</p>
                  <p className="text-xs text-blue-600">Card: 4111 1111 1111 1111</p>
                  <p className="text-xs text-blue-600">Expiry: Any future date</p>
                  <p className="text-xs text-blue-600">CVV: Any 3 digits</p>
                </div>

                {/* Security Note */}
                <div className="text-xs text-muted-foreground text-center pt-4">
                  <Lock className="h-3 w-3 inline mr-1" />
                  This is a demo payment page. No real transactions are processed.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <CreditCard className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Multiple Options</h3>
              <p className="text-sm text-muted-foreground">Credit/Debit Card, UPI, Net Banking</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">100% Secure</h3>
              <p className="text-sm text-muted-foreground">PCI DSS compliant gateway</p>
            </div>
            <div>
              <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Instant Receipt</h3>
              <p className="text-sm text-muted-foreground">Get confirmation via email</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}