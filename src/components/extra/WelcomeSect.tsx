import React from 'react'

export default function Welcome() {
  return (
    <div className={'flex flex-col p-4 pt-10 gap-4 text-black'}>
    <div className={'text-3xl  font-light p-1 w-full'}>
      {"Nice to see you, Anas Benhalima"}
    </div>
    <div className={'flex flex-row justify-between w-full  '}>
      <h3 className={'text-xl font-light '}>{"Here are content recommendations just for you. What will you learn today?"}</h3>
      <h4>{"Looking for your Cisco Digital Learning courses?"} </h4>
    </div>
  </div>

  )
}
