import React from 'react'

interface LoadingOverlayProps {
  fullScreen: boolean
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ fullScreen }) => {
  return (
    <div className={`${fullScreen ? 'fixed' : 'absolute'} inset-0 flex justify-center items-center bg-white bg-opacity-70 z-50`}>
      <div className="border-4 border-t-4 border-gray-200 border-t-black rounded-full w-10 h-10 animate-spin"></div>
    </div>
  )
}

export default LoadingOverlay
