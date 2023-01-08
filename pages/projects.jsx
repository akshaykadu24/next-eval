import axios from 'axios'
import Link from 'next/link'
import React from 'react'
// import axios from "axios"
const Projects = ({repo}) => {
    console.log(repo)
  return (
    <div>           
    <h1>Projects</h1>
            <div style={{display:'grid',gridTemplateColumns:'180px 180px 180px 180px'}}>
            {   repo.items.map((el)=>{
                  return(
                    <div key={el.name} >
                      <Link href={el.html_url}><h2>{el.name}</h2></Link>
                      <div>
                        <p>fork: {el.forks_count}</p>
                      </div>
                      <p>{el.language}</p>
                      <p>{el.watchers_count}</p>
                      <p>following: {el.following}</p>
                    </div>
                  )})
              }   
            </div>
      </div>
  )
}

export async function getServerSideProps(){
    let res = await axios.get("https://api.github.com/search/repositories?q=user:riteshf+fork:true&sort=updated&per_page=10&type=Repositories") 
    // let data =  await res.json()
    console.log(res.data)
    return{
        props:{
            repo:res.data
        }
    }
}

export default Projects


