import { Box, Environment, Html, OrbitControls, Stats } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import rangeInclusive from "range-inclusive"

import DistanceGeometry from "../geometries/DistanceGeometry"

function Scene() {
  const ref = useRef()
  let num = 8

  const [windowData] = useState({
    lengthArr: rangeInclusive(0, window.innerWidth, window.innerWidth / num),
    heightArr: rangeInclusive(0, window.innerHeight, window.innerWidth / num),
  })

  const material = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    flatShading: true,
    wireframe: false,
    color: "#86439A",
  })

  return (
    <Canvas dpr={2} antialias={true}>
      {/* <Stats /> */}
      <Suspense fallback={null}>
        {windowData.lengthArr.map((pos, id) =>
          windowData.heightArr.map((pos2, i) => (
            <DistanceGeometry
              xPos={pos}
              yPos={pos2}
              dataIndex={id + i}
              material={material}
            />
          ))
        )}

        <Environment preset="sunset" intensity={4} />
      </Suspense>

      {/* <OrbitControls ref={ref} /> */}
    </Canvas>
  )
}

export default Scene
