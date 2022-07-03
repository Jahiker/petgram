import React from 'react'
import { TextBlock, RectShape, RoundShape } from "react-placeholder/lib/placeholders"

export const PhotoCardPlaceholder = () => {
  return (
    <React.Fragment>
      <RectShape color="#eee" style={{ height: "250px", borderRadius: "8px", padding: "5px", marginBottom: 10 }} />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  )
}
