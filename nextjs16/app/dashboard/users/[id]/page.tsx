import React from 'react'

const UserPage =  async ({params}: {params : Promise<{id: string}>}) => {
    const {id} = await params
  return (
    <div className='w-100 border-4'>
        User Detail Page - {id}
    </div>
  )
}

export default UserPage