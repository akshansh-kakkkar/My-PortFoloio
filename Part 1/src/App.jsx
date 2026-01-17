import { motion } from "motion/react"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3a3a3a]" style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0)`,
      backgroundSize: '8px 8px',
      backgroundRepeat : 'repeat',
    }}>

      <div className="group relative">
        
 
        <motion.button whileHover={{rotateX:22, rotateY:22}} initial={{rotate:[0,10,0]}} animate={{rotate:20}} transition={{duration:1}} className="px-14  py-4 rounded-xl bg-black text-neutral-300 border border-neutral-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          Hello I am Akshansh
        </motion.button>
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <span className="absolute left-1/2  opacity-0 group-hover:opacity-1000  -translate-x-1/2 -bottom-2 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>

    </div>
  )
}

export default App
