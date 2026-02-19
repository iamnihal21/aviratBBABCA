'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/(frontend)/components/ui/table'
import {
  GraduationCap,
  Lock,
  User,
  Eye,
  EyeOff,
  Download,
  Printer,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Calendar,
  Award,
  Percent,
  ChevronLeft,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// Mock student data for demonstration
const mockStudentData = {
  id: 'AVI2024001',
  name: 'Rakesh Sharma',
  program: 'B.Tech Computer Science',
  semester: '6th Semester',
  enrollmentYear: '2024',
  registrationNumber: '2024CS001',
  result: {
    status: 'PASS',
    sgpa: '8.75',
    cgpa: '8.92',
    percentage: '82.5%',
    subjects: [
      { code: 'CS301', name: 'Database Management Systems', credits: 4, grade: 'A', marks: 86 },
      { code: 'CS302', name: 'Computer Networks', credits: 4, grade: 'A-', marks: 82 },
      { code: 'CS303', name: 'Operating Systems', credits: 4, grade: 'B+', marks: 78 },
      { code: 'CS304', name: 'Software Engineering', credits: 3, grade: 'A', marks: 85 },
      { code: 'CS305', name: 'Design & Analysis of Algorithms', credits: 4, grade: 'B', marks: 72 },
      { code: 'CS306', name: 'Web Technologies Lab', credits: 2, grade: 'A+', marks: 92 },
      { code: 'HS301', name: 'Professional Communication', credits: 2, grade: 'A', marks: 88 },
    ],
    totalCredits: 23,
    creditsEarned: 23,
    resultDate: '15 January 2026',
  }
}

// Mock credentials for demo
const validCredentials = [
  { id: 'AVI2024001', password: '123456' },
  { id: 'AVI2024002', password: '123456' },
  { id: 'AVI2024003', password: '123456' },
]

export default function ResultPage() {
  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [studentData, setStudentData] = useState<typeof mockStudentData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const isValid = validCredentials.some(
        cred => cred.id === studentId && cred.password === password
      )

      if (isValid) {
        setStudentData(mockStudentData)
        setIsLoggedIn(true)
        setError('')
      } else {
        setError('Invalid Student ID or Password')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setStudentData(null)
    setStudentId('')
    setPassword('')
    setError('')
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    alert('Download functionality will be available soon')
  }

  if (isLoggedIn && studentData) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header with Logout */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-foreground">Student Result</h1>
              <p className="text-muted-foreground">View your academic performance</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrint} className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" onClick={handleDownload} className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button onClick={handleLogout} variant="destructive" className="gap-2">
                <Lock className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </motion.div>

          {/* Student Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-4 gap-4 mb-8"
          >
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Student Name</p>
                  <p className="font-semibold text-foreground">{studentData.name}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Program</p>
                  <p className="font-semibold text-foreground">{studentData.program}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Semester</p>
                  <p className="font-semibold text-foreground">{studentData.semester}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Enrollment Year</p>
                  <p className="font-semibold text-foreground">{studentData.enrollmentYear}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Result Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-4 mb-8"
          >
            <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white">
              <CardContent className="p-4">
                <p className="text-sm opacity-90 mb-1">Result Status</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{studentData.result.status}</p>
                  <CheckCircle2 className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <CardContent className="p-4">
                <p className="text-sm opacity-90 mb-1">SGPA</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{studentData.result.sgpa}</p>
                  <Award className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <CardContent className="p-4">
                <p className="text-sm opacity-90 mb-1">CGPA</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{studentData.result.cgpa}</p>
                  <Award className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <CardContent className="p-4">
                <p className="text-sm opacity-90 mb-1">Percentage</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{studentData.result.percentage}</p>
                  <Percent className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Subject-wise Results Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white border-none shadow-xl">
              <CardHeader>
                <CardTitle>Subject-wise Performance</CardTitle>
                <CardDescription>
                  Detailed marks and grades for each subject
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject Code</TableHead>
                      <TableHead>Subject Name</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Marks</TableHead>
                      <TableHead>Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {studentData.result.subjects.map((subject) => (
                      <TableRow key={subject.code}>
                        <TableCell className="font-medium">{subject.code}</TableCell>
                        <TableCell>{subject.name}</TableCell>
                        <TableCell>{subject.credits}</TableCell>
                        <TableCell>{subject.marks}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium
                            ${subject.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 
                              subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-700' : 
                              'bg-yellow-100 text-yellow-700'}`}>
                            {subject.grade}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Total Credits: </span>
                      <span className="font-semibold text-foreground">{studentData.result.totalCredits}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Credits Earned: </span>
                      <span className="font-semibold text-foreground">{studentData.result.creditsEarned}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Result Date: </span>
                      <span className="font-semibold text-foreground">{studentData.result.resultDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-muted-foreground text-center mt-8"
          >
            This is a computer-generated document. No signature is required.
          </motion.p>
        </div>
      </main>
    )
  }

  // Login Form
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
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Student Result Portal</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              View Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Results
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Login with your Student ID and password to access your academic results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16">
        <div className="max-w-md mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-none shadow-xl overflow-hidden">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Student Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access your result
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Student ID */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Student ID
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        placeholder="AVI2024001"
                        className="pl-9 border-gray-200 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="pl-9 pr-9 border-gray-200 focus:border-primary"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error Message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm"
                      >
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white h-12"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Verifying...
                      </>
                    ) : (
                      'Login to View Result'
                    )}
                  </Button>
                </form>

                {/* Demo Credentials */}
                <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm font-medium text-foreground mb-2">Demo Credentials</p>
                  <p className="text-xs text-muted-foreground">Student ID: AVI2024001</p>
                  <p className="text-xs text-muted-foreground">Password: 123456</p>
                </div>

                {/* Help Text */}
                <p className="text-xs text-muted-foreground text-center mt-6">
                  Forgot your password? Contact the examination department.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  )
}