import axios from 'axios'
import Link from 'next/link'
import React from 'react'
// import axios from "axios"
const Experience = ({prof}) => {
    console.log(prof)
  return (
    <div>           
    <h1>Experience</h1>
            <div>
                {
                  prof.company.split(" @").map((el)=>{
                    return (<div key={el}> <text>softwate Engineer at {el}</text><br /></div>)
                })
                }
              </div>
      </div>
  )
}

export async function getServerSideProps(){
    let res = await axios.get("https://api.github.com/users/riteshf") 
    // let data =  await res.json()
    console.log(res.data)
    return{
        props:{
            prof:res.data
        }
    }
}

export default Experience


