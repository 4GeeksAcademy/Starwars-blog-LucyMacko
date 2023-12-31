import React from "react"
import "../../styles/nopage.css"; 

const NoPage = () =>{
    return (
        <div className="container-fluid justify-content-center" id="main">
            <div className="title">
                <h1 className="text-center my-5" id="noPageTitle">May the force be with you because there is no such page available...🙄</h1>  
            </div>
            <div className="body">
                <img id="noPagePicture" className="rounded mx-auto d-block" src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fmasonry%2F001%2F005%2F938%2F600.jpg"></img>
            </div>              
        </div>
        
    )
}

export default NoPage