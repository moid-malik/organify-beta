import { useCurrent } from '@/features/auth/api/use-current';

export const useIsAdmin = () => {
  const { data: currentUser } = useCurrent();
  return currentUser?.email === 'kashif@admin.com';
};
