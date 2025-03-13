import React from 'react'
import { Progress } from '@/components/ui/progress'

interface ProgressProps {
  progresses: { value: number, title: string }[];
}

const getColorByValue = (value: number) => {
  if (value < 10) return '#FF0000'; 
  if (value < 30) return '#FF4500'; 
  if (value < 50) return '#FFA500'; 
  if (value < 70) return '#FFFF00'; 
  if (value < 90) return '#ADFF2F'; 
  return '#00FF00'; 
}

const ProgressList: React.FC<ProgressProps> = ( { progresses } ) => {
  return (
    <div>
      {progresses.map((progress, index) => (
        <div key={index} className="mb-4">
          <Progress value={progress.value} title={progress.title} color={getColorByValue(progress.value)}/>
        </div>
      ))}
    </div>
  )
}

export default ProgressList