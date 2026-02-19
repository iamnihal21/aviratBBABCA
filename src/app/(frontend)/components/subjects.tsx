// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from '@/app/(frontend)/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/app/(frontend)/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
// import {
//   BookOpen,
//   Code,
//   Database,
//   Globe,
//   Laptop,
//   Award,
//   Clock,
//   ChevronRight,
//   Sparkles,
// } from 'lucide-react'
// import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// // BCA Course Structure - 6 Semesters
// const bcaCourse = {
//   title: 'Bachelor of Computer Applications (BCA)',
//   duration: '3 Years (6 Semesters)',
//   totalCredits: 140,
//   eligibility: '10+2 with Mathematics/Computer Science (50% minimum)',
//   semesters: [
//     {
//       id: 1,
//       name: 'Semester 1',
//       subjects: [
//         { code: 'BCA101', name: 'Programming Fundamentals using C', credits: 4, type: 'Core' },
//         { code: 'BCA102', name: 'Mathematics for Computing', credits: 4, type: 'Core' },
//         { code: 'BCA103', name: 'Digital Electronics', credits: 3, type: 'Core' },
//         { code: 'BCA104', name: 'Communication Skills', credits: 2, type: 'AECC' },
//         { code: 'BCA105', name: 'Computer Fundamentals & Office Automation', credits: 3, type: 'Core' },
//         { code: 'BCA106', name: 'C Programming Lab', credits: 2, type: 'Lab' },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Semester 2',
//       subjects: [
//         { code: 'BCA201', name: 'Object Oriented Programming with C++', credits: 4, type: 'Core' },
//         { code: 'BCA202', name: 'Discrete Mathematics', credits: 4, type: 'Core' },
//         { code: 'BCA203', name: 'Data Structures', credits: 4, type: 'Core' },
//         { code: 'BCA204', name: 'Environmental Studies', credits: 2, type: 'AECC' },
//         { code: 'BCA205', name: 'Financial Accounting', credits: 3, type: 'Core' },
//         { code: 'BCA206', name: 'Data Structures Lab', credits: 2, type: 'Lab' },
//       ],
//     },
//     {
//       id: 3,
//       name: 'Semester 3',
//       subjects: [
//         { code: 'BCA301', name: 'Database Management Systems', credits: 4, type: 'Core' },
//         { code: 'BCA302', name: 'Operating Systems', credits: 4, type: 'Core' },
//         { code: 'BCA303', name: 'Java Programming', credits: 4, type: 'Core' },
//         { code: 'BCA304', name: 'Web Technologies (HTML, CSS, JavaScript)', credits: 3, type: 'Core' },
//         { code: 'BCA305', name: 'Probability & Statistics', credits: 3, type: 'Core' },
//         { code: 'BCA306', name: 'Java Lab', credits: 2, type: 'Lab' },
//       ],
//     },
//     {
//       id: 4,
//       name: 'Semester 4',
//       subjects: [
//         { code: 'BCA401', name: 'Python Programming', credits: 4, type: 'Core' },
//         { code: 'BCA402', name: 'Computer Networks', credits: 4, type: 'Core' },
//         { code: 'BCA403', name: 'Software Engineering', credits: 4, type: 'Core' },
//         { code: 'BCA404', name: 'PHP & MySQL', credits: 3, type: 'Core' },
//         { code: 'BCA405', name: 'Numerical Methods', credits: 3, type: 'Core' },
//         { code: 'BCA406', name: 'Python Lab', credits: 2, type: 'Lab' },
//       ],
//     },
//     {
//       id: 5,
//       name: 'Semester 5',
//       subjects: [
//         { code: 'BCA501', name: 'Artificial Intelligence', credits: 4, type: 'Core' },
//         { code: 'BCA502', name: 'Android App Development', credits: 4, type: 'Core' },
//         { code: 'BCA503', name: 'Cloud Computing', credits: 4, type: 'Core' },
//         { code: 'BCA504', name: 'Data Mining & Warehousing', credits: 3, type: 'Elective' },
//         { code: 'BCA505', name: 'Cyber Security', credits: 3, type: 'Elective' },
//         { code: 'BCA506', name: 'Mobile App Lab', credits: 2, type: 'Lab' },
//       ],
//     },
//     {
//       id: 6,
//       name: 'Semester 6',
//       subjects: [
//         { code: 'BCA601', name: 'Machine Learning', credits: 4, type: 'Core' },
//         { code: 'BCA602', name: 'Blockchain Technology', credits: 4, type: 'Core' },
//         { code: 'BCA603', name: 'Internet of Things', credits: 3, type: 'Elective' },
//         { code: 'BCA604', name: 'Digital Marketing', credits: 3, type: 'Elective' },
//         { code: 'BCA605', name: 'Major Project', credits: 6, type: 'Project' },
//         { code: 'BCA606', name: 'Seminar & Viva Voce', credits: 2, type: 'Project' },
//       ],
//     },
//   ],
// }

// // Subject type colors
// const typeColors = {
//   Core: 'bg-blue-100 text-blue-700',
//   Elective: 'bg-purple-100 text-purple-700',
//   AECC: 'bg-green-100 text-green-700',
//   Lab: 'bg-orange-100 text-orange-700',
//   Project: 'bg-pink-100 text-pink-700',
// }

// export function BCAProgramPage() {
//   const [activeSemester, setActiveSemester] = useState('1')
//   const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 }
//   }

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
//           <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             ref={headerRef}
//             initial="visible"
//             animate="visible"
//             variants={staggerChildren}
//             className="max-w-3xl"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
//               <Laptop className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">BCA Program</span>
//             </motion.div>

//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
//               Bachelor of{' '}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Computer Applications
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
//               A comprehensive 3-year program designed to build strong foundations in computer science and applications.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Program Overview Cards */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-6 flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                   <Clock className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Duration</p>
//                   <p className="text-xl font-semibold text-foreground">{bcaCourse.duration}</p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-6 flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                   <Award className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Total Credits</p>
//                   <p className="text-xl font-semibold text-foreground">{bcaCourse.totalCredits} Credits</p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-white border-none shadow-md">
//               <CardContent className="p-6 flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                   <BookOpen className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Eligibility</p>
//                   <p className="text-sm font-semibold text-foreground">{bcaCourse.eligibility}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Semester Tabs */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <Tabs defaultValue="1" className="w-full" onValueChange={setActiveSemester}>
//             <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
//               {bcaCourse.semesters.map((sem) => (
//                 <TabsTrigger key={sem.id} value={sem.id.toString()} className="text-sm">
//                   Sem {sem.id}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             <AnimatePresence mode="wait">
//               {bcaCourse.semesters.map((semester) => (
//                 <TabsContent key={semester.id} value={semester.id.toString()}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Card className="bg-white border-none shadow-xl overflow-hidden">
//                       <div className="h-2 bg-gradient-to-r from-primary to-accent" />
//                       <CardHeader>
//                         <CardTitle className="text-2xl">{semester.name}</CardTitle>
//                         <CardDescription>
//                           Total Subjects: {semester.subjects.length} | Total Credits: {semester.subjects.reduce((acc, sub) => acc + sub.credits, 0)}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="space-y-3">
//                           {semester.subjects.map((subject, index) => (
//                             <motion.div
//                               key={subject.code}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: index * 0.05 }}
//                             >
//                               <Card className="bg-secondary/30 border-none hover:bg-secondary/50 transition-colors">
//                                 <CardContent className="p-4">
//                                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                                     <div className="flex-1">
//                                       <div className="flex items-center gap-3 mb-1">
//                                         <span className="text-xs font-mono text-muted-foreground">
//                                           {subject.code}
//                                         </span>
//                                         <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[subject.type as keyof typeof typeColors]}`}>
//                                           {subject.type}
//                                         </span>
//                                       </div>
//                                       <h4 className="text-lg font-semibold text-foreground">
//                                         {subject.name}
//                                       </h4>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                       <div className="text-sm bg-primary/10 px-3 py-1 rounded-full">
//                                         {subject.credits} Credits
//                                       </div>
//                                       <ChevronRight className="h-5 w-5 text-muted-foreground" />
//                                     </div>
//                                   </div>
//                                 </CardContent>
//                               </Card>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </TabsContent>
//               ))}
//             </AnimatePresence>
//           </Tabs>
//         </div>
//       </section>

//       {/* Subject Type Legend */}
//       <section className="py-8 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex flex-wrap items-center justify-center gap-4">
//             <span className="text-sm text-muted-foreground mr-2">Subject Types:</span>
//             {Object.entries(typeColors).map(([type, color]) => (
//               <div key={type} className="flex items-center gap-2">
//                 <span className={`w-3 h-3 rounded-full ${color.split(' ')[0]}`} />
//                 <span className="text-sm text-foreground">{type}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Career Opportunities */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-8"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
//               Career Opportunities
//             </h2>
//             <p className="text-muted-foreground">
//               After completing BCA, students can pursue various roles in the IT industry
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {['Software Developer', 'Web Developer', 'Database Administrator', 'System Analyst', 'Network Administrator', 'Mobile App Developer', 'Cloud Architect', 'Cybersecurity Analyst'].map((career, index) => (
//               <motion.div
//                 key={career}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.05 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white border-none shadow-sm text-center">
//                   <CardContent className="p-3">
//                     <p className="text-sm font-medium text-foreground">{career}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Sparkles className="h-8 w-8 mx-auto mb-3 opacity-80" />
//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               Ready to Start Your Journey?
//             </h2>
//             <p className="text-white/80 mb-4">
//               Take the first step towards a rewarding career in computer applications
//             </p>
//             <Button variant="secondary" size="lg" className="group">
//               Apply for BCA Program
//               <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   )
// }

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/(frontend)/components/ui/tabs'
import {
  BookOpen,
  Code,
  Database,
  Globe,
  Laptop,
  Award,
  Clock,
  ChevronRight,
  Sparkles,
  Briefcase,
} from 'lucide-react'
import { useScrollAnimation } from '@/app/(frontend)/hooks/use-scroll-animation'

// Course Data
const courseData = {
  bca: {
    title: 'Bachelor of Computer Applications (BCA)',
    shortTitle: 'BCA',
    icon: Laptop,
    description: 'A comprehensive 3-year program designed to build strong foundations in computer science and applications.',
    duration: '3 Years (6 Semesters)',
    totalCredits: 140,
    eligibility: '10+2 with Mathematics/Computer Science (50% minimum)',
    careers: ['Software Developer', 'Web Developer', 'Database Administrator', 'System Analyst', 'Network Administrator', 'Mobile App Developer', 'Cloud Architect', 'Cybersecurity Analyst'],
    semesters: [
      {
        id: 1,
        name: 'Semester 1',
        subjects: [
          { code: 'BCA101', name: 'Programming Fundamentals using C', credits: 4, type: 'Core' },
          { code: 'BCA102', name: 'Mathematics for Computing', credits: 4, type: 'Core' },
          { code: 'BCA103', name: 'Digital Electronics', credits: 3, type: 'Core' },
          { code: 'BCA104', name: 'Communication Skills', credits: 2, type: 'AECC' },
          { code: 'BCA105', name: 'Computer Fundamentals & Office Automation', credits: 3, type: 'Core' },
          { code: 'BCA106', name: 'C Programming Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 2,
        name: 'Semester 2',
        subjects: [
          { code: 'BCA201', name: 'Object Oriented Programming with C++', credits: 4, type: 'Core' },
          { code: 'BCA202', name: 'Discrete Mathematics', credits: 4, type: 'Core' },
          { code: 'BCA203', name: 'Data Structures', credits: 4, type: 'Core' },
          { code: 'BCA204', name: 'Environmental Studies', credits: 2, type: 'AECC' },
          { code: 'BCA205', name: 'Financial Accounting', credits: 3, type: 'Core' },
          { code: 'BCA206', name: 'Data Structures Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 3,
        name: 'Semester 3',
        subjects: [
          { code: 'BCA301', name: 'Database Management Systems', credits: 4, type: 'Core' },
          { code: 'BCA302', name: 'Operating Systems', credits: 4, type: 'Core' },
          { code: 'BCA303', name: 'Java Programming', credits: 4, type: 'Core' },
          { code: 'BCA304', name: 'Web Technologies (HTML, CSS, JavaScript)', credits: 3, type: 'Core' },
          { code: 'BCA305', name: 'Probability & Statistics', credits: 3, type: 'Core' },
          { code: 'BCA306', name: 'Java Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 4,
        name: 'Semester 4',
        subjects: [
          { code: 'BCA401', name: 'Python Programming', credits: 4, type: 'Core' },
          { code: 'BCA402', name: 'Computer Networks', credits: 4, type: 'Core' },
          { code: 'BCA403', name: 'Software Engineering', credits: 4, type: 'Core' },
          { code: 'BCA404', name: 'PHP & MySQL', credits: 3, type: 'Core' },
          { code: 'BCA405', name: 'Numerical Methods', credits: 3, type: 'Core' },
          { code: 'BCA406', name: 'Python Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 5,
        name: 'Semester 5',
        subjects: [
          { code: 'BCA501', name: 'Artificial Intelligence', credits: 4, type: 'Core' },
          { code: 'BCA502', name: 'Android App Development', credits: 4, type: 'Core' },
          { code: 'BCA503', name: 'Cloud Computing', credits: 4, type: 'Core' },
          { code: 'BCA504', name: 'Data Mining & Warehousing', credits: 3, type: 'Elective' },
          { code: 'BCA505', name: 'Cyber Security', credits: 3, type: 'Elective' },
          { code: 'BCA506', name: 'Mobile App Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 6,
        name: 'Semester 6',
        subjects: [
          { code: 'BCA601', name: 'Machine Learning', credits: 4, type: 'Core' },
          { code: 'BCA602', name: 'Blockchain Technology', credits: 4, type: 'Core' },
          { code: 'BCA603', name: 'Internet of Things', credits: 3, type: 'Elective' },
          { code: 'BCA604', name: 'Digital Marketing', credits: 3, type: 'Elective' },
          { code: 'BCA605', name: 'Major Project', credits: 6, type: 'Project' },
          { code: 'BCA606', name: 'Seminar & Viva Voce', credits: 2, type: 'Project' },
        ],
      },
    ],
  },
  bba: {
    title: 'Bachelor of Business Administration (BBA)',
    shortTitle: 'BBA',
    icon: Briefcase,
    description: 'A comprehensive 3-year program designed to build strong foundations in business management and administration.',
    duration: '3 Years (6 Semesters)',
    totalCredits: 132,
    eligibility: '10+2 with Mathematics/Statistics (50% minimum)',
    careers: ['Business Analyst', 'Marketing Manager', 'HR Executive', 'Financial Analyst', 'Operations Manager', 'Entrepreneur', 'Consultant', 'Sales Manager'],
    semesters: [
      {
        id: 1,
        name: 'Semester 1',
        subjects: [
          { code: 'BBA101', name: 'Principles of Management', credits: 4, type: 'Core' },
          { code: 'BBA102', name: 'Business Mathematics', credits: 4, type: 'Core' },
          { code: 'BBA103', name: 'Financial Accounting', credits: 4, type: 'Core' },
          { code: 'BBA104', name: 'Business Communication', credits: 2, type: 'AECC' },
          { code: 'BBA105', name: 'Microeconomics', credits: 3, type: 'Core' },
          { code: 'BBA106', name: 'Computer Applications in Business', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 2,
        name: 'Semester 2',
        subjects: [
          { code: 'BBA201', name: 'Organizational Behavior', credits: 4, type: 'Core' },
          { code: 'BBA202', name: 'Business Statistics', credits: 4, type: 'Core' },
          { code: 'BBA203', name: 'Macroeconomics', credits: 4, type: 'Core' },
          { code: 'BBA204', name: 'Environmental Studies', credits: 2, type: 'AECC' },
          { code: 'BBA205', name: 'Marketing Management', credits: 3, type: 'Core' },
          { code: 'BBA206', name: 'Spreadsheet Modeling Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 3,
        name: 'Semester 3',
        subjects: [
          { code: 'BBA301', name: 'Human Resource Management', credits: 4, type: 'Core' },
          { code: 'BBA302', name: 'Corporate Accounting', credits: 4, type: 'Core' },
          { code: 'BBA303', name: 'Business Law', credits: 4, type: 'Core' },
          { code: 'BBA304', name: 'Management Information Systems', credits: 3, type: 'Core' },
          { code: 'BBA305', name: 'Cost Accounting', credits: 3, type: 'Core' },
          { code: 'BBA306', name: 'Business Analytics Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 4,
        name: 'Semester 4',
        subjects: [
          { code: 'BBA401', name: 'Financial Management', credits: 4, type: 'Core' },
          { code: 'BBA402', name: 'Consumer Behavior', credits: 4, type: 'Core' },
          { code: 'BBA403', name: 'Operations Research', credits: 4, type: 'Core' },
          { code: 'BBA404', name: 'Income Tax Law', credits: 3, type: 'Core' },
          { code: 'BBA405', name: 'Entrepreneurship Development', credits: 3, type: 'Core' },
          { code: 'BBA406', name: 'Case Study Analysis Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 5,
        name: 'Semester 5',
        subjects: [
          { code: 'BBA501', name: 'Strategic Management', credits: 4, type: 'Core' },
          { code: 'BBA502', name: 'International Business', credits: 4, type: 'Core' },
          { code: 'BBA503', name: 'Digital Marketing', credits: 4, type: 'Core' },
          { code: 'BBA504', name: 'Investment Management', credits: 3, type: 'Elective' },
          { code: 'BBA505', name: 'Supply Chain Management', credits: 3, type: 'Elective' },
          { code: 'BBA506', name: 'Business Simulation Lab', credits: 2, type: 'Lab' },
        ],
      },
      {
        id: 6,
        name: 'Semester 6',
        subjects: [
          { code: 'BBA601', name: 'Business Ethics', credits: 4, type: 'Core' },
          { code: 'BBA602', name: 'Corporate Governance', credits: 4, type: 'Core' },
          { code: 'BBA603', name: 'Retail Management', credits: 3, type: 'Elective' },
          { code: 'BBA604', name: 'Project Management', credits: 3, type: 'Elective' },
          { code: 'BBA605', name: 'Major Project', credits: 6, type: 'Project' },
          { code: 'BBA606', name: 'Seminar & Viva Voce', credits: 2, type: 'Project' },
        ],
      },
    ],
  },
}

// Subject type colors
const typeColors = {
  Core: 'bg-blue-100 text-blue-700',
  Elective: 'bg-purple-100 text-purple-700',
  AECC: 'bg-green-100 text-green-700',
  Lab: 'bg-orange-100 text-orange-700',
  Project: 'bg-pink-100 text-pink-700',
}

interface CourseStructureProps {
  courseType: 'bca' | 'bba'
}

export function CourseStructure({ courseType }: CourseStructureProps) {
  const [activeSemester, setActiveSemester] = useState('1')
  const course = courseData[courseType]
  const Icon = course.icon
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{course.shortTitle} Program</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {course.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {course.title.split(' ').pop()}
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {course.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-xl font-semibold text-foreground">{course.duration}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                  <p className="text-xl font-semibold text-foreground">{course.totalCredits} Credits</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Eligibility</p>
                  <p className="text-sm font-semibold text-foreground">{course.eligibility}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Semester Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="1" className="w-full" onValueChange={setActiveSemester}>
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
              {course.semesters.map((sem) => (
                <TabsTrigger key={sem.id} value={sem.id.toString()} className="text-sm">
                  Sem {sem.id}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {course.semesters.map((semester) => (
                <TabsContent key={semester.id} value={semester.id.toString()}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white border-none shadow-xl overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                      <CardHeader>
                        <CardTitle className="text-2xl">{semester.name}</CardTitle>
                        <CardDescription>
                          Total Subjects: {semester.subjects.length} | Total Credits: {semester.subjects.reduce((acc, sub) => acc + sub.credits, 0)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {semester.subjects.map((subject, index) => (
                            <motion.div
                              key={subject.code}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Card className="bg-secondary/30 border-none hover:bg-secondary/50 transition-colors">
                                <CardContent className="p-4">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-mono text-muted-foreground">
                                          {subject.code}
                                        </span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[subject.type as keyof typeof typeColors]}`}>
                                          {subject.type}
                                        </span>
                                      </div>
                                      <h4 className="text-lg font-semibold text-foreground">
                                        {subject.name}
                                      </h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="text-sm bg-primary/10 px-3 py-1 rounded-full">
                                        {subject.credits} Credits
                                      </div>
                                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Subject Type Legend */}
      <section className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground mr-2">Subject Types:</span>
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${color.split(' ')[0]}`} />
                <span className="text-sm text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Career Opportunities
            </h2>
            <p className="text-muted-foreground">
              After completing {course.shortTitle}, students can pursue various roles in the {courseType === 'bca' ? 'IT' : 'corporate'} industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {course.careers.map((career, index) => (
              <motion.div
                key={career}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none shadow-sm text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <p className="text-sm font-medium text-foreground">{career}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-8 w-8 mx-auto mb-3 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 mb-4">
              Take the first step towards a rewarding career in {courseType === 'bca' ? 'computer applications' : 'business administration'}
            </p>
            <Button variant="secondary" size="lg" className="group">
              Apply for {course.shortTitle} Program
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}