import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

export default function useReadQuestion() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
}
