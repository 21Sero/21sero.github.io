import React from 'react'
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p style={{
        fontSize:14,
        color:"#f1f1f1",
        marginTop: 40,
        fontWeight: 800
      }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader