import axios from 'axios';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import koLocale from 'date-fns/locale/ko';

export async function imageUpload(file: File): Promise<string> {
  const { data }: { data: { url: string } } = await axios.post('/api/image', {
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

// Velog
export function formatDate(date: string): string {
  const d = new Date(date);
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  // less than 5 minutes
  if (diff < 1000 * 60 * 5) {
    return '방금 전';
  }
  if (diff < 1000 * 60 * 60 * 24) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
  }
  if (diff < 1000 * 60 * 60 * 36) {
    return '어제';
  }
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
  }
  return format(d, 'yyyy년 M월 d일');
}
