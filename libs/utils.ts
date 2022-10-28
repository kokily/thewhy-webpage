import axios from 'axios';

export async function imageUpload(file: File): Promise<string> {
  const { data }: { data: { url: string } } = await axios.post('/api/images', {
    name: file.name,
    type: file.type,
  });

  await axios.put(data.url, file, {
    headers: {
      'Content-Type': file.type,
      'Access-Control-Allow-Origin': '*',
    },
  });

  const target = data.url.split('?');

  return target[0];
}
