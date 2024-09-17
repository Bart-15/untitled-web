import axios from 'axios';

import { Blog } from '@/types/blog.types';
import { ApiResponse } from '@/types/global.types';

export async function getBlogPosts(): Promise<ApiResponse<Blog[]>> {
  return await axios.get(
    'https://raw.githubusercontent.com/kineticinvestments/snippets/cde0bfe6bf52cc75793d398974bc4a3694057344/example-articles.json',
  );
}
