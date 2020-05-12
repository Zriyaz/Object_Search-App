import React from "react"

const ImageList=(props)=>{
  const image = props.image.map(({description ,id,urls})=>{
    return <img key={id} src={urls.regular} alt={description}/>

  })
  return <div>Image List:{image}</div>
}
export default ImageList