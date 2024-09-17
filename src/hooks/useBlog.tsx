import { useQuery } from '@tanstack/react-query';

import { getBlogPosts } from '@/services/blog.service';

export function useBlog() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: () => getBlogPosts(),
  });
}
