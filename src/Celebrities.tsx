import { useCelebritiesQuery } from '@/generated/graphql'

const Celebrities = () => {
  const { data, loading, error } = useCelebritiesQuery()

  console.log(data)

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      timeZone: 'UTC',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error: ${error.message}</p>

  if (!data?.celebrities?.length) return <p>No celebrities found.</p>

  return (
    <div>
      {data?.celebrities?.map((celebrity) => (
        <div key={celebrity?.id}>
          <h2>{celebrity?.name}</h2>
          <p>{formatDate(celebrity?.dateOfBirth)}</p>
        </div>
      ))}
    </div>
  )
}

export default Celebrities
