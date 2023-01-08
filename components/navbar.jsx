import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between', margin:"20px", fontSize:"30px"}}>
        <div>
            <Link href="/">Home  </Link>
            <Link href="/projects">Project  </Link>
            <Link href="/experience">Experience  </Link>
        </div>
        <div>
        <Image style={{borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/40817224?v=4" width={50} height={50} alt="pic" />

        </div>
    </div>
  )
}

export default Navbar