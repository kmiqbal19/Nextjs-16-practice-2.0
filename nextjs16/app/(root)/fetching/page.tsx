const FetchingPage = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums', {
    }).then(res => res.json());
    console.log(albums);
    if (!albums) throw new Error('Failed to fetch albums');
  return (
    <div>
        {albums.map((album: {id: number; title: string}) => (
            <div key={album.id}>
                <h2>{album.id}</h2> 
                <p>{album.title}</p>
            </div>
        ))}
    </div>
  )
}

export default FetchingPage